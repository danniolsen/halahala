type Props = {
  status: string;
  orderType: "desc" | "asc";
  limit?: number;
};

const seasonYear = "2024";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const subscriptionKey = process.env.NEXT_PUBLIC_SUBSCRIPTION_KEY;
const teamSlug = process.env.NEXT_PUBLIC_TEAM_SLUG;

const params = `/matches?seasonYear=seasonYear${seasonYear}&teamSlug=${teamSlug}&orderField=date&subscription-key=${subscriptionKey}`;

const fetcher = async ({ status, orderType, limit }: Props) => {
  const result = await fetch(
    `${baseUrl}${params}&status=${status}&orderType=${orderType}&limit=${limit}`,
    {
      method: "GET",
    }
  );
  return result.json();
};

export default fetcher;
