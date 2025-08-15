import type { StorybookConfig } from "@storybook/react-vite"
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  typescript: {
    check: false,
    skipCompiler: false,
  },
}
export default config
