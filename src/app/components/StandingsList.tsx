import StandingsHeader from "@/src/app/components/StandingsHeader";
import StandingsRow from "@/src/app/components/StandingsRow";
import type { StandingDataRecord } from "@/src/types/standings.types";

type Props = {
  standings: StandingDataRecord[];
};

const StandingsList = ({ standings }: Props) => {
  return (
    <div className="relative">
      <div className="fixed w-full bg-white">
        <StandingsHeader />
      </div>

      <div className="pt-9 bg-red-200">
        {standings?.map(
          ({ position, team, played, won, drawn, lost, points }) => {
            return (
              <div key={position} className="even:bg-slate-100 odd:bg-white">
                <StandingsRow
                  position={position}
                  team={team}
                  played={played}
                  won={won}
                  drawn={drawn}
                  lost={lost}
                  points={points}
                  listCount={standings?.length}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default StandingsList;
