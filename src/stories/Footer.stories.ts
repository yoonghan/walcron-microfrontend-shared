import type { Meta, StoryObj } from "@storybook/react";

import Footer from "../components/Footer";

const meta: Meta = {
  title: "Walcron/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { lastUpdatedYear: 2023 },
};

export const ExpandedFooter: Story = {
  args: { companyName: "Greenwich", establishedYear: 1, lastUpdatedYear: 2023 },
};
