"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import cn from "@/src/utils/cn";
import Icon from "@/src/components/Icon";

type RouteType = {
  id: number;
  href: string;
  label: string;
  icon: string;
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
  const [activeButton, setActiveButton] = useState(null);

  const isActive = (href: string) => pathname === href;

  // change into listener for pathname
  const handleClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="h-svh flex flex-col justify-center">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className="my-1 items-center flex justify-center"
        >
          <div className="px-3 py-1 rounded-md">
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
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
