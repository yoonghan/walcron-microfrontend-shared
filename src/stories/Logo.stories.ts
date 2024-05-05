import type { Meta, StoryObj } from "@storybook/react";

import Logo from "../components/Logo";

const meta: Meta = {
  title: "Walcron/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Recolored: Story = {
  args: { color: "green" },
};
