import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import LayoutGrid from "@/src/app/components/LayoutGrid";
import fetcher from "@/src/app/utils/fetcher";

const Page = async () => {
  const queryClient = new QueryClient();

  const limit = 6;

  await queryClient.prefetchQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetcher({ status: "notplayed", orderType: "asc", limit: limit }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetcher({ status: "played", orderType: "desc", limit: limit }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LayoutGrid />
    </HydrationBoundary>
  );
};

export default Page;
