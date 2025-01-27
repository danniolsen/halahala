import { StandingDataRecord } from "@/src/types/standings.types";
import cn from "@/src/utils/cn";
import { getStandingBorder } from "@/src/utils/getStandingBorder";

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
  const color = getStandingBorder(position, listCount);

  console.log(color);

  return (
    <div className={cn("", color, "border-l-2")}>
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
