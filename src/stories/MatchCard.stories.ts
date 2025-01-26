import type { Meta, StoryObj } from "@storybook/react";

import {
  competitionUcl,
  matchRealBrest,
  teamBrest,
  teamRealMadrid,
  venueBrest,
} from "@/src/app/test/mockData/newMatch";
import MatchCard from "@/src/app/components/MatchCard";

const meta = {
  title: "MatchCard",
  component: MatchCard,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "padded",
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
