import { resolve } from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import vike from "vike/plugin"
import { configDefaults } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ exclude: "**/*.test.ts" }),
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
      provider: "v8",
      reporter: ["text", "cobertura"],
      exclude: [
        "pages",
        "server",
        "renderer",
        "src/stories/*",
        ".storybook",
        "playwright-report",
        "playwright.config.ts",
        "dist",
        "vite.config.ts",
        "register.js",
        "eslint.config.js",
      ],
      thresholds: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    css: {
      modules: {
        classNameStrategy: "non-scoped",
      },
    },
  },
})
