import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import vike from "vike/plugin";
import { configDefaults } from "vitest/config";
import { fileURLToPath } from "node:url";

const filesNeedToExclude = ["server/index.ts", "server/root.ts"];

const filesPathToExclude = filesNeedToExclude.map((src) => {
  return fileURLToPath(new URL(src, import.meta.url));
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts(),
    process.env.NODE_ENV === "development" ? vike() : undefined,
  ],
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
    environment: "jsdom",
    setupFiles: "./test-setup.js",
    exclude: [...configDefaults.exclude, "e2e/*", "playwright*"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "cobertura"],
      thresholds: {
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
