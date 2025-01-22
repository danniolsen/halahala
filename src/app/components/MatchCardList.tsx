import { useQuery } from "@tanstack/react-query";
import fetcher from "@/src/app/utils/fetcher";
import type { MatchType } from "@/src/app/types/Match.type";
import MatchCardHeader from "@/src/app/components/MatchCardHeader";
import { getCompetitionColor } from "@/src/app/utils/competitionAssets";
import MatchCardContent from "@/src/app/components/MatchCardContent";
import MatchCardTeam from "@/src/app/components/MatchCardTeam";
import MatchCardScore from "@/src/app/components/MatchCardScore";
import MatchCardShimmer from "@/src/app/components/MatchCardShimmer";

const limit = 6;
const currentYear = new Date().getFullYear();
const yearThreshold = currentYear - 1;

const MatchCardList = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetcher({ status: "notplayed", orderType: "asc", limit: limit }),
  });

  const filteredMatches: MatchType[] = data?.matches?.filter(
    (match: MatchType) => {
      const itemYear = new Date(match?.date).getFullYear();
      return itemYear >= yearThreshold;
    }
  );

  return (
    <>
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
          const bgColor = getCompetitionColor(competition);
          return (
            <section key={id} className={`${bgColor} rounded-2xl`}>
              <MatchCardHeader competition={competition} />

              <MatchCardContent date={date} venue={venue}>
                <MatchCardTeam team={home_team} />
                <MatchCardScore
                  home_score={home_score}
                  away_score={away_score}
                  status={status}
                />
                <MatchCardTeam team={away_team} />
              </MatchCardContent>
            </section>
          );
        }
      )}

      {isFetching &&
        new Array(6).fill(null).map((_, index) => {
          return <MatchCardShimmer key={index} />;
        })}
    </>
  );
};

export default MatchCardList;
