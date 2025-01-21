"use client";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/src/app/utils/fetcher";
import { MatchType } from "../types/Match.type";
import MatchCard from "./MatchCard";

const limit = 6;

type ResponseType = {
  matches: MatchType[];
};

const LayoutGrid = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetcher({ status: "notplayed", orderType: "asc", limit: limit }),
  });

  const { data: played, isFetching: isIt } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetcher({ status: "played", orderType: "desc", limit: limit }),
  });

  const currentYear = new Date().getFullYear();
  const yearThreshold = currentYear - 1;

  const filteredMatches: MatchType[] = data?.matches?.filter(
    (match: MatchType) => {
      const itemYear = new Date(match?.date).getFullYear();
      return itemYear >= yearThreshold;
    }
  );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4 py-4">
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
            <div key={id}>
              <MatchCard
                id={id}
                away_team={away_team}
                away_score={away_score}
                home_team={home_team}
                home_score={home_score}
                competition={competition}
                date={date}
                status={status}
                venue={venue}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default LayoutGrid;
