import Image from "next/image";
import type { MatchType } from "@/src/app/types/Match.type";
import MatchCardHeader from "@/src/app/components/MatchCardHeader";
import {
  getCompetitionColor,
  getCompetitionLogo,
} from "@/src/app/utils/competitionAssets";
import MatchCardContent from "@/src/app/components/MatchCardContent";
import MatchCardTeam from "@/src/app/components/MatchCardTeam";
import MatchCardScore from "@/src/app/components/MatchCardScore";

const MatchCard = ({
  id,
  home_team,
  away_team,
  venue,
  status,
  competition,
  home_score,
  away_score,
  date,
}: MatchType) => {
  const bgColor = getCompetitionColor(competition);
  const bgImage = getCompetitionLogo(competition);

  console.log(bgColor);

  return (
    <section className={`${bgColor} rounded-t-2xl rounded-b-2xl relative`}>
      <MatchCardHeader competition={competition} />

      <MatchCardContent date={date} venue={venue}>
        <MatchCardTeam team={home_team} />
        <MatchCardScore
          home_score={home_score}
          away_score={away_score}
          status={status}
        />
        <MatchCardTeam team={away_team} />
      </MatchCardContent>
    </section>
  );
};

export default MatchCard;
