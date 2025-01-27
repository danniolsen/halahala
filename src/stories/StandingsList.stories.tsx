import type { Meta, StoryObj } from "@storybook/react";
import { standingsTestData } from "@/src/testData/standingsTestData";
import StandingsList from "@/src/app/components/StandingsList";

const meta = {
  title: "StandingsList",
  component: StandingsList,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof StandingsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    standings: standingsTestData,
  },
};
