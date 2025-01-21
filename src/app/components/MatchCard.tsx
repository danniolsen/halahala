import Image from "next/image";
import LaligaLogo from "../../../public/la-liga.svg";
import ChampionsLogo from "../../../public/champions-league.svg";
import CopaReyLogo from "../../../public/copa-del-rey.svg";
import NoLogo from "../../../public/noLogo.svg";
import checkDateRange from "@/src/app/utils/dateFormatter";
import type { MatchType, CompetitionType } from "@/src/app/types/Match.type";
import type { DateReturnType } from "@/src/app/types/types";

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
    const competitionMap = {
      "LALIGA EA SPORTS": LaligaLogo,
      "UEFA Champions League": ChampionsLogo,
      "Copa del Rey": CopaReyLogo,
    };
    return competitionMap[name] || NoLogo;
  };

  const dateAndTime: DateReturnType = checkDateRange(new Date(date));

  return (
    <div className={`w-full rounded-xl bg-white p-2`}>
      <div className="p-2 rounded-lg">
        <header className="text-slate-500 justify-center">
          <div className="flex justify-center">
            <p className="text-lg">{competition?.name}</p>
          </div>
          <div className="flex justify-center mt-4 mb-2">
            <p className="text-xs">{dateAndTime?.date}</p>
            <p className="text-xs">{dateAndTime?.time}</p>
          </div>
        </header>

        <section className="grid grid-cols-2 mt-4">
          <div>
            <TeamBadge
              nickname={home_team?.nickname}
              badge={home_team?.shield?.url}
              score={home_score}
            />
          </div>

          <div>
            <TeamBadge
              nickname={away_team?.nickname}
              badge={away_team?.shield?.url}
              score={away_score}
            />
          </div>
        </section>
      </div>
    </div>
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
      <Image src={badge} width={100} height={100} alt={`${nickname}-logo`} />

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
