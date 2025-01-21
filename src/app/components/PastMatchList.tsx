"use client";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/src/app/utils/fetcher";
import { MatchType } from "../types/Match.type";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

const limit = 7;

const PastMatchList = () => {
  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 2.1,
      },
      slideChanged() {
        console.log("slide changed");
      },
    },
    [
      // add plugins here
    ]
  );

  const { data, isFetching } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetcher({ status: "played", orderType: "desc", limit: limit }),
  });

  const matches: MatchType[] = data?.matches;

  return (
    <div ref={sliderRef} className="keen-slider">
      {matches?.map(({ id, home_score, away_score }) => {
        return (
          <div key={id} className="keen-slider__slide bg-red-200">
            <p>
              {home_score} - {away_score}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default PastMatchList;
