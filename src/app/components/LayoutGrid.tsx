"use client";

import MatchCardList from "./MatchCardList";

//const limit = 7;

const LayoutGrid = () => {
  /*const { data: previousMatches, isFetching: isIt } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetcher({ status: "played", orderType: "desc", limit: limit }),
  });*/

  return (
    <div>
      <div className="py-4 px-4">
        <p className="text-2xl font-bold">Upcoming matches</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4">
        <MatchCardList />
      </div>
    </div>
  );
};

export default LayoutGrid;
