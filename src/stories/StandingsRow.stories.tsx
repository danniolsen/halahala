import type { Meta, StoryObj } from "@storybook/react";
import StandingsRow from "@/src/app/components/StandingsRow";
import { standingsTestData } from "../testData/standingsTestData";
const meta = {
  title: "StandingsRow",
  component: StandingsRow,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StandingsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = { color: "border-transparent", ...standingsTestData[8] };
const argsUcl = { color: "border-sky-500", ...standingsTestData[0] };
const argsRel = { color: "border-red-400", ...standingsTestData[19] };
export const StandingRow: Story = {
  args: args,
};

export const StandingRowUcl: Story = {
  args: argsUcl,
};
export const StandingRowRelegation: Story = {
  args: argsRel,
};
