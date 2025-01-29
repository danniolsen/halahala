"use client";
import MatchCard from "@/src/components/MatchCard";
import MatchCardShimmer from "@/src/components/MatchCardShimmer";
import { MatchType } from "@/src/types/Match.type";
import { fetchMatches } from "@/src/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

const limit = 6;
const PastMatches = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "played", orderType: "desc", limit: limit }),
    staleTime: 1000 * 60 * 5,
  });

  const matches: MatchType[] = data?.matches;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 px-4">
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

export default PastMatches;
