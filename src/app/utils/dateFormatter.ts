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

  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");

  const isToday = inputTime >= rangeStart && inputTime <= range24;
  const isTomorrow = inputTime > range24 && inputTime <= range48;
  const isPastOrFuture = !isToday && !isTomorrow;

  /*if (inputTime >= rangeStart && inputTime <= range24) {
    return `Today - ${hours}:${minutes}`;
  } else if (inputTime > range24 && inputTime <= range48) {
    return `Tomorrow - ${hours}:${minutes}`;
  } else {
    const day = inputDate.getDate().toString().padStart(2);
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const formattedMonth = month.charAt(0) === "0" ? month.charAt(1) : month;
    */

  returnFormat.time = `${hours}:${minutes}`;

  if (isToday) returnFormat.date = "Today";
  if (isTomorrow) returnFormat.date = "Tomorrow";
  if (isPastOrFuture) {
    const day = inputDate.getDate().toString().padStart(2);
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const formattedMonth = month.charAt(0) === "0" ? month.charAt(1) : month;
    returnFormat.date = `${day}/${formattedMonth}`;
  }

  return returnFormat;
};

export default checkDateRange;
