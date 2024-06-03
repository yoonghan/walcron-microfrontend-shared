import type { Meta, StoryObj } from "@storybook/react";

import Menu from "../components/Menu";
import React from "react";

const meta: Meta = {
  title: "Walcron/Menu",
  component: Menu,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    model: [
      {
        label: "Zoo Negara",
        url: "/about-us",
        items: [
          {
            label: "About Us",
          },
          {
            label: "Zoo Negara Logo",
            url: "#logo",
          },
        ],
      },
      {
        label: "News",
        url: "/sample-us",
      },
    ],
    mobileHomeText: "Zoo Negara Malaysia",
    shortcutComponent: <div>Extension Button</div>,
    menuLink: (
      text: string,
      href: string,
      role: "menuitem",
      onClick?: () => void
    ) => (
      <a
        href={href}
        role={role}
        onClick={(e) => {
          e.preventDefault();
          onClick && onClick();
        }}
      >
        {text}
      </a>
    ),
    homeLink: (
      text: string,
      href: string,
      onClick: () => void,
      tabIndex: number
    ) => (
      <a
        href={href}
        tabIndex={tabIndex}
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {text}
      </a>
    ),
    homeLogoLink: (helperClassName: string) => (
      <a href={"/"} className={helperClassName}>
        <img src="img" alt="home link"></img>
      </a>
    ),
  },
};
