import Image from "next/image";
import { CompetitionType } from "@/src/app/types/Match.type";
import {
  getCompetitionName,
  getCompetitionLogo,
} from "@/src/app/utils/competitionAssets";
type Props = {
  competition: CompetitionType;
  isFetching?: boolean;
};

const MatchCardHeader = ({ competition }: Props) => {
  const competitionName = getCompetitionName(competition);
  const imageSrc = getCompetitionLogo(competition);

  return (
    <header className="py-2 px-4 rounded-t-xl flex justify-between items-center">
      <div className="bg-white dark:bg-slate-700 rounded-full flex items-center px-4 h-6">
        <p className="text-slate-700 dark:text-white text-xs font-semibold">
          {competitionName}
        </p>
      </div>

      <Image
        src={imageSrc}
        width={undefined}
        height={20}
        priority
        unoptimized
        alt={`${competitionName} logo`}
      />
    </header>
  );
};

export default MatchCardHeader;
