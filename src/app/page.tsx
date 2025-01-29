import Link from "next/link";

const MainPage = () => {
  return (
    <div className="h-svh w-svw ">
      <div className="bg-linear-to-r from-cyan-500 to-blue-500">
        <Link href="/upcomingmatches">Go to site</Link>
      </div>
    </div>
  );
};

export default MainPage;
