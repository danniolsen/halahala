import type { TeamType } from "@/src/types/Match.type";

export type QualifyType = {
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
  team: Omit<TeamType, "shield">;
  qualify?: QualifyType;
};
