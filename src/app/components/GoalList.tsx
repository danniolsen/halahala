import { useQuery } from "@tanstack/react-query";
import { fetchMatchDetails } from "@/src/utils/fetcher";
import type { EventType, ScoreEventType } from "@/src/types/Event.type";
import {
  filterEventTypesByCategories,
  assignGoalsToTeamByTeamId,
} from "@/src/utils/eventsFormatter";
import GoalsInfo from "@/src/app/components/GoalsInfo";

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
    <>
      <GoalsInfo goals={goalsByHomeTeam} />

      <GoalsInfo goals={goalsByAwayTeam} isAway />
    </>
  );
};

export default GoalList;
