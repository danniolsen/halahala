import type { DateReturnType } from "@/src/app/types/types";

const returnFormat: DateReturnType = {
  date: "",
  time: "",
};

const checkDateRange = (inputDate: Date): DateReturnType => {
  // return dash if date is invalid
  if (!(inputDate instanceof Date) || isNaN(inputDate.getTime())) {
    return {
      date: "-",
      time: "",
    };
  }

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  // Normalize dates to avoid time differences
  const normalizeDate = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  };

  const normalizedToday = normalizeDate(today);
  const normalizedTomorrow = normalizeDate(tomorrow);
  const normalizedInput = normalizeDate(new Date(inputDate));
  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");

  const isToday = normalizedInput.getTime() === normalizedToday.getTime();
  const isTomorrow = normalizedInput.getTime() === normalizedTomorrow.getTime();
  const isPastOrFuture = !isToday && !isTomorrow;

  // set hour and minutes
  returnFormat.time = `${hours}:${minutes}`;

  if (isToday) returnFormat.date = "Today";
  if (isTomorrow) returnFormat.date = "Tomorrow";

  if (isPastOrFuture) {
    const fullDate = new Intl.DateTimeFormat("en-UK", {
      dateStyle: "medium",
    }).format(inputDate);
    const parts = fullDate.split(" ");

    returnFormat.date = `${parts[0]} ${parts[1]}`;
  }

  return returnFormat;
};

export default checkDateRange;
