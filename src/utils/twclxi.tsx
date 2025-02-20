import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const Twclsx = (...input: ClassValue[]) => {
  return twMerge(clsx(input));
};
