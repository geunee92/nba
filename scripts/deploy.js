#!/usr/bin/env node

import inquirer from "inquirer";
import { execSync } from "child_process";
import semver from "semver";

function getLatestTag(service) {
  try {
    return (
      execSync(`git tag --sort=-v:refname`)
        .toString()
        .split("\n")
        .filter((tag) => tag.startsWith(`${service}@`))[0] || `${service}@0.0.0`
    );
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
  const baseVersion = latestTag.split("@")[1];

  const { level } = await inquirer.prompt({
    type: "list",
    name: "level",
    message: `현재 버전은 ${baseVersion}입니다. 어떤 변경인가요?`,
    choices: ["major", "minor", "patch"],
  });

  const newVersion = semver.inc(baseVersion, level);
  const newTag = `${service}@${newVersion}`;

  const { confirm } = await inquirer.prompt({
    type: "confirm",
    name: "confirm",
    message: `이 태그 (${newTag})로 배포할까요?`,
  });

  if (!confirm) {
    console.log("배포 취소됨");
    return;
  }

  execSync(`git tag ${newTag}`);
  execSync(`git push origin ${newTag}`);

  console.log(`✅ ${newTag} 태그 푸시 완료!`);
})();
