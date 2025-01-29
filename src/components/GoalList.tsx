import { useQuery } from "@tanstack/react-query";
import { fetchMatchDetails } from "@/src/utils/fetcher";
import type { EventType, ScoreEventType } from "@/src/types/Event.type";
import {
  filterEventTypesByCategories,
  assignGoalsToTeamByTeamId,
} from "@/src/utils/eventsFormatter";
import GoalsInfo from "@/src/components/GoalsInfo";

type Props = {
  matchId: number;
  homeTeamId: number;
  awayTeamId: number;
};

const GoalList = ({ matchId, homeTeamId, awayTeamId }: Props) => {
  const isIdValid = typeof matchId === "number";

  console.log("isIdValid ", isIdValid);

  const { data } = useQuery({
    queryKey: ["matchDetails", matchId],
    queryFn: () => fetchMatchDetails({ matchId: matchId }),
    enabled: isIdValid,
    networkMode: "offlineFirst",
  });

  console.log(data);

  // filter out events that are goals and penalties as goals.
  const filteredEventsByGoals: EventType[] = filterEventTypesByCategories({
    eventData: data,
    categories: ["Goal", "Penalty", "Own"],
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
    <div className="grid grid-cols-2 px-6">
      <GoalsInfo goals={goalsByHomeTeam} />

      <GoalsInfo goals={goalsByAwayTeam} isAway />
    </div>
  );
};

export default GoalList;
