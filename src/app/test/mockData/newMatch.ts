import type {
  CompetitionType,
  MatchType,
  TeamType,
  VenueType,
} from "@/src/app/types/Match.type";

// teams
export const teamRealMadrid: TeamType = {
  id: 1039,
  name: "Brest",
  nickname: "Brest",
  shield: {
    id: 503643,
    caption: "caption",
    resizes: {
      xsmall:
        "https://assets.laliga.com/assets/2021/03/11/xsmall/fd8365246491a93b40d688c688d8d4e9.png",
      small:
        "https://assets.laliga.com/assets/2021/03/11/small/fd8365246491a93b40d688c688d8d4e9.png",
      medium: "",
      large: "",
      xlarge: "",
    },
  },
  color: "#FFF",
};

export const teamBrest: TeamType = {
  id: 15,
  name: "Real Madrid Club de Fútbol",
  nickname: "Real Madrid",
  shield: {
    id: 149,
    caption: "",
    resizes: {
      xsmall:
        "https://assets.laliga.com/assets/2019/06/07/xsmall/real-madrid.png",
      small:
        "https://assets.laliga.com/assets/2019/06/07/small/real-madrid.png",
      medium: "",
      large: "",
      xlarge: "",
    },
  },
  color: "#F00",
};

// competitions
export const competitionUcl: CompetitionType = {
  name: "UEFA Champions League",
};

export const competitionLaLiga: CompetitionType = {
  name: "LALIGA EA SPORTS",
};

export const competitionCopaDelRey: CompetitionType = {
  name: "Copa del Rey",
};

// match basicData
export const matchRealBrest: Pick<MatchType, "id" | "date"> = {
  id: 95689,
  date: "2025-01-29T20:00:00+00:00",
};

// venues
export const venueBrest: VenueType = {
  id: 175,
  name: "Stade du Roudourou",
};
