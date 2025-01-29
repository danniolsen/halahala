import PageTitle from "@/src/components/PageTitle";
import { fetchMatches } from "@/src/utils/fetcher";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const limit = 7;
const queryClient = new QueryClient();

type LayoutProps = {
  children: React.ReactNode;
};

const PastMatchesLayout = async ({ children }: LayoutProps) => {
  await queryClient.prefetchQuery({
    queryKey: ["upcommingMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "notplayed", orderType: "asc", limit: limit }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PageTitle title="Upcoming matches" />
      {children}
    </HydrationBoundary>
  );
};

export default PastMatchesLayout;
