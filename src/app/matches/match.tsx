"use client";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import fetcher from "@/src/app/utils/fetcher";
import { MatchType } from "@/src/app/types/Match.type";

const status = ["notplayed", "played"];

const Matches = () => {
  const { data: previousmatches } = useQuery({
    queryKey: ["previousmatches"],
    queryFn: () => fetcher({ status: "played", orderType: "desc", limit: 2 }),
  });

  const { data: upcomingMatches } = useQuery({
    queryKey: ["upcomingMatches"],
    queryFn: () => fetcher({ status: "notplayed", orderType: "asc", limit: 1 }),
  });

  return (
    <div>
      <p>Results:</p>
      {previousmatches?.matches?.map(
        ({
          id,
          home_score,
          home_team,
          away_team,
          competition,
          away_score,
          venue,
        }: MatchType) => {
          return (
            <div key={id} className="flex p-4 bg-gray-50 space-x-10">
              <h2>{competition?.name}</h2>
              <p>{venue?.name}</p>
              <div>
                <p>{home_team.nickname}</p>
                <Image
                  src={home_team?.shield?.url}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
                <p>{home_score}</p>
              </div>

              <div>
                <p>{away_team.nickname}</p>
                <Image
                  src={away_team?.shield?.url}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
                {away_score}
              </div>
            </div>
          );
        }
      )}

      <p>hi there</p>
    </div>
  );
};

export default Matches;
