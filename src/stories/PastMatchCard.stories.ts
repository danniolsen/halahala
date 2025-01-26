import type { Meta, StoryObj } from "@storybook/react";
import {
  competitionLaLiga,
  teamBrest,
  teamRealMadrid,
} from "@/src/app/test/mockData/newMatch";
import PastMatchCard from "@/src/app/components/PastMatchCard";

const meta = {
  title: "PastMatchCard",
  component: PastMatchCard,
  argTypes: {},
} satisfies Meta<typeof PastMatchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoGoals: Story = {
  args: {
    home_team: teamBrest,
    home_score: 0,
    away_team: teamRealMadrid,
    away_score: 0,
    competition: competitionLaLiga,
  },
};
