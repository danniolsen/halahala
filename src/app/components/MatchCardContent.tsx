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
    <section className="rounded-xl bg-gradient-to-r from-gray-200 to-gray-100">
      <div className="text-center text-gray-500 text-xs py-2">
        <p className="font-semibold">{dateAndTime?.date}</p>
        <p>{dateAndTime?.time}</p>
      </div>

      <div className="pb-4 grid grid-cols-5">{children}</div>
      <div className="px-4 mt-1 pb-2 w-full">
        <p className="text-xs text-slate-400">{venue?.name}</p>
      </div>
    </section>
  );
};

export default MatchCardContent;
