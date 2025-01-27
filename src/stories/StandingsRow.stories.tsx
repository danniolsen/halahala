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
  args: {
    position: 12,
    drawn: 2,
    listCount: 20,
    lost: 3,
    points: 49,
    played: 40,
    team: {
      nickname: "Real Madrid",
    },
    won: 50,
  },
};

export const StandingRowUcl: Story = {
  args: {
    position: 1,
    drawn: 2,
    listCount: 20,
    lost: 3,
    points: 49,
    played: 40,
    team: {
      nickname: "Real Madrid",
    },
    won: 50,
  },
};
export const StandingRowRelegation: Story = {
  args: {
    position: 20,
    drawn: 2,
    listCount: 20,
    lost: 3,
    points: 49,
    played: 40,
    team: {
      nickname: "Real Madrid",
    },
    won: 50,
  },
};
