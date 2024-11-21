/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["src/setupTest.ts"],
    coverage: {
      include: ["src/**/**.ts", "src/**/**.tsx"],
      exclude: [
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/handlers",
        "src/mocks",
        "src/post/client/types.ts",
        "src/post/types.ts",
      ],
    },
  },
});
