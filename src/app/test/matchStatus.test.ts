import { getStatusText, isLive } from "@/src/app/utils/matchStatus";
import { StatusType } from "../types/Match.type";

describe("matchStatus", () => {
  describe("getStatusText", () => {
    it("should return the status text", () => {
      expect(getStatusText("PreMatch")).toBe("Pre match");
      expect(getStatusText("FirstHalf")).toBe("First half");
      expect(getStatusText("HalfTime")).toBe("Half time");
      expect(getStatusText("SecondHalf")).toBe("Second half");
      expect(getStatusText("FullTime")).toBe("Full time");
    });
  });

  describe("isLive", () => {
    it("should return true if the status is live", () => {
      expect(isLive("FirstHalf")).toBe(true);
      expect(isLive("SecondHalf")).toBe(true);
      expect(isLive("HalfTime")).toBe(true);
    });

    it("should return false if the status is not live", () => {
      expect(isLive("PreMatch")).toBe(false);
      expect(isLive("FullTime")).toBe(false);
      expect(isLive("" as StatusType)).toBe(false);
      expect(isLive(null as unknown as StatusType)).toBe(false);
      expect(isLive(undefined as unknown as StatusType)).toBe(false);
    });
  });
});
