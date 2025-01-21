import type { DateReturnType } from "@/src/app/types/types";

const returnFormat: DateReturnType = {
  date: "",
  time: "",
};

const checkDateRange = (inputDate: Date): DateReturnType => {
  const now = new Date(); // Current time

  // return dash if date is invalid
  if (!(inputDate instanceof Date) || isNaN(inputDate.getTime())) {
    return {
      date: "-",
      time: "",
    };
  }

  const inputTime = new Date(inputDate).getTime();
  const rangeStart = now.getTime(); // Start range: current time
  const range24 = rangeStart + 24 * 60 * 60 * 1000; // 24 hours from now is
  const range48 = rangeStart + 48 * 60 * 60 * 1000; // 48 hours from now

  const format = new Date(inputDate);

  // tix this when tomorrow is a new month or year
  const isTodaTest =
    format.getDay() === now.getDay() &&
    format.getMonth() + 1 === now.getMonth() + 1;

  const isTomorrowTest =
    now.getDay() + 1 === format.getDay() &&
    now.getMonth() + 1 === format.getMonth() + 1;

  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");

  const isToday = inputTime >= rangeStart && inputTime <= range24;
  const isTomorrow = inputTime > range24 && inputTime <= range48;
  const isPastOrFuture = !isToday && !isTomorrow;

  returnFormat.time = `${hours}:${minutes}`;

  if (isTodaTest) returnFormat.date = "Today";
  if (isTomorrowTest) returnFormat.date = "Tomorrow";
  if (isPastOrFuture) {
    const day = inputDate.getDate().toString().padStart(2);
    const month = inputDate.getUTCMonth() + 1;

    const fullDate = new Intl.DateTimeFormat("en-UK", {
      dateStyle: "medium",
    }).format(inputDate);
    const parts = fullDate.split(" ");

    returnFormat.date = `${parts[0]} ${parts[1]}`;
  }

  return returnFormat;
};

export default checkDateRange;
