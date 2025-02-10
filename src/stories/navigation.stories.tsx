import type { Meta, StoryObj } from "@storybook/react";
import Navigation from "@/src/components/Navigation";

const meta = {
  title: "Navigation",
  component: Navigation,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        segments: ["upcommingmatches", "standings", "pastmatches", "info"],
      },
    },
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {},
};
