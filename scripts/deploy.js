import inquirer from "inquirer";
import { execSync } from "child_process";

const PROJECTS = [
  { name: "NBA 서비스 배포", value: "nba-web" },
  { name: "EPL 서비스 배포", value: "epl" },
];

async function main() {
  const { target } = await inquirer.prompt([
    {
      type: "list",
      name: "target",
      message: "어떤 서비스를 배포하시겠습니까?",
      choices: PROJECTS,
    },
  ]);

  const { confirm } = await inquirer.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: `"${target}" 서비스를 정말 배포하시겠습니까?`,
      default: false,
    },
  ]);

  if (!confirm) {
    console.log("배포가 취소되었습니다.");
    return;
  }

  try {
    execSync(`vercel deploy --prod --yes --cwd services/${target}`, {
      stdio: "inherit",
    });
  } catch (e) {
    console.error("배포 중 오류가 발생했습니다.", e);
  }
}

main();
