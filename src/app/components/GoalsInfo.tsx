import type { ScoreEventType } from "@/src/app/types/Event.type";
import cn from "@/src/app/utils/cn";

type Props = {
  goals: ScoreEventType[];
  isAway?: boolean;
};

const GoalsInfo = ({ goals, isAway }: Props) => {
  return (
    <div className="col-span-1">
      {goals?.map(({ nickname, minutes }, index) => {
        return (
          <div
            key={index}
            className={cn("flex space-x-1 text-xs", isAway && "justify-end")}
          >
            <p className="text-gray-600 dark:text-white">{nickname}</p>

            {minutes?.map((min: string) => (
              <p className="text-gray-600 dark:text-white" key={min}>
                {min}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default GoalsInfo;
