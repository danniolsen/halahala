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
      <div className="h-svh w-svw flex bg-white dark:bg-gray-800">
        <div className="flex-1 order-1 sm:order-2 no-scrollbar">
          <main className="bg-gray-200 dark:bg-gray-900 min-h-full">
            {children}
          </main>
        </div>

        <div className="w-14 sm:w-20 order-2 sm:order-1 rounded-r-lg">
          <Navigation />
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default PagesLayout;
