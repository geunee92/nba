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
    choices: ["nba-web", "epl-web"],
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

  // 중복 태그 방지
  const existingTags = execSync(`git tag`).toString();
  if (existingTags.includes(nextTag)) {
    console.error(`❌ 이미 존재하는 태그입니다: ${nextTag}`);
    process.exit(1);
  }

  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: `태그 ${nextTag}로 배포를 진행할까요?`,
  });

  if (!confirm) return;

  execSync(`git tag ${nextTag}`);
  execSync(`git push origin ${nextTag}`);

  console.log(`✅ 태그 ${nextTag} 생성 및 푸시 완료`);

  // Vercel 배포
  console.log("🚀 Vercel 배포 중...");
  execSync(
    `npx vercel deploy --cwd services/${service} --prod --yes --token=${process.env.VERCEL_TOKEN}`,
    { stdio: "inherit" },
  );
})();
