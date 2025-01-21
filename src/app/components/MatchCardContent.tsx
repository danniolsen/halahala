import type { DateReturnType } from "@/src/app/types/types";
import checkDateRange from "@/src/app/utils/dateFormatter";
import MatchCardTeam from "@/src/app/components/MatchCardTeam";

type Props = {
  date: string;
  children: React.ReactNode;
};

const MatchCardContent = ({ date, children }: Props) => {
  const dateAndTime: DateReturnType = checkDateRange(new Date(date));

  return (
    <section className="bg-white rounded-xl">
      <div className="text-center text-gray-500 text-xs py-2">
        <p className="font-semibold">{dateAndTime?.date}</p>
        <p>{dateAndTime?.time}</p>
      </div>

      <div className="pb-4 px-4 grid grid-cols-5 space-x-1">{children}</div>
    </section>
  );
};

export default MatchCardContent;
