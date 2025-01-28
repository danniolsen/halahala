import type { Meta, StoryObj } from "@storybook/react";
import AppHeader from "@/src/app/components/AppHeader";

const meta = {
  title: "AppHeader",
  component: AppHeader,
  argTypes: {},
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {
  args: {},
};
