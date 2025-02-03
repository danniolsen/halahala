import StandingsHeader from "@/src/components/StandingsHeader";
import StandingsRow from "@/src/components/StandingsRow";
import type { StandingDataRecord } from "@/src/types/standings.types";
import { getStandingBorder } from "@/src/utils/getStandingBorder";

type Props = {
  standings: StandingDataRecord[];
  isFetching?: boolean;
};

const StandingsList = ({ standings, isFetching }: Props) => {
  return (
    <div className="pb-3 bg-gray-200">
      <StandingsHeader />

      {standings?.map(
        ({
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
        }) => {
          const color = getStandingBorder(position, standings?.length);
          return (
            <div key={position} className="even:bg-slate-200 odd:bg-gray-50">
              <StandingsRow
                position={position}
                team={team}
                played={played}
                won={won}
                drawn={drawn}
                lost={lost}
                points={points}
                goals_for={goals_for}
                goals_against={goals_against}
                goal_difference={goal_difference}
                color={color}
              />
            </div>
          );
        }
      )}

      {isFetching &&
        new Array(20).fill(null).map((_, index) => {
          return (
            <div
              key={index}
              className="even:bg-slate-200 odd:bg-gray-50 animate-pulse h-9"
            />
          );
        })}
    </div>
  );
};

export default StandingsList;
