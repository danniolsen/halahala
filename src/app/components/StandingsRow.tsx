import { StandingDataRecord } from "@/src/types/standings.types";

// TODO: make functin for UCL, UECL and relegation
// if position is 1 - 4 = ucl
// if position is 5 - 6 = uecl
// if position is one of last 3 in list

const StandingsRow = ({
  position,
  team,
  played,
  won,
  drawn,
  lost,
  points,
}: StandingDataRecord) => {
  return (
    <div className="grid grid-cols-9 grid-rows-1 text-slate-500 text-sm text-center">
      <div className="text-center">
        <p className="font-semibold">{position}</p>
      </div>
      <div className="col-span-3">
        <p className="text-left">{team?.nickname}</p>
      </div>
      <div className="col-start-5">
        <p>{played}</p>
      </div>
      <div className="col-start-6">
        <p>{won}</p>
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
  );
};

export default StandingsRow;
