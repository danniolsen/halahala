"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/src/app/utils/fetcher";
import type { MatchType } from "@/src/app/types/Match.type";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import cn from "@/src/app/utils/cn";
import PastMatchCard from "@/src/app/components/PastMatchCard";

const limit = 6;
const PastMatchList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      updated() {
        setLoaded(true);
      },
      rubberband: true,
      initial: 0,
      slides: {
        perView: 1,
        origin: "center",
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 1.2, spacing: 10 },
        },
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 10 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
    },
    [] // plugins
  );

  const { data, isFetching } = useQuery({
    queryKey: ["playedMatches", limit],
    queryFn: () =>
      fetchMatches({ status: "played", orderType: "desc", limit: limit }),
  });

  const matches: MatchType[] = data?.matches;

  return (
    <>
      {!isFetching && (
        <>
          <div className="relative">
            <div ref={sliderRef} className="keen-slider">
              {matches?.map(
                ({
                  id,
                  home_team,
                  home_score,
                  away_team,
                  away_score,
                  competition,
                }) => {
                  return (
                    <div
                      key={id}
                      className="keen-slider__slide max-md:first:pl-4 max-lg:last:pr-4"
                    >
                      <PastMatchCard
                        key={id}
                        id={id}
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
          </div>
          <div className="sm:hidden">
            {loaded && (
              <div className="flex py-2 justify-center space-x-2">
                {[...Array(matches?.length).keys()].map((index) => {
                  return (
                    <button
                      key={index}
                      aria-label={`Next slide button - slide ${index}`}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(index);
                      }}
                      className={cn(
                        "w-2 h-2 rounded-full",
                        currentSlide === index ? "bg-gray-400" : "bg-gray-200"
                      )}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default PastMatchList;
