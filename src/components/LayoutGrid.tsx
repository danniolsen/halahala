"use client";
import MatchCardList from "@/src/components/MatchCardList";

const LayoutGrid = () => {
  return (
    <div>
      <div className="py-4 px-4">
        <p className="text-2xl font-bold">Upcoming matches</p>
      </div>
      <MatchCardList />
    </div>
  );
};

export default LayoutGrid;
