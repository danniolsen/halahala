import type { DateReturnType } from "@/src/app/types/types";
import type { VenueType } from "@/src/app/types/Match.type";
import checkDateRange from "@/src/app/utils/dateFormatter";

type Props = {
  date: string;
  children: React.ReactNode;
  venue: VenueType;
};

const MatchCardContent = ({ date, children, venue }: Props) => {
  const dateAndTime: DateReturnType = checkDateRange(new Date(date));

  return (
    <section className="rounded-xl bg-white dark:bg-black m-1">
      <div className="text-center text-gray-500 text-xs py-2">
        <p className="font-semibold dark:text-white">{dateAndTime?.date}</p>
        <p className="dark:text-white">{dateAndTime?.time}</p>
      </div>

      <div className="pb-4 grid grid-cols-5">{children}</div>
      <div className="px-4 mt-1 pb-2 w-full">
        <p className="text-xs text-gray-500 dark:text-white">{venue?.name}</p>
      </div>
    </section>
  );
};

export default MatchCardContent;
