import inquirer from "inquirer";
import { execSync } from "child_process";
import semver from "semver";

function getLatestTag(service) {
  try {
    const tags = execSync(`git tag --sort=-v:refname`)
      .toString()
      .split("\n")
      .filter((tag) => tag.startsWith(`${service}@`));
    return tags[0] || `${service}@0.0.0`;
  } catch {
    return `${service}@0.0.0`;
  }
}

(async () => {
  const { service } = await inquirer.prompt({
    type: "list",
    name: "service",
    message: "어떤 서비스를 배포할까요?",
    choices: ["nba-web"],
  });

  const latestTag = getLatestTag(service);
  const currentVersion = latestTag.split("@")[1];

  const { bump } = await inquirer.prompt({
    type: "list",
    name: "bump",
    message: `현재 버전: ${currentVersion}, 어떤 버전으로 올릴까요?`,
    choices: ["patch", "minor", "major"],
  });

  const nextVersion = semver.inc(currentVersion, bump);
  const nextTag = `${service}@${nextVersion}`;

  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: `태그 ${nextTag}로 배포를 진행할까요?`,
  });

  if (!confirm) return;

  execSync(`git tag ${nextTag}`);
  execSync(`git push origin ${nextTag}`);

  console.log(`✅ 태그 ${nextTag} 생성 및 푸시 완료`);
})();
