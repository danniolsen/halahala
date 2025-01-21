import type { MatchType } from "@/src/app/types/Match.type";
import type { DateReturnType } from "@/src/app/types/types";
import checkDateRange from "@/src/app/utils/dateFormatter";

type Props = Pick<MatchType, "date">;

const MatchCardContent = ({ date }: Props) => {
  const dateAndTime: DateReturnType = checkDateRange(new Date(date));

  return (
    <section className="bg-white rounded-xl px-4">
      <div className="text-center text-gray-500 text-xs border-b border-slate-100 py-2">
        <p>{dateAndTime?.date}</p>
        <p>{dateAndTime?.time}</p>
      </div>
    </section>
  );
};

export default MatchCardContent;
