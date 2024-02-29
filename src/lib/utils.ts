import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // twMerge is a function from tailwind-merge that merges tailwind classes for example "px-2 py-2" it will make it "py-2"
  return twMerge(clsx(inputs));
  // clsx is a function that make the order of the classes in tailwind css is matter
}
