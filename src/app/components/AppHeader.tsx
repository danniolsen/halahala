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
  { id: 1, href: "/", label: "Home", aria: "home link button" },
  {
    id: 2,
    href: "/standings",
    label: "Standings and all that",
    aria: "standings link button",
  },
];
export default function AppHeader() {
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
    <div className="sticky top-0 z-50 w-full border-b border-white">
      <div className="py-4 bg-background/5 backdrop-blur-lg supports-[backdrop-filter]:bg-background/5">
        <div className="relative flex space-x-4 px-4">
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
                className="relative z-10 px-4 py-2 rounded-lg text-slate-700"
              >
                {route.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
