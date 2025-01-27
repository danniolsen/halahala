import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/src/app/utils/fetcher";
import type { MatchType } from "@/src/app/types/Match.type";
import MatchCardShimmer from "@/src/app/components/MatchCardShimmer";
import MatchCard from "@/src/app/components/MatchCard";

const limit = 6;
const currentYear = new Date().getFullYear();
const yearThreshold = currentYear - 1;

const MatchCardList = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "notplayed", orderType: "asc", limit: limit }),
    staleTime: 1000 * 60 * 5,
  });

  const filteredMatches: MatchType[] = data?.matches?.filter(
    (match: MatchType) => {
      const itemYear = new Date(match?.date).getFullYear();
      return itemYear >= yearThreshold;
    }
  );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 px-4">
      {filteredMatches?.map(
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

      {isFetching ||
        (isFetching &&
          new Array(limit).fill(null).map((_, index) => {
            return <MatchCardShimmer key={index} />;
          }))}
    </div>
  );
};

export default MatchCardList;
