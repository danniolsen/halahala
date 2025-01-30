"use client";
import { useQuery } from "@tanstack/react-query";
import StandingsList from "@/src/components/StandingsList";
import { fetchStandings } from "@/src/utils/fetcher";

const StandingsPage = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["standings"],
    queryFn: fetchStandings,
  });

  return (
    <div className="px-2">
      <StandingsList standings={data?.standings} isFetching={isFetching} />
    </div>
  );
};

export default StandingsPage;
