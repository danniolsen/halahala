"use client";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/src/app/utils/fetcher";
import { MatchType } from "../types/Match.type";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const limit = 6;

const PastMatchList = () => {
  const [sliderRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        spacing: 10,
        perView: 2.1,
      },
    },
    [] // plugins
  );

  const { data, isFetching } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetcher({ status: "played", orderType: "desc", limit: limit }),
  });

  const matches: MatchType[] = data?.matches;

  return (
    <div ref={sliderRef} className="keen-slider">
      {matches?.map(
        ({ id, home_team, home_score, away_team, away_score, competition }) => {
          return (
            <div key={id} className="keen-slider__slide ">
              <PastMatchCard
                key={id}
                home_team={home_team}
                home_score={home_score}
                away_team={away_team}
                away_score={away_score}
                competition={competition}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default PastMatchList;

type PastMatchType = Omit<MatchType, "date" | "status" | "venue">;

const PastMatchCard = ({
  home_team,
  home_score,
  away_team,
  away_score,
  competition,
}: PastMatchType) => {
  return <div className="bg-white p-4 rounded-lg"></div>;
};
