import Image from "next/image";
import { CompetitionType } from "@/src/app/types/Match.type";
import {
  getCompetitionName,
  getCompetitionLogo,
} from "@/src/app/utils/competitionAssets";
type Props = {
  competition: CompetitionType;
};

const MatchCardHeader = ({ competition }: Props) => {
  const competitionName = getCompetitionName(competition);
  const imageSrc = getCompetitionLogo(competition);

  return (
    <header className="py-2 px-4 rounded-t-xl flex justify-between items-center">
      <p className="text-white font-semibold">{competitionName}</p>

      <Image
        src={imageSrc}
        width={20}
        height={20}
        alt={`${competitionName} logo`}
      />
    </header>
  );
};

export default MatchCardHeader;
