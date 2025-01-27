type Props = {
  status: string;
  orderType: "desc" | "asc";
  limit?: number;
};

const seasonYear = "2024";
const subscriptionKey = process.env.NEXT_PUBLIC_MATCHES_SUBSCRIPTION_KEY;
const teamSlug = process.env.NEXT_PUBLIC_TEAM_SLUG;

const baseUrl = process.env.NEXT_PUBLIC_LA_LIGA_API;
const matches = process.env.NEXT_PUBLIC_MATCHES_API_URL;
const details = process.env.NEXT_PUBLIC_MATCH_DETAILS_API;
const detailsKey = process.env.NEXT_PUBLIC_MATCH_DETAILS_SUBSCRIPTION_KEU;

const params = `matches?seasonYear=seasonYear${seasonYear}&teamSlug=${teamSlug}&orderField=date&subscription-key=${subscriptionKey}`;

const matchesUrl = `${baseUrl}/${matches}/${params}`;

type DataProps = {
  matchId?: number;
};

const fetchMatches = async ({ status, orderType, limit }: Props) => {
  const requestUrl = `${matchesUrl}&status=${status}&orderType=${orderType}&limit=${limit}`;

  const result = await fetch(requestUrl, {
    method: "GET",
  });
  return result.json();
};

const fetchMatchDetails = async ({ matchId }: DataProps) => {
  const requestUrl = `${baseUrl}/${details}/matches/${matchId}/events?contentLanguage=en&subscription-key=${detailsKey}`;

  const result = await fetch(requestUrl, {
    method: "GET",
  });

  return result.json();
};

export { fetchMatches, fetchMatchDetails };
