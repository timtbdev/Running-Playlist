import { LinkType } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names, resolving any conflicts.
 *
 * @param inputs - An array of class names to merge.
 * @returns A string of merged and optimized class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
export function getBaseUrl(slug?: string): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://playlist.fan");

  if (!slug) return baseUrl;

  // Ensure the slug starts with a forward slash
  const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`;
  return `${baseUrl}${normalizedSlug}`;
}

// Utility functions
export const truncateText = (text: string, maxLength = 40): string => {
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

/**
 * Extracts YouTube video ID from various YouTube URL formats
 * @param url - YouTube URL (can be full URL or just ID)
 * @returns YouTube video ID or null if not found
 */
export function getYoutubeId(url: string | null | undefined): string | null {
  if (!url) return null;

  // If it's already just an ID (11 characters, alphanumeric, hyphens, underscores)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) {
    return url;
  }

  // YouTube URL patterns
  const patterns = [
    // youtube.com/watch?v=VIDEO_ID
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/watch\?.*&v=)([a-zA-Z0-9_-]{11})/,
    // youtube.com/embed/VIDEO_ID
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    // youtu.be/VIDEO_ID
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    // youtube.com/v/VIDEO_ID
    /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

// Helper function to get platform URL
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
