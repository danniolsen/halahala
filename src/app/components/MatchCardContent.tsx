import type { DateReturnType } from "@/src/app/types/types";
import type { StatusType, VenueType } from "@/src/app/types/Match.type";
import checkDateRange from "@/src/app/utils/dateFormatter";
import { getStatusText, isLive } from "@/src/app/utils/matchStatus";

type Props = {
  date: string;
  children: React.ReactNode;
  venue: VenueType;
  status: StatusType;
};

const MatchCardContent = ({ date, children, venue, status }: Props) => {
  const dateAndTime: DateReturnType = checkDateRange(new Date(date));

  const isMatchLive = isLive(status);
  const matchStatus = isMatchLive && getStatusText(status);

  return (
    <section className="rounded-xl bg-white">
      {isMatchLive && (
        <div className="text-center text-gray-500 py-2 text-xs">
          <p className="animate-pulse text-green-600">Live</p>
          <p className="font-semibold dark:text-white">{matchStatus}</p>
        </div>
      )}

      {!isMatchLive && (
        <div className="text-center text-gray-500 text-xs py-2">
          <p className="font-semibold dark:text-white" suppressHydrationWarning>
            {dateAndTime?.date}
          </p>
          <p className="dark:text-white" suppressHydrationWarning>
            {dateAndTime?.time}
          </p>
        </div>
      )}

      <div className="pb-4 grid grid-cols-5">{children}</div>
      <div className="px-4 mt-1 pb-2 w-full">
        <p className="text-xs text-gray-500 dark:text-white text-center">
          {venue?.name}
        </p>
      </div>
    </section>
  );
};

export default MatchCardContent;
