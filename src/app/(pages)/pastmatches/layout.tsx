import { fetchMatches } from "@/src/utils/fetcher";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const limit = 6;
const queryClient = new QueryClient();

type LayoutProps = {
  children: React.ReactNode;
};

const PastMatchesLayout = async ({ children }: LayoutProps) => {
  await queryClient.prefetchQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "played", orderType: "desc", limit: limit }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default PastMatchesLayout;
