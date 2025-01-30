import Navigation from "@/src/components/Navigation";
import { fetchMatches, fetchStandings } from "@/src/utils/fetcher";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type LayoutProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();
const limit = 7;

const PagesLayout = async ({ children }: LayoutProps) => {
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
      <Navigation />
      <div>{children}</div>
    </HydrationBoundary>
  );
};

export default PagesLayout;
