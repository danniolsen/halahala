import { useQuery } from "@tanstack/react-query";
import { fetchMatchDetails } from "@/src/app/utils/fetcher";
import type { EventType, ScoreEventType } from "@/src/app/types/Event.type";
import {
  filterEventTypesByCategories,
  assignGoalsToTeamByTeamId,
} from "@/src/app/utils/eventsFormatter";
type Props = {
  matchId: number;
  homeTeamId: number;
  awayTeamId: number;
};

const GoalList = ({ matchId, homeTeamId, awayTeamId }: Props) => {
  const isIdValid = typeof matchId === "number";

  const { data } = useQuery({
    queryKey: ["matchDetails", matchId],
    queryFn: () => fetchMatchDetails({ matchId: matchId }),
    enabled: isIdValid,
    networkMode: "offlineFirst",
  });

  // filter out events that are goals and penalties as goals.
  const filteredEventsByGoals: EventType[] = filterEventTypesByCategories({
    eventData: data,
    categories: ["goal", "penalty"],
  });

  const goalsByHomeTeam: ScoreEventType[] = assignGoalsToTeamByTeamId({
    eventList: filteredEventsByGoals,
    teamId: homeTeamId,
  });

  const goalsByAwayTeam = assignGoalsToTeamByTeamId({
    eventList: filteredEventsByGoals,
    teamId: awayTeamId,
  });

  return (
    <>
      <div className="col-span-1">
        {goalsByHomeTeam?.map(({ nickname, minutes }, index) => {
          return (
            <div key={index} className="flex space-x-1 text-xs">
              <p className="text-gray-600 dark:text-white">{nickname}</p>

              {minutes?.map((min: number) => (
                <p key={min}>{min}&apos;</p>
              ))}
            </div>
          );
        })}
      </div>

      <div className="col-span-1">
        {goalsByAwayTeam?.map(({ nickname, minutes }, index) => {
          return (
            <div
              key={index}
              className="flex space-x-1 text-xs justify-end text-gray-600 dark:text-white"
            >
              <p className="text-right">{nickname}</p>

              {minutes?.map((min: number) => (
                <p key={min}>{min}&apos;</p>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GoalList;
