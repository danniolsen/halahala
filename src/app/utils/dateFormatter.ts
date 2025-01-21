const checkDateRange = (inputDate: Date) => {
  const now = new Date(); // Current time

  // return dash if date is invalid
  if (!(inputDate instanceof Date) || isNaN(inputDate.getTime())) {
    return "-";
  }

  const inputTime = new Date(inputDate).getTime();
  const rangeStart = now.getTime(); // Start range: current time
  const range24 = rangeStart + 24 * 60 * 60 * 1000; // 24 hours from now is
  const range48 = rangeStart + 48 * 60 * 60 * 1000; // 48 hours from now

  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");

  if (inputTime >= rangeStart && inputTime <= range24) {
    return `Today - ${hours}:${minutes}`;
  } else if (inputTime > range24 && inputTime <= range48) {
    return `Tomorrow - ${hours}:${minutes}`;
  } else {
    const day = inputDate.getDate().toString().padStart(2);
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");

    const formattedMonth = month.charAt(0) === "0" ? month.charAt(1) : month;

    return `${day}/${formattedMonth} - ${hours}:${minutes}`;
  }
};

export default checkDateRange;
