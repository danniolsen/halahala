import Image from "next/image";
import { TeamType } from "../types/Match.type";

type Props = {
  homeTeam: TeamType;
  awayTeam: TeamType;
  homeScore: number;
  awayScore: number;
};

const MatchCardInfo = ({ homeTeam, awayTeam, homeScore, awayScore }: Props) => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <TeamBadge team={homeTeam} />
      </div>
      <div className="items-center flex justify-center">
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
      <p className="text-xs text-slate-600 font-semibold line-clamp-1">
        {team.nickname}
      </p>
    </div>
  );
};

export default MatchCardInfo;
