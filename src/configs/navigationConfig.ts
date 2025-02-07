import type { RouteType } from "@/src/types/types";

const routes: RouteType[] = [
  {
    id: 1,
    href: "/upcomingmatches",
    label: "Upcoming",
    icon: "upcomming",
    aria: "link to next matches",
  },
  {
    id: 2,
    href: "/pastmatches",
    label: "Past",
    icon: "previous",
    aria: "link to past matches",
  },
  {
    id: 3,
    href: "/standings",
    label: "La Liga",
    icon: "league",
    aria: "Link standings",
  },
  {
    id: 4,
    href: "/info",
    label: "Info",
    icon: "info",
    aria: "Link standings",
  },
];

export default routes;
