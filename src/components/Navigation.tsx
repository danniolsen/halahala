"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

type RouteType = {
  id: number;
  href: string;
  label: string;
  aria: string;
};

const routes: RouteType[] = [
  {
    id: 1,
    href: "/upcomingmatches",
    label: "Upcoming",
    aria: "link to next matches",
  },
  { id: 2, href: "/pastmatches", label: "Past", aria: "link to past matches" },
  { id: 3, href: "/standings", label: "La Liga", aria: "Link standings" },
];

const Navigation = () => {
  const pathname = usePathname();
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });
  const linksRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const index = routes.findIndex((route) => route.href === pathname);

    if (linksRef.current[index]) {
      const activeLink = linksRef.current[index];
      setHighlightStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <nav className="sticky top-0 left-0 z-50 w-full">
      <div className="py-3 md:py-5 bg-background/5 backdrop-blur-lg supports-[backdrop-filter]:bg-background/5 border-t border-white">
        <div className="relative flex space-x-4 px-4 items-center justify-center">
          {/* Animated background */}
          <div
            className="absolute top-0 left-0 h-full bg-gray-300 rounded-lg transition-all duration-500"
            style={{
              left: highlightStyle.left,
              width: highlightStyle.width,
            }}
          />

          {/* Links */}
          {routes.map((route, index) => (
            <Link key={route.href} href={route.href}>
              <p
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                className="relative z-10 px-4 py-1 rounded-lg text-slate-700"
              >
                {route.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
