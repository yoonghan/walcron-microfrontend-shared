import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "Micro Frontend Shared",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./test-setup.js",
    exclude: [...configDefaults.exclude, "e2e/*", "playwright*"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "cobertura"],
      threshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
});
