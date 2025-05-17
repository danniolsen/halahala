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
const limit = 10;
const today = new Date();
const PagesLayout = async ({ children }: LayoutProps) => {
  await queryClient.prefetchQuery({
    queryKey: [`upcommingMatches-${today} ${limit}`],
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
      <div>
        <div className="min-h-svh flex no-scrollbar">
          <main className="flex-1 dark:bg-gray-900 min-h-full">{children}</main>
        </div>
        <Navigation />
      </div>
    </HydrationBoundary>
  );
};

export default PagesLayout;
