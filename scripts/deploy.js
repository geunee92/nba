#!/usr/bin/env node

import { execSync } from "child_process";
import inquirer from "inquirer";
import semver from "semver";

function getLatestTag(service) {
  const all = execSync("git tag --sort=-v:refname").toString().split("\n");
  const filtered = all.filter((t) => t.startsWith(`${service}@`));
  return filtered[0] || `${service}@0.0.0`;
}

(async () => {
  const { service } = await inquirer.prompt({
    type: "list",
    name: "service",
    message: "어떤 서비스를 배포할까요?",
    choices: ["nba-web", "epl-web"],
  });

  const latestTag = getLatestTag(service);
  const currentVer = latestTag.split("@")[1];
  const { bump } = await inquirer.prompt({
    type: "list",
    name: "bump",
    message: `현재 태그: ${latestTag} → bump 종류를 선택하세요`,
    choices: ["patch", "minor", "major"],
  });

  const nextVer = semver.inc(currentVer, bump);
  const nextTag = `${service}@${nextVer}`;

  if (execSync("git tag").toString().includes(nextTag)) {
    console.error(`❌ 태그 중복: ${nextTag} 이미 존재합니다.`);
    process.exit(1);
  }

  const { ok } = await inquirer.prompt({
    type: "confirm",
    name: "ok",
    message: `태그 ${nextTag} 생성 & 푸시할까요?`,
  });
  if (!ok) process.exit(0);

  execSync(`git tag ${nextTag}`);
  execSync(`git push origin ${nextTag}`);

  console.log(`✅ ${nextTag} 태그 생성 및 푸시 완료`);
})();
