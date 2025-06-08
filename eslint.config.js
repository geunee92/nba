// ✅ 기본 ESLint 설정 import
import js from "@eslint/js"; // JavaScript용 기본 recommended rule set
import globals from "globals"; // 전역 변수 정의 (browser, node 등 환경별 구분 가능)
import reactHooks from "eslint-plugin-react-hooks"; // 리액트 훅 규칙
import reactRefresh from "eslint-plugin-react-refresh"; // Fast Refresh 지원 (HMR 관련)
import tseslint from "typescript-eslint"; // TypeScript용 ESLint 설정
import unusedImports from "eslint-plugin-unused-imports"; // 사용되지 않는 import 제거용 플러그인

export default tseslint.config(
  // ✅ 1. 공통적으로 무시할 파일/디렉토리 설정
  {
    ignores: [
      "dist", // 번들 결과물 무시
      "node_modules", // 외부 모듈 무시
      "packages/*/dist/**", // 모든 패키지 내 dist 무시
      "services/*/dist/**", // 서비스 내 dist 무시
    ],
  },

  // ✅ 2. TypeScript + React 설정 (브라우저 환경 대상)
  {
    files: ["**/*.{ts,tsx}"], // 해당 확장자에만 적용 (TypeScript & React JSX)
    languageOptions: {
      ecmaVersion: 2020, // 최신 ECMAScript 문법 허용
      sourceType: "module", // ES6 import/export 문법 사용 가능
      parser: tseslint.parser, // TypeScript용 파서 지정
      globals: globals.browser, // 브라우저 환경의 전역 변수 사용 허용 (e.g. window, document)
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin, // TypeScript lint 규칙 플러그인
      "react-hooks": reactHooks, // 리액트 훅 관련 규칙
      "react-refresh": reactRefresh, // Fast Refresh 관련 규칙
      "unused-imports": unusedImports, // 사용되지 않는 import 제거
    },
    rules: {
      ...js.configs.recommended.rules, // JavaScript 권장 규칙
      ...tseslint.configs.recommended.rules, // TypeScript 기본 규칙
      ...reactHooks.configs.recommended.rules, // 리액트 훅 권장 규칙

      // ✅ react-refresh 전용 경고 (파일명 대문자 + default export만 허용)
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // 상수로 정의된 export 허용
      ],

      // ✅ 사용되지 않는 import 제거 (경고 수준)
      "unused-imports/no-unused-imports": "warn",

      // ✅ 사용되지 않는 변수/인자 제거
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all", // 모든 변수 체크
          varsIgnorePattern: "^_", // _로 시작하면 무시
          args: "after-used", // 마지막 이후의 인자만 검사
          argsIgnorePattern: "^_", // _로 시작하는 인자 무시
        },
      ],

      // ✅ React 17+의 JSX Transform에서는 React import가 없어도 되므로 오류 방지
      "no-undef": "off",
    },
  },

  // ✅ 3. Node.js 환경 설정 (.storybook, vitest, *.cjs 등)
  {
    files: [
      "**/.storybook/**/*.{js,ts}", // 스토리북 설정 파일
      "**/vitest.*.ts", // vitest 관련 파일
      "**/*.cjs", // CommonJS 파일
    ],
    languageOptions: {
      ecmaVersion: 2020, // 최신 ECMAScript
      sourceType: "script", // CommonJS 환경
      globals: globals.node, // Node.js 전역 변수 (e.g. __dirname, require 등)
    },
    rules: {
      ...js.configs.recommended.rules, // 기본 자바스크립트 규칙만 적용
    },
  },
);
