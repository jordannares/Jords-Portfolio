import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Combine conditional class names and resolve Tailwind utility conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
