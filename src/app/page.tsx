import Link from "next/link";

const MainPage = () => {
  return (
    <div className="h-svh w-svw flex items-center justify-center">
      <Link
        href="/upcomingmatches"
        className="bg-slate-500 px-6 py-2 rounded-lg"
      >
        <p className="text-white font-semibold text-sm">Go to site</p>
      </Link>
    </div>
  );
};

export default MainPage;
