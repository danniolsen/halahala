import type { CompetitionType } from "@/src/types/Match.type";
import LaligaLogo from "../../public/la-liga.svg";
import ChampionsLogo from "../../public/champions-league.svg";
import CopaReyLogo from "../../public/copa-del-rey.svg";
import CopaEspanaLogo from "../../public/copa-de-espana.svg";
import FifaCupLogo from "../../public/fifa-copa.svg";
import Mundial from "../../public/mundial.png";

const competitionMap = {
  "LALIGA EA SPORTS": {
    logo: LaligaLogo,
    name: "La Liga",
    color: "bg-la-liga"
  },
  "UEFA Champions League": {
    logo: ChampionsLogo,
    name: "Champions League",
    color: "bg-champions-league"
  },
  "Copa del Rey": {
    logo: CopaReyLogo,
    name: "Copa del Rey",
    color: "bg-copa-del-rey"
  },
  "Copa Mundial de Clubes": {
    logo: FifaCupLogo,
    name: "Copa Mundial",
    color: "bg-fifa-club"
  },
  "Supercopa de España": {
    logo: CopaEspanaLogo,
    name: "Supercopa de España",
    color: "bg-super-copa-espana"
  },
  "Mundial de Clubes FIFA": {
    logo: Mundial,
    name: "Mundial de Clubes",
    color: "bg-mundial-clubes"
  }
};

const getCompetitionName = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.name || "";
};

const getCompetitionColor = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.color || "bg-gray-400";
};

const getCompetitionLogo = (competition: CompetitionType): string => {
  return competitionMap[competition?.name]?.logo || null;
};

export { getCompetitionName, getCompetitionColor, getCompetitionLogo };
