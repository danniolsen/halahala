import Link from "next/link";

const AppHeader = () => {
  return (
    <div className="sticky top-0 z-50 py-4 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Link href="/">Home</Link>
      <Link href="/standings">Standings</Link>
    </div>
  );
};

export default AppHeader;
