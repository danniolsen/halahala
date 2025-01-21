const checkDateRange = (inputDate: string) => {
  const now = new Date(); // Current time
  const date = new Date(inputDate);

  // if date is invalid, return dash
  if (isNaN(date.getTime())) {
    return "-";
  }

  const inputTime = new Date(inputDate).getTime();
  const rangeStart = now.getTime(); // Start range: current time
  const range24 = rangeStart + 24 * 60 * 60 * 1000; // 24 hours from now
  const range48 = rangeStart + 48 * 60 * 60 * 1000; // 48 hours from now

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (inputTime >= rangeStart && inputTime <= range24) {
    return `Today ${hours}:${minutes}`;
  } else if (inputTime > range24 && inputTime <= range48) {
    return `Tomorrow ${hours}:${minutes}`;
  } else {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${day}/${month} ${hours}:${minutes}`;
  }
};

export default checkDateRange;
