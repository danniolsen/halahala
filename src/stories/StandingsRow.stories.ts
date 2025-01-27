import type { Meta, StoryObj } from "@storybook/react";

import { standingsTestData } from "@/src/testData/standingsTestData";
import StandingsRow from "@/src/app/components/StandingsRow";

const meta = {
  title: "StandingsRow",
  component: StandingsRow,
  parameters: {
    layout: "fullScreen",
  },
  argTypes: {},
} satisfies Meta<typeof StandingsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandingRow: Story = {
  args: standingsTestData[0],
};

export const StandingRowUcl: Story = {
  args: standingsTestData[1],
};

export const StandingRowRelegation: Story = {
  args: standingsTestData[5],
};
