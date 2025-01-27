import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import LayoutGrid from "@/src/app/components/LayoutGrid";
import { fetchMatches, fetchStandings } from "@/src/utils/fetcher";

const limit = 6;
const queryClient = new QueryClient();

const Page = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "notplayed", orderType: "asc", limit: limit }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "played", orderType: "desc", limit: limit }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["standings"],
    queryFn: fetchStandings,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutGrid />
    </HydrationBoundary>
  );
};

export default Page;
