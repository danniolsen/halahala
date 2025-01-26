import { getCompetitionColor } from "@/src/app/utils/competitionAssets";
import MatchCardContent from "@/src/app/components/MatchCardContent";
import MatchCardHeader from "@/src/app/components/MatchCardHeader";
import MatchCardScore from "@/src/app/components/MatchCardScore";
import MatchCardTeam from "@/src/app/components/MatchCardTeam";
import type { MatchType } from "@/src/app/types/Match.type";

const MatchCard = ({
  competition,
  date,
  venue,
  status,
  home_team,
  home_score,
  away_team,
  away_score,
}: MatchType) => {
  const bgColor = getCompetitionColor(competition);
  return (
    <div className={`${bgColor} rounded-2xl p-1`}>
      <MatchCardHeader competition={competition} />

      <MatchCardContent date={date} venue={venue} status={status}>
        <MatchCardTeam team={home_team} />
        <MatchCardScore home_score={home_score} away_score={away_score} />
        <MatchCardTeam team={away_team} />
      </MatchCardContent>
    </div>
  );
};

export default MatchCard;
