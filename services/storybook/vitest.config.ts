// services/storybook/vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./.storybook/vitest.setup.ts"],
    include: ["src/**/*.test.tsx"],
    coverage: {
      reporter: ["text", "html"],
    },
    browser: {
      enabled: false, // util.inspect 오류 방지
    },
  },
});
