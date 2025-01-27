export const getStandingBorder = (
  position: number,
  totalPositions: number
): string => {
  if (position >= 1 && position <= 4) {
    return "border-sky-500"; // UCL positions
  } else if (position === 5) {
    return "border-amber-500"; // UECL positions
  } else if (position === 6) {
    return "border-emerald-500";
  } else if (position > totalPositions - 3) {
    return "border-red-400"; // Relegation positions
  }
  return "border-transparent";
};
