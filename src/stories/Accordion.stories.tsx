import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "../components/Accordion";

const meta: Meta = {
  title: "Walcron/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioBehavior: Story = {
  args: {
    model: [
      {
        label: "Item 1",
        content: "1 Lorem ipsum dolor sit amet!",
      },
      {
        label: "Item 2",
        content: "Here i am.",
      },
    ],
    groupName: "faq",
  },
};

export const CheckboxBehavior: Story = {
  args: {
    model: [
      {
        label: "Item 1",
        content: "1 Lorem ipsum dolor sit amet!",
      },
      {
        label: "Item 2",
        content: "Here i am.",
      },
    ],
    groupName: "faq",
    isSingle: false,
  },
};
