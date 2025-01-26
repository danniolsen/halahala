type PersonType = {
  nickname: string;
};

type GoalTeamType = {
  id: number;
};

export type LineUpType = {
  person: PersonType;
  team: GoalTeamType;
};

export type MatchEventType = {
  id: number;
  name?: string;
  collection: string;
};

export type EventType = {
  lineup: LineUpType;
  match_event_kind: MatchEventType;
  clock: string;
};

export type ScoreEventType = {
  nickname?: string;
  minutes: string[];
};
