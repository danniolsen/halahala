import Image from "next/image";
import checkDateRange from "@/src/app/utils/dateFormatter";
import type { MatchType, CompetitionType } from "@/src/app/types/Match.type";
import type { DateReturnType } from "@/src/app/types/types";
import MatchCardHeader from "@/src/app/components/MatchCardHeader";
import { getCompetitionColor } from "@/src/app/utils/competitionAssets";

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
  // show today, tomorrow, or date

  const findCompetitionLogo = ({ name }: CompetitionType) => {
    // return competitionMap[name] || NoLogo;
  };

  const dateAndTime: DateReturnType = checkDateRange(new Date(date));

  const bgColor = getCompetitionColor(competition);

  return (
    <section className={`${bgColor} rounded-t-xl rounded-b-2xl`}>
      <MatchCardHeader competition={competition} />

      <div className="bg-white p-2 rounded-xl">content</div>
    </section>
  );
};

export default MatchCard;

type Props = {
  nickname: string;
  badge: string;
  score: number | undefined;
};

const TeamBadge = ({ nickname, badge, score }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <p className="line-clamp-1 text-sm">{nickname}</p>
      <Image
        src={badge}
        width={60}
        height={60}
        alt={`${nickname}-logo`}
        priority
      />

      {score && <p>{score}</p>}
    </div>
  );
};

/**
  <Image
          src={findCompetitionLogo({ name: competition?.name || null })}
          width={60}
          height={60}
          alt="some image"
          unoptimized
        />
 */

/**
  <div className={`w-full rounded-xl bg-white p-2`}>
      <div className="p-2 rounded-lg">
        <MatchCardHeader />

        <section className="grid grid-cols-2 mt-4">
          <div>
            <TeamBadge
              nickname={home_team?.nickname}
              badge={home_team?.shield?.resizes.small}
              score={home_score}
            />
          </div>

          <div>
            <TeamBadge
              nickname={away_team?.nickname}
              badge={away_team?.shield?.resizes.small}
              score={away_score}
            />
          </div>
        </section>
        <p>{venue?.name}</p>
        <p>{status}</p>
      </div>
    </div>
 */
