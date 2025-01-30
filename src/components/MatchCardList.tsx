import type { MatchType } from "@/src/types/Match.type";
import MatchCardShimmer from "@/src/components/MatchCardShimmer";
import MatchCard from "@/src/components/MatchCard";

type Props = {
  matches: MatchType[];
  isFetching: boolean;
  limit: number;
};

const MatchCardList = ({ matches, isFetching, limit }: Props) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-2 px-4 pb-4">
      {matches?.map(
        ({
          id,
          away_team,
          home_team,
          competition,
          away_score,
          home_score,
          venue,
          date,
          status,
        }) => {
          return (
            <section key={id}>
              <MatchCard
                competition={competition}
                date={date}
                venue={venue}
                status={status}
                home_team={home_team}
                home_score={home_score}
                away_team={away_team}
                away_score={away_score}
              />
            </section>
          );
        }
      )}

      {isFetching &&
        new Array(limit).fill(null).map((_, index) => {
          return <MatchCardShimmer key={index} />;
        })}
    </div>
  );
};

export default MatchCardList;
