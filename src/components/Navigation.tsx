"use client";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import cn from "@/src/utils/cn";
import Icon from "@/src/components/Icon";
import TransitionLink from "@/src/components/TransitionLink";
import routes from "@/src/configs/navigationConfig";

const Navigation = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef<number>(0);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        scrollTimeout.current = setTimeout(() => {
          if (!navRef.current) return;
          const currentScrollY = window.scrollY;

          if (Math.abs(currentScrollY - lastScrollY.current) < 5) return; // Ignore small movements

          if (currentScrollY > lastScrollY.current) {
            navRef.current.style.transform = "translateY(100%)";
          } else {
            navRef.current.style.transform = "translateY(0)";
          }

          lastScrollY.current = currentScrollY;
        }, 200);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
      };
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className="w-svw md:flex md:justify-center fixed bottom-0 left-0 md:h-28 transition-transform duration-300"
    >
      <div className="grid grid-cols-4 py-4 md:w-[500px] md:rounded-full shadow-sm h-[70px] bg-background">
        {routes?.map((route) => (
          <TransitionLink key={route.href} href={route.href}>
            <div
              className={cn(
                "flex flex-col items-center space-y-1 transition-all duration-300",
                isActive(route.href)
                  ? "translate-y-0 scale-105 text-stone-600 dark:text-stone-200"
                  : "translate-y-1 scale-100 text-stone-500"
              )}
            >
              <Icon name={route.icon} className="h-5 w-5" />
              <p className="text-xs">{route.label}</p>
            </div>
          </TransitionLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
