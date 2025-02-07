export type DateReturnType = {
  date: string;
  time: string;
};

export type IconMapType = {
  upcomming: React.ReactNode;
  previous: React.ReactNode;
  league: React.ReactNode;
  info: React.ReactNode;
};

export type RouteType = {
  id: number;
  href: string;
  label: string;
  icon: keyof IconMapType;
  aria: string;
};
