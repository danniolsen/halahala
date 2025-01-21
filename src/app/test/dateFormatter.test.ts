import dateFormatter from "@/src/app/utils/dateFormatter";

const currentDate = new Date();
currentDate.setHours(21, 0, 0);

const tomorrow = new Date();
tomorrow.setHours(21, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

const nextWeek = new Date();
nextWeek.setHours(16, 30, 0);
nextWeek.setDate(nextWeek.getDate() + 7);
const nextWeekDay = nextWeek.getDate().toString().padStart(2, "0");
const nextWeekMonth = (nextWeek.getMonth() + 1).toString().padStart(2, "0");
const nextWeekMonthFormatted =
  nextWeekMonth.charAt(0) === "0" ? nextWeekMonth.charAt(1) : nextWeekMonth;

const yesterDay = new Date();
yesterDay.setHours(14, 45, 0);
yesterDay.setDate(yesterDay.getDate() - 1);

const yesterDayDay = yesterDay.getDate().toString().padStart(2, "0");
const yesterDayMonth = (yesterDay.getMonth() + 1).toString().padStart(2, "0");
const yesterDayMonthFormatted =
  yesterDayMonth.charAt(0) === "0" ? yesterDayMonth.charAt(1) : yesterDayMonth;

describe("Should test that date formatter displays correctly", () => {
  test("test that today and tomorrow plus hour:min is displayed", () => {
    expect(dateFormatter(currentDate)).toBe("Today - 21:00");
    expect(dateFormatter(tomorrow)).toBe("Tomorrow - 21:00");
    expect(dateFormatter(nextWeek)).toBe(
      `${nextWeekDay}/${nextWeekMonthFormatted} - 16:30`
    );
    expect(dateFormatter(yesterDay)).toBe(
      `${yesterDayDay}/${yesterDayMonthFormatted} - 14:45`
    );
  });

  test("Should return a dash is input date is invalid", () => {
    expect(dateFormatter(null as any)).toBe("-");
    expect(dateFormatter(undefined as any)).toBe("-");
    expect(dateFormatter("2025" as any)).toBe("-");
  });
});
