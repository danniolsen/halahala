import type { MatchType, StatusType } from "@/src/types/Match.type";
import type { DateReturnType } from "@/src/types/types";
import {
  getCompetitionColor,
  getCompetitionLogo,
} from "@/src/utils/competitionAssets";
import { getStatusText, isLive } from "@/src/utils/matchStatus";
import Image from "next/image";
import checkDateRange from "@/src/utils/dateFormatter";
import GoalList from "@/src/components/GoalList";
import cn from "@/src/utils/cn";

const NewMatchCard = ({
  id,
  competition,
  date,
  venue,
  status,
  home_team,
  home_score,
  away_team,
  away_score,
}: MatchType & { isFetching?: boolean }) => {
  const logoSrc = getCompetitionLogo(competition);
  const color = getCompetitionColor(competition);

  return (
    <div className="rounded-2xl bg-white dark:bg-black border-slate-700 dark:border-white border-2 relative my-2">
      <div className="absolute -top-5 w-full">
        <div className="flex items-center justify-center">
          <div className="dark:bg-black bg-white rounded-full p-2 h-11 w-11 -mt-1">
            <Image
              src={logoSrc}
              width={15}
              height={15}
              alt="League icon"
              className={cn("w-7 h-7 p-1.5 rounded-full", color)}
              unoptimized
            />
          </div>
        </div>
      </div>
      {/** home team*/}
      <div className="grid grid-cols-8 grid-rows-1 mt-5">
        <div className="col-span-3">
          <TeamBadge
            teamName={home_team?.nickname}
            shield={home_team?.shield?.resizes?.small}
            shieldBlur={home_team?.shield?.resizes?.xsmall}
          />
        </div>
        {/*score*/}
        <div className="col-span-2">
          <GoalScores
            homeScore={home_score}
            awayScore={away_score}
            status={status}
            date={date}
          />
        </div>
        {/**away team */}
        <div className="col-span-3">
          <TeamBadge
            teamName={away_team?.nickname}
            shield={away_team?.shield?.resizes?.small}
            shieldBlur={away_team?.shield?.resizes?.xsmall}
          />
        </div>
      </div>
      {id && home_team?.id && away_team?.id && (
        <GoalList
          matchId={id}
          homeTeamId={home_team.id}
          awayTeamId={away_team.id}
        />
      )}

      <div className="px-4 mt-1 pb-2 w-full">
        <p className="text-xs text-slate-700 dark:text-white text-center">
          {venue?.name}
        </p>
      </div>
    </div>
  );
};

// TODO: Move to own component
type GoalScoreProps = {
  homeScore: number;
  awayScore: number;
  status: StatusType;
  date: string;
};
// TODO: Move to own component
const GoalScores = ({ homeScore, awayScore, status, date }: GoalScoreProps) => {
  const dateAndTime: DateReturnType = checkDateRange(new Date(date));
  const isMatchLive = isLive(status);
  const matchStatus = isMatchLive && getStatusText(status);

  return (
    <div className="h-full flex flex-col items-center ">
      {!isMatchLive && (
        <div className="text-center text-slate-700 text-xs py-2">
          <p className="font-semibold dark:text-white" suppressHydrationWarning>
            {dateAndTime?.date}
          </p>
          <p className="dark:text-white" suppressHydrationWarning>
            {dateAndTime?.time}
          </p>
        </div>
      )}

      <div className="flex justify-center py-2">
        <p className="text-4xl text-slate-700 dark:text-white font-bold">
          {homeScore} - {awayScore}
        </p>
      </div>

      {isMatchLive && (
        <div className="text-center text-slate-700 py-2 text-xs">
          <p className="animate-pulse text-green-600">Live</p>
          <p className="font-semibold dark:text-white">{matchStatus}</p>
        </div>
      )}
    </div>
  );
};

// TODO: Move to own component
type TeamBadgeProps = {
  shield: string;
  teamName: string;
  shieldBlur: string;
};
// TODO: Move to own component
const TeamBadge = ({ shield, teamName, shieldBlur }: TeamBadgeProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-4 px-2">
      <Image
        src={shield}
        width={100}
        height={100}
        alt={`${teamName} shield icon`}
        priority
        unoptimized
        placeholder="blur"
        blurDataURL={shieldBlur}
      />

      <p className="text-xs font-bold text-slate-700 dark:text-white text-center line-clamp-1">
        {teamName}
      </p>
    </div>
  );
};

export default NewMatchCard;
