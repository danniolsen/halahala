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
  time: number;
  match_event_kind: MatchEventType;
};

export type ScoreEventType = {
  nickname?: string;
  minutes: number[];
};
