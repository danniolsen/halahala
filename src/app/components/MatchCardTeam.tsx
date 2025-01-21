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
          src={team?.shield?.resizes?.medium}
          width={80}
          height={80}
          alt={`${team.name}-team-name`}
          priority
        />
      </div>

      <div className="flex justify-center">
        <p className="text-xs font-bold text-slate-600 text-center line-clamp-1">
          {team?.nickname}
        </p>
      </div>
    </div>
  );
};

export default MatchCardTeam;
