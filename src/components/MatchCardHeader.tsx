import Image from "next/image";
import {
  getCompetitionLogo,
  getCompetitionName,
} from "@/src/utils/competitionAssets";
import type { CompetitionType } from "@/src/types/Match.type";
import checkDateRange from "@/src/utils/dateFormatter";

type Props = {
  competition: CompetitionType;
  matchDate: string;
};

const MatchCardHeader = ({ competition, matchDate }: Props) => {
  const logoSrc = getCompetitionLogo(competition);
  const competitionName = getCompetitionName(competition);

  const inputDate = new Date(matchDate);
  const { date, time } = checkDateRange(inputDate);

  return (
    <div className="flex justify-between items-center text-white">
      <div className="text-xs font-bold">
        <p>
          {date} - {time}
        </p>
      </div>

      <Image
        src={logoSrc}
        width={20}
        height={20}
        unoptimized
        priority
        alt={`Competition logo: ${competitionName}`}
      />
    </div>
  );
};

export default MatchCardHeader;
