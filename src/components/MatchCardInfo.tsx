import Image from "next/image";
import { StatusType, TeamType } from "../types/Match.type";
import { getStatusText, isLive } from "@/src/utils/matchStatus";
import cn from "@/src/utils/cn";

type Props = {
  homeTeam: TeamType;
  awayTeam: TeamType;
  homeScore: number;
  awayScore: number;
  status: StatusType;
};

const MatchCardInfo = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  status,
}: Props) => {
  const isMatchLive = isLive(status);
  const matchStatus = isMatchLive && getStatusText(status);

  return (
    <div className="grid grid-cols-3">
      <div>
        <TeamBadge team={homeTeam} />
      </div>
      <div
        className={cn(
          "items-center flex flex-col",
          !isMatchLive ? "justify-center" : "space-y-4"
        )}
      >
        {isMatchLive && (
          <div className="text-center text-slate-700 text-xs">
            <p className="animate-pulse text-green-600">Live</p>
            <p className="font-semibold dark:text-white">{matchStatus}</p>
          </div>
        )}
        <p className="text-2xl font-semibold">
          {homeScore} - {awayScore}
        </p>
      </div>
      <div>
        <TeamBadge team={awayTeam} />
      </div>
    </div>
  );
};

// move to own component
type PropsTeam = {
  team: TeamType;
};

const TeamBadge = ({ team }: PropsTeam) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={team?.shield?.resizes?.small}
        width={80}
        height={80}
        priority
        alt={`${team?.nickname} logo`}
      />
      <p className="text-xs text-slate-600 dark:text-white font-semibold line-clamp-1">
        {team.nickname}
      </p>
    </div>
  );
};

export default MatchCardInfo;
