import type { CompetitionType } from "@/src/app/types/Match.type";
import LaligaLogo from "../../../public/la-liga.svg";
import ChampionsLogo from "../../../public/champions-league.svg";
import CopaReyLogo from "../../../public/copa-del-rey.svg";
import NoLogo from "../../../public/noLogo.svg";

const competitionMap = {
  "LALIGA EA SPORTS": {
    logo: LaligaLogo,
    name: "La Liga",
    //color: "#ff4b44",
    color: "bg-la-liga",
  },
  "UEFA Champions League": {
    logo: ChampionsLogo,
    name: "Champions League",
    //color: "#0330f7",
    color: "bg-champions-league",
  },
  "Copa del Rey": {
    logo: CopaReyLogo,
    name: "Copa del Rey",
    // color: "#be052f",
    color: "bg-copa-del-rey",
  },
};

const getCompetitionName = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.name || "";
};

const getCompetitionColor = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.color || "";
};

const getCompetitionLogo = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.logo || NoLogo;
};

export { getCompetitionName, getCompetitionColor, getCompetitionLogo };
