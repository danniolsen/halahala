import Image from "next/image";
import { MatchType } from "@/src/app/types/Match.type";
import { getCompetitionLogo } from "@/src/app/utils/competitionAssets";
import MatchCardScore from "@/src/app/components/MatchCardScore";
import MatchCardTeam from "@/src/app/components/MatchCardTeam";

type PastMatchType = Omit<MatchType, "date" | "status" | "venue">;

const PastMatchCard = ({
  home_team,
  home_score,
  away_team,
  away_score,
  competition,
}: PastMatchType) => {
  const logoSrc = getCompetitionLogo(competition);

  return (
    <div className="grid grid-cols-5 grid-row">
      <MatchCardTeam team={home_team} />
      <MatchCardScore
        home_score={home_score}
        away_score={away_score}
        status="FullTime"
        competition={competition}
      />
      <MatchCardTeam team={away_team} />
    </div>
  );
};

export default PastMatchCard;
