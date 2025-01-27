import { getStandingBorder } from "@/src/utils/getStandingBorder";

describe("should return tailwind class for borders", () => {
  it("should return the status text", () => {
    expect(getStandingBorder(1, 20)).toBe("border-sky-500");
    expect(getStandingBorder(3, 20)).toBe("border-sky-500");
    expect(getStandingBorder(5, 20)).toBe("border-amber-500");
    expect(getStandingBorder(6, 20)).toBe("border-emerald-500");
    expect(getStandingBorder(7, 20)).toBe("border-transparent");
    expect(getStandingBorder(18, 20)).toBe("border-red-400");
    expect(getStandingBorder(20, 20)).toBe("border-red-400");
    expect(getStandingBorder(1000, 20)).toBe("border-red-400");
    expect(
      getStandingBorder(null as unknown as number, null as unknown as number)
    ).toBe("border-red-400");
  });
});
