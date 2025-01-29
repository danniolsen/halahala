import type { Meta, StoryObj } from "@storybook/react";

import StandingsHeader from "@/src/components/StandingsHeader";

const meta = {
  title: "StandingsHeader",
  component: StandingsHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StandingsHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
