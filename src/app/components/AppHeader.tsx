import Link from "next/link";

const AppHeader = () => {
  return (
    <div className="flex space-x-2 p-4">
      <Link href="/">Home</Link>
      <Link href="/standings">Standings</Link>
    </div>
  );
};

export default AppHeader;
