import type { EventType, ScoreEventType } from "@/src/types/Event.type";

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

// Own
// Goal
// Penalty

// TODO: Write unittest for this function
const filterEventTypesByCategories = ({
  eventData,
  categories,
}: Props): EventType[] => {
  const filteredEvents = eventData?.match_events.filter((event: EventType) => {
    return categories.some(
      (category: string) => event.match_event_kind.name === category
    );
  });
  return filteredEvents;
};

const assignGoalsToTeamByTeamId = ({
  teamId,
  eventList,
}: TeamGoalsProps): ScoreEventType[] => {
  const eventListByTeam = eventList?.filter((event) => {
    const isOwnGoalType = event?.match_event_kind?.name === "Own";
    const eventTeamId = event?.lineup?.team?.id;

    // give goal to team if opponent has scored an own goal
    // don't give goal to team who scored own goal
    if (isOwnGoalType) {
      return eventTeamId !== teamId;
    }

    return eventTeamId === teamId;
  });

  const list = groupGoalsByScore(eventListByTeam);
  return list;
};

// TODO: write unittest for this function
const groupGoalsByScore = (events: EventType[]): ScoreEventType[] => {
  const grouped: Record<string, string[]> = {}; // Declare grouped as a record of nickname to array of numbers

  events?.forEach((event: EventType) => {
    const nickname = event?.lineup?.person?.nickname || "";

    if (!grouped[nickname]) {
      grouped[nickname] = [];
    }
    grouped[nickname].push(event?.clock);
  });

  const result = Object.entries(grouped).map(([nickname, minutes]) => ({
    nickname,
    minutes,
  }));

  return result;
};

export {
  filterEventTypesByCategories,
  assignGoalsToTeamByTeamId,
  groupGoalsByScore,
};
