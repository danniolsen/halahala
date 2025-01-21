import type { CompetitionType } from "@/src/app/types/Match.type";
import LaligaLogo from "../../../public/la-liga.svg";
import ChampionsLogo from "../../../public/champions-league.svg";
import CopaReyLogo from "../../../public/copa-del-rey.svg";
import NoLogo from "../../../public/noLogo.svg";

const competitionMap = {
  "LALIGA EA SPORTS": {
    logo: LaligaLogo,
    name: "La Liga",
    color: "bg-la-liga",
  },
  "UEFA Champions League": {
    logo: ChampionsLogo,
    name: "Champions League",
    color: "bg-champions-league",
  },
  "Copa del Rey": {
    logo: CopaReyLogo,
    name: "Copa del Rey",
    color: "bg-copa-del-rey",
  },
};

const getCompetitionName = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.name || "";
};

const getCompetitionColor = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.color || "bg-grey-400";
};

const getCompetitionLogo = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.logo || NoLogo;
};

export { getCompetitionName, getCompetitionColor, getCompetitionLogo };
