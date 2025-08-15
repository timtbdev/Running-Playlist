import { truncateDescription, truncateTitle } from "@/lib/utils";
import type { HeadType } from "@/types";

// Author information
export const AUTHOR = {
  name: "Tim Baz",
  twitterUrl: "https://x.com/hire_tim_com",
  twitterAddress: "@hire_tim_com",
  email: "timtb.dev@gmail.com",
};

// Favicon configurations
const BASE_URL = "/favicons";

export const FAVICONS = {
  icon: [
    { url: `${BASE_URL}/favicon.ico`, type: "image/x-icon" },
    { url: `${BASE_URL}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
    {
      url: `${BASE_URL}/android-icon-192x192.png`,
      sizes: "192x192",
      type: "image/png",
    },
  ],
  apple: [
    { url: `${BASE_URL}/apple-icon.png` },
    {
      url: `${BASE_URL}/apple-icon-180x180.png`,
      sizes: "180x180",
      type: "image/png",
    },
  ],
  other: [
    {
      rel: "apple-touch-icon-precomposed",
      url: `${BASE_URL}/apple-icon-precomposed.png`,
    },
  ],
};

// Page head configurations
export const HEAD: HeadType[] = [
  {
    page: "Home",
    title: truncateTitle("Playlist.fan"),
    description: truncateDescription(
      "Find and share running music and playlists.",
    ),
    slug: "/",
  },
];

// SEO keywords
export const KEYWORDS = [
  "running playlist",
  "workout music",
  "share playlist",
  "perfect running music",
  "running songs",
  "workout playlist",
  "music for running",
  "running beats",
  "playlist sharing",
  "fitness music",
  "running motivation",
  "workout songs",
  "running rhythm",
  "music sharing",
  "perfect workout playlist",
  "running tempo",
  "fitness playlist",
  "running motivation music",
  "workout beats",
  "playlist collaboration",
  "running music app",
  "workout rhythm",
  "music for workouts",
  "running playlist app",
  "fitness motivation",
  "perfect running beats",
  "workout playlist sharing",
  "running music sharing",
  "fitness music app",
  "running playlist perfect",
];

// Open Graph and social media images
const OPENGRAPH_IMAGE = "/images/opengraph-image.png";
const TWITTER_IMAGE = "/images/twitter-image.png";

export const OPEN_GRAPH = {
  image: OPENGRAPH_IMAGE,
  twitterImage: TWITTER_IMAGE,
};
