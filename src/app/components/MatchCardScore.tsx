import { CompetitionType } from "../types/Match.type";
import Image from "next/image";
import { getCompetitionLogo } from "../utils/competitionAssets";
import cn from "@/src/app/utils/cn";

type Props = {
  home_score: number;
  away_score: number;
  status: string;
  competition?: CompetitionType;
};

const MatchCardScore = ({
  home_score,
  away_score,
  status,
  competition,
}: Props) => {
  const isMatchOver = status === "FullTime" ? false : true;

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
        <p
          className={cn(
            "font-bold text-3xl lg:text-2xl ",
            isMatchOver ? "text-slate-300" : "text-slate-900 dark:text-white"
          )}
        >
          {home_score} - {away_score}
        </p>
      </div>
    </div>
  );
};

export default MatchCardScore;

/**
 * {logoSrc && (
        <div className="bg-red-200">
          
        </div>
      )}

      
 */
