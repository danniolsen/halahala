import type { Meta, StoryObj } from "@storybook/react";

import {
  competitionUcl,
  matchRealBrest,
  teamBrest,
  teamRealMadrid,
  venueBrest,
} from "@/src/testData/newMatch";
import MatchCard from "@/src/components/MatchCard";

const meta = {
  title: "MatchCard",
  component: MatchCard,
  argTypes: {
    status: {
      options: ["PreMatch", "FirstHalf", "HalfTime", "SecondHalf"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof MatchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: matchRealBrest.id,
    venue: venueBrest,
    status: "FirstHalf",
    home_team: teamBrest,
    home_score: 0,
    away_team: teamRealMadrid,
    away_score: 0,
    competition: competitionUcl,
    date: matchRealBrest.date,
  },
};
