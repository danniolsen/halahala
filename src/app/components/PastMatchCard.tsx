import type { MatchType } from "@/src/types/Match.type";
import MatchCardScore from "@/src/app/components/MatchCardScore";
import MatchCardTeam from "@/src/app/components/MatchCardTeam";
import GoalList from "@/src/app/components/GoalList";

type PastMatchType = Omit<MatchType, "date" | "status" | "venue">;

const PastMatchCard = ({
  home_team,
  home_score,
  away_team,
  away_score,
  competition,
  id,
}: PastMatchType) => {
  return (
    <>
      <div accessKey={id?.toString()} className="grid grid-cols-5 grid-row">
        <MatchCardTeam team={home_team} />
        <MatchCardScore
          home_score={home_score}
          away_score={away_score}
          competition={competition}
        />
        <MatchCardTeam team={away_team} />
      </div>
      <div className="grid grid-cols-2 grid-row px-10 pt-2">
        {id && home_team?.id && away_team?.id && (
          <GoalList
            matchId={id}
            homeTeamId={home_team?.id}
            awayTeamId={away_team?.id}
          />
        )}
      </div>
    </>
  );
};

export default PastMatchCard;
