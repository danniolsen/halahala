import Image from "next/image";
import type { TeamType } from "@/src/app/types/Match.type";

type Props = {
  team: TeamType;
};

const MatchCardTeam = ({ team }: Props) => {
  return (
    <div className="col-span-2">
      <div className="flex justify-center">
        <Image
          src={team?.shield?.resizes?.small}
          width={80}
          height={80}
          alt={`${team.name}-team-name`}
          priority
          unoptimized
          placeholder="blur"
          blurDataURL={team?.shield?.resizes?.xsmall}
        />
      </div>

      <div className="flex justify-center">
        <p className="text-xs font-bold text-slate-600 dark:text-white text-center line-clamp-1">
          {team?.nickname}
        </p>
      </div>
    </div>
  );
};

export default MatchCardTeam;
