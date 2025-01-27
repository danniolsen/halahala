import type { CompetitionType } from "@/src/types/Match.type";
import LaligaLogo from "../../public/la-liga.svg";
import ChampionsLogo from "../../public/champions-league.svg";
import CopaReyLogo from "../../public/copa-del-rey.svg";

import {
  getCompetitionColor,
  getCompetitionLogo,
  getCompetitionName,
} from "@/src/utils/competitionAssets";

const laLiga: CompetitionType = {
  name: "LALIGA EA SPORTS",
};

const ucl: CompetitionType = {
  name: "UEFA Champions League",
};

const copaRey: CompetitionType = {
  name: "Copa del Rey",
};

const faulty = {
  name: "wrong name",
} as unknown as CompetitionType;

describe("Should return a competitions assets based on competition", () => {
  test("That the formatted name is returned", () => {
    // name
    expect(getCompetitionName(laLiga)).toEqual("La Liga");
    expect(getCompetitionName(ucl)).toEqual("Champions League");
    expect(getCompetitionName(copaRey)).toEqual("Copa del Rey");
    expect(getCompetitionName(faulty)).toEqual("");
  });

  test("That the correct color is returned based on name", () => {
    // color
    expect(getCompetitionColor(laLiga)).toEqual("bg-la-liga");
    expect(getCompetitionColor(ucl)).toEqual("bg-champions-league");
    expect(getCompetitionColor(copaRey)).toEqual("bg-copa-del-rey");
    expect(getCompetitionColor(faulty)).toEqual("bg-gray-400");
  });

  // logos
  test("That the correct logo is returned", () => {
    expect(getCompetitionLogo(laLiga)).toEqual(LaligaLogo);
    expect(getCompetitionLogo(ucl)).toEqual(ChampionsLogo);
    expect(getCompetitionLogo(copaRey)).toEqual(CopaReyLogo);
  });
});
