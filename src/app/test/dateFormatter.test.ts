import dateFormatter from "@/src/app/utils/dateFormatter";

const currentDate = new Date();
currentDate.setHours(21, 0, 0);

const tomorrow = new Date();
tomorrow.setHours(21, 0, 0);
tomorrow.setDate(tomorrow.getDate() + 1);

describe("Should test that date formatter displays correctly", () => {
  test("test that today and tomorrow plus hour:min is displayed", () => {
    expect(dateFormatter(currentDate)).toEqual({
      date: "Today",
      time: "21:00",
    });
    expect(dateFormatter(tomorrow)).toEqual({
      date: "Tomorrow",
      time: "21:00",
    });
  });

  test("Should return a dash is input date is invalid", () => {
    expect(dateFormatter(null as any)).toEqual({ date: "-", time: "" });
    expect(dateFormatter(undefined as any)).toEqual({ date: "-", time: "" });
    expect(dateFormatter("2025" as any)).toEqual({ date: "-", time: "" });
  });
});
