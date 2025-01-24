import {
  filterEventTypesByCategories,
  assignGoalsToTeamByTeamId,
} from "@/src/app/utils/eventsFormatter";
import {
  rawEventData,
  filteredEvents,
  homeTeamId,
  awayTeamId,
  goalsByHomeTeam,
  goalsByAwayTeam,
} from "@/src/app/test/mockData/events";

describe("Should return an array of events based on collection", () => {
  test("filter out goals by collection", () => {
    expect(
      filterEventTypesByCategories({
        eventData: rawEventData,
        categories: ["goal", "penalty"],
      })
    ).toEqual(filteredEvents);
    expect(
      filterEventTypesByCategories({
        eventData: rawEventData,
        categories: ["fulltime"],
      })
    ).toEqual([]);
  });

  test("assign goals to team based on teamId", () => {
    expect(
      assignGoalsToTeamByTeamId({
        eventList: filteredEvents,
        teamId: homeTeamId,
      })
    ).toEqual(goalsByHomeTeam);
    expect(
      assignGoalsToTeamByTeamId({
        eventList: filteredEvents,
        teamId: awayTeamId,
      })
    ).toEqual(goalsByAwayTeam);
    expect(
      assignGoalsToTeamByTeamId({
        eventList: filteredEvents,
        teamId: 1000,
      })
    ).toEqual([]);
  });
});
