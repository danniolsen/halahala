"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/src/utils/fetcher";
import type { MatchType } from "@/src/types/Match.type";
import MatchCardList from "@/src/components/MatchCardList";

const limit = 10;
const currentYear = new Date().getFullYear();
const yearThreshold = currentYear - 1;

const today = new Date();

const UpcommingMatches = () => {
  const { data, isFetching, isLoading } = useQuery({
    queryKey: [`upcommingMatches-${today} ${limit}`],
    queryFn: () =>
      fetchMatches({ status: "notplayed", orderType: "asc", limit: limit }),
    // staleTime: 1000 * 60 * 5,
  });

  const filteredMatches: MatchType[] = data?.matches?.filter(
    (match: MatchType) => {
      const itemYear = new Date(match?.date).getFullYear();
      return itemYear >= yearThreshold;
    }
  );

  const matches: MatchType[] = filteredMatches;

  return (
    <div>
      <MatchCardList matches={matches} isFetching={isFetching} limit={limit} isLoading={isLoading}/>
    </div>
  );
};

export default UpcommingMatches;
