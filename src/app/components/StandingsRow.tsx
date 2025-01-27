import { StandingDataRecord } from "@/src/types/standings.types";
import cn from "@/src/utils/cn";

// TODO: make functin for UCL, UECL and relegation
// if position is 1 - 4 = ucl
// if position is 5 - 6 = uecl
// if position is one of last 3 in list

const getPositionClass = (position: number, totalPositions: number): string => {
  if (position >= 1 && position <= 4) {
    return "border-sky-500"; // UCL positions
  } else if (position === 5) {
    return "border-amber-500"; // UECL positions
  } else if (position === 6) {
    return "border-emerald-500";
  } else if (position > totalPositions - 3) {
    return "border-red-400"; // Relegation positions
  }
  return "border-transparent";
};

const StandingsRow = ({
  position,
  team,
  played,
  won,
  drawn,
  lost,
  points,
  listCount,
}: StandingDataRecord & { listCount: number }) => {
  const color = getPositionClass(position, listCount);

  return (
    <div className={cn("border-l-2", color)}>
      <div className="grid grid-cols-9 grid-rows-1 text-slate-500 text-sm text-center py-2">
        <div className="text-center">
          <p className="font-semibold">{position}</p>
        </div>
        <div className="col-span-3">
          <p className="text-left line-clamp-1">{team?.nickname}</p>
        </div>
        <div className="col-start-5">
          <p>{played}</p>
        </div>
        <div className="col-start-6">
          <p className="font-light">{won}</p>
        </div>
        <div className="col-start-7">
          <p>{drawn}</p>
        </div>
        <div className="col-start-8">
          <p>{lost}</p>
        </div>
        <div>
          <p className="font-bold">{points}</p>
        </div>
      </div>
    </div>
  );
};

export default StandingsRow;
