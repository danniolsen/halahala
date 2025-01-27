import type { StandingDataRecord } from "@/src/types/standings.types";

export const standingsTestData: StandingDataRecord[] = [
  {
    played: 21,
    points: 49,
    won: 15,
    drawn: 4,
    lost: 2,
    goals_for: 50,
    goals_against: 20,
    goal_difference: "+30",
    position: 1,
    team: {
      id: 15,
      name: "Real Madrid Club de Fútbol",
      nickname: "Real Madrid",
    },
    qualify: {
      name: "Champions League",
      shortname: "Champions League",
      color: "#4fde36",
    },
  },
  {
    played: 21,
    points: 45,
    won: 13,
    drawn: 6,
    lost: 2,
    goals_for: 35,
    goals_against: 14,
    goal_difference: "+21",
    position: 2,
    team: {
      id: 2,
      name: "Club Atlético de Madrid SAD",
      nickname: "Atlético de Madrid",
    },
    qualify: {
      name: "Champions League",
      shortname: "Champions League",
      color: "#4fde36",
    },
  },
  {
    played: 21,
    points: 42,
    won: 13,
    drawn: 3,
    lost: 5,
    goals_for: 59,
    goals_against: 24,
    goal_difference: "+35",
    position: 3,
    team: {
      id: 4,
      name: "Fútbol Club Barcelona",
      nickname: "FC Barcelona",
    },
    qualify: {
      name: "Champions League",
      shortname: "Champions League",
      color: "#4fde36",
    },
  },
  {
    played: 21,
    points: 40,
    won: 11,
    drawn: 7,
    lost: 3,
    goals_for: 31,
    goals_against: 18,
    goal_difference: "+13",
    position: 4,
    team: {
      id: 3,
      name: "Athletic Club",
      nickname: "Athletic Club",
    },
    qualify: {
      name: "Champions League",
      shortname: "Champions League",
      color: "#4fde36",
    },
  },
  {
    played: 21,
    points: 34,
    won: 9,
    drawn: 7,
    lost: 5,
    goals_for: 39,
    goals_against: 32,
    goal_difference: "+7",
    position: 5,
    team: {
      id: 20,
      name: "Villarreal Club de Fútbol SAD",
      nickname: "Villarreal CF",
    },
  },
  {
    played: 21,
    points: 30,
    won: 9,
    drawn: 3,
    lost: 9,
    goals_for: 19,
    goals_against: 26,
    goal_difference: "-7",
    position: 6,
    team: {
      id: 33,
      name: "Real Club Deportivo Mallorca SAD",
      nickname: "RCD Mallorca",
    },
  },
];
