import type { MatchType } from "@/src/types/Match.type";
import { getCompetitionColor } from "@/src/utils/competitionAssets";
import cn from "@/src/utils/cn";
import MatchCardHeader from "@/src/components//MatchCardHeader";
import MatchCardInfo from "@/src/components/MatchCardInfo";

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
    <div key={id} className={cn("bg-white rounded-xl shadow-md", bgColor)}>
      <div className="px-4 py-2">
        <MatchCardHeader matchDate={date} competition={competition} />
      </div>
      <div className="bg-white rounded-xl px-4 pt-4">
        <MatchCardInfo
          homeTeam={home_team}
          homeScore={home_score}
          awayTeam={away_team}
          awayScore={away_score}
          status={status}
        />

        <div className="text-center pt-3 pb-2">
          <p className="text-xs text-slate-400">{venue?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
