import type { StatusType } from "@/src/types/Match.type";

const statusMap = {
  PreMatch: { name: "Pre match" },
  FirstHalf: { name: "First half" },
  HalfTime: { name: "Break" },
  SecondHalf: { name: "Second half" },
  FullTime: { name: "Full time" },
};

export const getStatusText = (status: StatusType): string => {
  return statusMap[status].name || "";
};

export const isLive = (status: StatusType): boolean => {
  return (
    status === "FirstHalf" || status === "SecondHalf" || status === "HalfTime"
  );
};
