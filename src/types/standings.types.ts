import type { TeamType } from "@/src/types/Match.type";

type StandingsTeamType = {
  id?: number;
  slug?: string;
  name?: string;
  nickname: string;
  boundname?: string;
  shortname?: string;
  sprite_status?: string;
  shield?: {
    id: number;
  };
  competitions?: string[];
};

type QualifyType = {
  name: string;
  shortname: string;
  color: string;
};

export type StandingDataRecord = {
  played: number;
  points: number;
  won: number;
  drawn: number;
  lost: number;
  position: number;
  goals_for?: number;
  goals_against?: number;
  goal_difference?: string;
  team: StandingsTeamType;
  previous_position?: number;
  difference_position?: number;
  qualify?: QualifyType;
};
