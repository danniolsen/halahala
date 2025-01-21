type Props = {
  home_score: number;
  away_score: number;
  status: string;
};

const MatchCardScore = ({ home_score, away_score, status }: Props) => {
  const isMatchOver = status === "FullTime" ? false : true;

  const fontColor = isMatchOver ? "text-slate-300" : "text-slate-900";

  return (
    <div className="col-spart-3 flex justify-center items-center mt-2">
      <p className={`font-bold text-3xl ${fontColor}`}>
        {home_score} - {away_score}
      </p>
    </div>
  );
};

export default MatchCardScore;
