import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseISO = (date: string): string => {
  const formatted = new Date(date);
  return `${formatted.toLocaleString("en-us", {
    month: "long",
  })} ${formatted.getUTCDate()}, ${formatted.getFullYear()}`;
};