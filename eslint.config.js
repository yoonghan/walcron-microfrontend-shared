import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js, pluginReact },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: {
      react: {
        version: "detect",
        pragma: "React",
        jsxRuntime: "automatic" // 👈 new JSX transform support
      },
      rules: {
        "react/jsx-uses-react": "off", // No longer needed with the new JSX transform
        "react/react-in-jsx-scope": "off" // No longer needed with the new JSX transform
      }
    }
  }
]);
