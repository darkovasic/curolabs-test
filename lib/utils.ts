import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number) {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export function formatDate(dateTimeString: string) {
  const datePart = dateTimeString.split(" ")[0];
  const [year, month, day] = datePart.split("-");
  return `${year}/${month}/${day}`;
}

export function formatTime(dateTimeString: string) {
  return dateTimeString.split(" ")[1];
}
