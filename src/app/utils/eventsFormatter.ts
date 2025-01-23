import { EventType, ScoreEventType } from "@/src/app/types/Event.type";

type Props = {
  eventData: {
    match_events: EventType[];
  };
  categories: string[];
};

type TeamGoalsProps = {
  teamId: number;
  eventList: EventType[];
};

// TODO: Write unittest for this function
const filterEventTypesByCategories = ({
  eventData,
  categories,
}: Props): EventType[] => {
  const filteredEvents = eventData?.match_events.filter((event: EventType) => {
    return categories.some(
      (category: string) => event.match_event_kind.collection === category
    );
  });

  return filteredEvents;
};

// TODO: write unittest for this function
const assignGoalsToTeamByTeamId = ({
  teamId,
  eventList,
}: TeamGoalsProps): ScoreEventType[] => {
  const eventListByTeam = eventList?.filter(
    (event) => event?.lineup?.team?.id === teamId
  );
  const list = groupGoalsByScore(eventListByTeam);
  return list;
};

// TODO: write unittest for this function
const groupGoalsByScore = (events: EventType[]): ScoreEventType[] => {
  const grouped: Record<string, number[]> = {}; // Declare grouped as a record of nickname to array of numbers

  events?.forEach((event: EventType) => {
    const nickname = event?.lineup?.person?.nickname || "Unknown"; // Provide a fallback for undefined nicknames

    if (!grouped[nickname]) {
      grouped[nickname] = [];
    }
    grouped[nickname].push(event?.time);
  });

  const result = Object.entries(grouped).map(([nickname, minutes]) => ({
    nickname: nickname === "Unknown" ? undefined : nickname, // Convert "Unknown" back to undefined if needed
    minutes,
  }));

  return result;
};

export { filterEventTypesByCategories, assignGoalsToTeamByTeamId };
