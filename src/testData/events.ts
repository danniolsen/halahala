export const homeTeamId = 15;
export const awayTeamId = 31;

// raw data for events
export const rawEventData = {
  match_events: [
    {
      id: 370501,
      match_event_kind: {
        id: 1,
        name: "Penalty",
        collection: "goal",
      },
      lineup: {
        team: {
          id: 31,
          competitions: [],
        },
        person: {
          name: "Fábio Daniel Soares Silva",
          nickname: "Fabio Silva",
          firstname: "Fábio Daniel",
          lastname: "Soares Silva",
        },
      },
      assist: {
        team: {
          id: 31,
          competitions: [],
        },
        person: {
          name: "Sandro Ramírez",
          nickname: "Sandro",
          firstname: "Sandro",
          lastname: "Ramírez",
        },
      },
      time: 1,
      minute: 0,
      second: 27,
      clock: "1",
      period: "FirstHalf",
      date_source: "2025-01-19T15:17:03+00:00",
    },
    {
      id: 371182,
      match_event_kind: {
        id: 1,
        name: "Goal",
        collection: "goal",
      },
      lineup: {
        team: {
          id: 15,
          competitions: [],
        },
        person: {
          name: "Rodrygo Silva de Goes",
          nickname: "Rodrygo",
          firstname: "Rodrygo",
          lastname: "Silva de Goes",
        },
      },
      assist: {
        team: {
          id: 15,
          competitions: [],
        },
        person: {
          name: "Jude Bellingham",
          nickname: "Bellingham",
          firstname: "Jude",
          lastname: "Bellingham",
        },
      },
      time: 23,
      minute: 22,
      second: 20,
      clock: "23",
      period: "FirstHalf",
      date_source: "2025-01-22T20:24:20+00:00",
    },
    {
      id: 371186,
      match_event_kind: {
        id: 1,
        name: "Goal",
        collection: "goal",
      },
      lineup: {
        team: {
          id: 15,
          competitions: [],
        },
        person: {
          name: "Rodrygo Silva de Goes",
          nickname: "Rodrygo",
          firstname: "Rodrygo",
          lastname: "Silva de Goes",
        },
      },
      assist: {
        team: {
          id: 15,
          competitions: [],
        },
        person: {
          name: "Jude Bellingham",
          nickname: "Bellingham",
          firstname: "Jude",
          lastname: "Bellingham",
        },
      },
      time: 34,
      minute: 33,
      second: 56,
      clock: "34",
      period: "FirstHalf",
      date_source: "2025-01-22T20:35:54+00:00",
    },
    {
      id: 371191,
      match_event_kind: {
        id: 10,
        name: "Yellow",
        collection: "booking",
      },
      lineup: {
        team: {
          id: 15,
          competitions: [],
        },
        person: {
          name: "Vinícius José Paixão de Oliveira Júnior",
          nickname: "Vini Jr.",
          firstname: "Vinícius José",
          lastname: "Paixão de Oliveira Júnior",
        },
      },
      time: 42,
      minute: 41,
      second: 6,
      clock: "42",
      period: "FirstHalf",
      date_source: "2025-01-22T20:43:05+00:00",
    },
    {
      id: 371201,
      match_event_kind: {
        id: 1,
        name: "Goal",
        collection: "goal",
      },
      lineup: {
        team: {
          id: 15,
          competitions: [],
        },
        person: {
          name: "Kylian Mbappé",
          nickname: "Mbappé",
          firstname: "Kylian",
          lastname: "Mbappé",
        },
      },
      time: 48,
      minute: 47,
      second: 7,
      clock: "48",
      period: "SecondHalf",
      date_source: "2025-01-22T21:06:06+00:00",
    },
    {
      id: 368371,
      match_event_kind: {
        id: 3,
        name: "Own",
        collection: "goal",
      },
      lineup: {
        team: {
          id: 31,
          competitions: [],
        },
        person: {
          name: "Fábio Daniel Soares Silva",
          nickname: "Fabio Silva",
          firstname: "Fábio Daniel",
          lastname: "Soares Silva",
        },
      },
      time: 92,
      minute: 92,
      second: 0,
      clock: "90+2",
      period: "SecondHalf",
      date_source: "2025-01-09T20:51:00+00:00",
    },
  ],
};

// filtered events where collection is goal or penalty (both teams)
export const filteredEvents = [
  {
    id: 370501,
    match_event_kind: {
      id: 1,
      name: "Penalty",
      collection: "goal",
    },
    lineup: {
      team: {
        id: 31,
        competitions: [],
      },
      person: {
        name: "Fábio Daniel Soares Silva",
        nickname: "Fabio Silva",
        firstname: "Fábio Daniel",
        lastname: "Soares Silva",
      },
    },
    assist: {
      team: {
        id: 31,
        competitions: [],
      },
      person: {
        name: "Sandro Ramírez",
        nickname: "Sandro",
        firstname: "Sandro",
        lastname: "Ramírez",
      },
    },
    time: 1,
    minute: 0,
    second: 27,
    clock: "1",
    period: "FirstHalf",
    date_source: "2025-01-19T15:17:03+00:00",
  },
  {
    id: 371182,
    match_event_kind: {
      id: 1,
      name: "Goal",
      collection: "goal",
    },
    lineup: {
      team: {
        id: 15,
        competitions: [],
      },
      person: {
        name: "Rodrygo Silva de Goes",
        nickname: "Rodrygo",
        firstname: "Rodrygo",
        lastname: "Silva de Goes",
      },
    },
    assist: {
      team: {
        id: 15,
        competitions: [],
      },
      person: {
        name: "Jude Bellingham",
        nickname: "Bellingham",
        firstname: "Jude",
        lastname: "Bellingham",
      },
    },
    time: 23,
    minute: 22,
    second: 20,
    clock: "23",
    period: "FirstHalf",
    date_source: "2025-01-22T20:24:20+00:00",
  },
  {
    id: 371186,
    match_event_kind: {
      id: 1,
      name: "Goal",
      collection: "goal",
    },
    lineup: {
      team: {
        id: 15,
        competitions: [],
      },
      person: {
        name: "Rodrygo Silva de Goes",
        nickname: "Rodrygo",
        firstname: "Rodrygo",
        lastname: "Silva de Goes",
      },
    },
    assist: {
      team: {
        id: 15,
        competitions: [],
      },
      person: {
        name: "Jude Bellingham",
        nickname: "Bellingham",
        firstname: "Jude",
        lastname: "Bellingham",
      },
    },
    time: 34,
    minute: 33,
    second: 56,
    clock: "34",
    period: "FirstHalf",
    date_source: "2025-01-22T20:35:54+00:00",
  },
  {
    id: 371201,
    match_event_kind: {
      id: 1,
      name: "Goal",
      collection: "goal",
    },
    lineup: {
      team: {
        id: 15,
        competitions: [],
      },
      person: {
        name: "Kylian Mbappé",
        nickname: "Mbappé",
        firstname: "Kylian",
        lastname: "Mbappé",
      },
    },
    time: 48,
    minute: 47,
    second: 7,
    clock: "48",
    period: "SecondHalf",
    date_source: "2025-01-22T21:06:06+00:00",
  },
  {
    id: 368371,
    match_event_kind: {
      id: 3,
      name: "Own",
      collection: "goal",
    },
    lineup: {
      team: {
        id: 31,
        competitions: [],
      },
      person: {
        name: "Fábio Daniel Soares Silva",
        nickname: "Fabio Silva",
        firstname: "Fábio Daniel",
        lastname: "Soares Silva",
      },
    },
    time: 92,
    minute: 92,
    second: 0,
    clock: "90+2",
    period: "SecondHalf",
    date_source: "2025-01-09T20:51:00+00:00",
  },
];

export const goalsByHomeTeam = [
  { nickname: "Rodrygo", minutes: ["23", "34"] },
  { nickname: "Mbappé", minutes: ["48"] },
  { nickname: "Fabio Silva", minutes: ["90+2"] },
];

export const goalsByAwayTeam = [{ nickname: "Fabio Silva", minutes: ["1"] }];
