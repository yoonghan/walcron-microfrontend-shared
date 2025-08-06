import type { Meta, StoryObj } from "@storybook/react";

import MiniMenu from "../components/MiniMenu";

const meta: Meta = {
  title: "Walcron/MiniMenu",
  component: MiniMenu,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof MiniMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    model: [
      { hashId: "about-us", title: "About Us" },
      { hashId: "five-pillars", title: "Five Pillars" },
    ],
    onScrollMonitor: () => {}
  },
};
