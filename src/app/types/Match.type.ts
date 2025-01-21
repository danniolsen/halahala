type ResizesType = {
  xsmall: string;
  small: string;
  medium: string;
  large: string;
  xlarge: string;
};

export type ShieldType = {
  id: number;
  resizes: ResizesType;
  caption: string;
};

export type TeamType = {
  id?: number;
  name?: string;
  nickname: string;
  color?: string;
  color_secondary?: string;
  shield: ShieldType;
};

export type CompetitionType = {
  name: "LALIGA EA SPORTS" | "UEFA Champions League" | "Copa del Rey";
};

type VenueType = {
  id: number;
  name: string;
};

/* Full match type */
export type MatchType = {
  id?: number;
  date: string;
  competition: CompetitionType;
  home_score: number;
  away_score: number;
  status: string;
  home_team: TeamType;
  away_team: TeamType;
  venue: VenueType;
};
