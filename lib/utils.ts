import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string, formatStr = "MMM d, yyyy") {
  return format(new Date(date), formatStr);
}

export function formatCurrency(
  amount: number,
  currency = "USD",
  locale = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function generateInvoiceNumber(prefix = "AKX"): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `${prefix}-${year}-${random}`;
}

export function getBadgeColor(status: string): string {
  const colors: Record<string, string> = {
    // Project statuses
    PENDING: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    IN_REVIEW: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    IN_PROGRESS: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    REVIEW: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    COMPLETED: "bg-green-500/10 text-green-500 border-green-500/20",
    CANCELLED: "bg-red-500/10 text-red-500 border-red-500/20",
    ON_HOLD: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    // Invoice statuses
    DRAFT: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    SENT: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    PAID: "bg-green-500/10 text-green-500 border-green-500/20",
    OVERDUE: "bg-red-500/10 text-red-500 border-red-500/20",
    // Lead statuses
    NEW: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    CONTACTED: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    QUALIFIED: "bg-teal-500/10 text-teal-500 border-teal-500/20",
    PROPOSAL: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    CONVERTED: "bg-green-500/10 text-green-500 border-green-500/20",
    LOST: "bg-red-500/10 text-red-500 border-red-500/20",
    // Blog statuses
    PUBLISHED: "bg-green-500/10 text-green-500 border-green-500/20",
    ARCHIVED: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    ACTIVE: "bg-green-500/10 text-green-500 border-green-500/20",
    INACTIVE: "bg-gray-500/10 text-gray-500 border-gray-500/20",
    TRIALING: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    PAST_DUE: "bg-red-500/10 text-red-500 border-red-500/20",
  };
  return colors[status] || "bg-gray-500/10 text-gray-500 border-gray-500/20";
}
