"use client";
import { usePathname } from "next/navigation";

import cn from "@/src/utils/cn";
import Icon from "@/src/components/Icon";
import TransitionLink from "@/src/components/TransitionLink";
import type { IconMapType } from "@/src/types/types";

type RouteType = {
  id: number;
  href: string;
  label: string;
  icon: keyof IconMapType;
  aria: string;
};

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
];

const Navigation = () => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="h-svh fixed w-14 sm:w-20 flex flex-col justify-center">
      {routes.map((route) => (
        <TransitionLink key={route.href} href={route.href}>
          <div className="px-3 my-1 w-full items-center justify-center flex">
            <Icon
              name={route.icon}
              className={cn(
                "transition-all duration-300 h-8 w-8",
                isActive(route.href)
                  ? "text-gray-500 scale-105"
                  : "text-gray-400 scale-75"
              )}
            />
          </div>
        </TransitionLink>
      ))}
    </div>
  );
};

export default Navigation;
