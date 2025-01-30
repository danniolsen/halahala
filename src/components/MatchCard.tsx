import type { CompetitionType, MatchType } from "@/src/types/Match.type";
import {
  getCompetitionColor,
  getCompetitionLogo,
} from "@/src/utils/competitionAssets";
import cn from "@/src/utils/cn";
import MatchCardHeader from "@/src/components//MatchCardHeader";

const MatchCard = ({
  id,
  competition,
  date,
  away_score,
  away_team,
  home_score,
  home_team,
  status,
  venue,
}: MatchType) => {
  const bgColor = getCompetitionColor(competition);

  return (
    <div className={cn("bg-white rounded-xl shadow-md", bgColor)}>
      <div className="p-4">
        <MatchCardHeader matchDate={date} competition={competition} />
      </div>
    </div>
  );
};

export default MatchCard;
