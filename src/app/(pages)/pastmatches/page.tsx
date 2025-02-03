"use client";
import MatchCardList from "@/src/components/MatchCardList";
import { MatchType } from "@/src/types/Match.type";
import { fetchMatches } from "@/src/utils/fetcher";
import { useQuery } from "@tanstack/react-query";

const limit = 10;
const PastMatches = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "played", orderType: "desc", limit: limit }),
    staleTime: 1000 * 60 * 5,
  });

  const matches: MatchType[] = data?.matches;

  return (
    <MatchCardList matches={matches} isFetching={isFetching} limit={limit} />
  );
};

export default PastMatches;
