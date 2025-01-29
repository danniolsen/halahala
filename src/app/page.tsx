import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import LayoutGrid from "@/src/components/LayoutGrid";
import { fetchMatches } from "@/src/utils/fetcher";

const limit = 6;
const queryClient = new QueryClient();

const Page = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "notplayed", orderType: "asc", limit: limit }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutGrid />
    </HydrationBoundary>
  );
};

export default Page;
