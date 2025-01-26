import type { CompetitionType } from "@/src/app/types/Match.type";
import Image from "next/image";
import { getCompetitionLogo } from "@/src/app/utils/competitionAssets";

type Props = {
  home_score: number;
  away_score: number;
  competition?: CompetitionType;
};

const MatchCardScore = ({ home_score, away_score, competition }: Props) => {
  const logoSrc = competition ? getCompetitionLogo(competition) : false;

  return (
    <div className="col-spart-3 gap-y-2 flex flex-col justify-center items-center mt-2">
      {logoSrc && (
        <div className="w-full flex items-center justify-center">
          <Image
            src={logoSrc}
            className="bg-slate-700 p-1.5 rounded-lg"
            width={35}
            height={35}
            alt={`${competition?.name}-logo`}
            unoptimized
          />
        </div>
      )}
      <div className="w-full flex items-center justify-center">
        <p className="font-bold text-3xl sm:text-2xl text-slate-900 dark:text-white">
          {home_score} - {away_score}
        </p>
      </div>
    </div>
  );
};

export default MatchCardScore;
