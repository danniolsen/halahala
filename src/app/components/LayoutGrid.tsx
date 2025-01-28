"use client";
import PastMatchList from "@/src/app/components/PastMatchList";
import MatchCardList from "@/src/app/components/MatchCardList";

const LayoutGrid = () => {
  return (
    <div className="pb-4">
      <div className="pt-4">
        <PastMatchList />
      </div>
      <div className="py-4 px-4">
        <p className="text-2xl font-bold">Upcoming matches</p>
      </div>
      <div>
        <MatchCardList />
      </div>
    </div>
  );
};

export default LayoutGrid;
