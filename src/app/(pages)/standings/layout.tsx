import { fetchStandings } from "@/src/utils/fetcher";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type LayoutProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

const StandingsLayout = async ({ children }: LayoutProps) => {
  await queryClient.prefetchQuery({
    queryKey: ["standings"],
    queryFn: fetchStandings,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default StandingsLayout;
