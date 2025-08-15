import { LinkType } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes and resolves conflicts
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Gets base URL for the app
 */
export function getBaseUrl(slug?: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://playlist.fan");

  if (!slug) return baseUrl;

  // Ensure slug starts with forward slash
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return `${baseUrl}${normalizedSlug}`;
}

/**
 * Truncates text to max length with ellipsis
 */
export function truncateText(text: string, maxLength = 40): string {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
}

/**
 * Extracts YouTube video ID from URL
 */
export function getYoutubeId(url: string | null | undefined): string | null {
  if (!url) return null;

  // If already just an ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  // YouTube URL patterns
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/watch\?.*&v=)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
  ];

  // Try each pattern
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

/**
 * Gets platform-specific URL from LinkType
 */
export function getPlatformUrl(
  href: LinkType,
  platformId: string,
): string | null {
  const urlMap: Record<string, keyof LinkType> = {
    spotify: "spotify",
    "apple-music": "appleMusic",
    soundcloud: "soundcloud",
    youtube: "youtube",
    pandora: "pandora",
  };

  const key = urlMap[platformId];
  return key ? href[key] || null : null;
}

/**
 * Truncates title to max length with ellipsis
 */
export function truncateTitle(title: string, maxLength = 60): string {
  return title.length > maxLength
    ? title.slice(0, maxLength - 3) + "..."
    : title;
}

/**
 * Truncates description to max length with ellipsis
 */
export function truncateDescription(
  description: string,
  maxLength = 160,
): string {
  return description.length > maxLength
    ? description.slice(0, maxLength - 3) + "..."
    : description;
}
