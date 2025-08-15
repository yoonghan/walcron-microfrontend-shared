import type { Meta, StoryObj } from "@storybook/react"

import Announcement from "../components/Announcement"

const meta: Meta = {
  title: "Walcron/Announcement",
  component: Announcement,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Announcement>

export default meta
type Story = StoryObj<typeof meta>

export const SingleAnnouncement: Story = {
  args: {
    ariaAnnouncementTitle: "An Announcement",
    announcements: ["We want you!"],
  },
}

export const ThreeAnnouncement: Story = {
  args: {
    ariaAnnouncementTitle: "The three Stooges",
    announcements: [
      "mickey",
      <div>
        A <br /> Happy <br /> Birthday
      </div>,
      "goofy",
    ],
  },
}
