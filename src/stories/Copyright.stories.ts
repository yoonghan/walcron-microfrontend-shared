import type { Meta, StoryObj } from "@storybook/react";

import Copyright from "../components/Copyright";

const meta = {
  title: "Walcron/Copyright",
  component: Copyright,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Copyright>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { lastUpdatedYear: 2023 },
};

export const ExpandedCopyright: Story = {
  args: {
    companyName: "Greenwich",
    link: "https://www.walcron.com",
    lastUpdatedYear: 2023,
  },
};
