import { StandingDataRecord } from "@/src/types/standings.types";

const StandingsRow = ({
  position,
  team,
  played,
  won,
  drawn,
  lost,
  points,
  goals_for,
  goals_against,
  goal_difference,
}: StandingDataRecord) => {
  return (
    <div>
      <div className="grid grid-cols-9 md:grid-cols-12 grid-rows-1 text-slate-600 text-sm text-center py-2">
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
        <div className="max-md:hidden col-span-1">
          <p>{goals_for}</p>
        </div>

        <div className="max-md:hidden col-span-1">
          <p>{goals_against}</p>
        </div>

        <div className="max-md:hidden col-span-1">
          <p>{goal_difference}</p>
        </div>

        <div className="col-span-1">
          <p className="font-bold">{points}</p>
        </div>
      </div>
    </div>
  );
};

export default StandingsRow;
