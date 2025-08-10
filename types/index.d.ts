export type HeadType = {
  page: string;
  title: string;
  slug: string;
  description: string;
};

export type AuthorType = {
  name: string;
  twitterUrl: string;
  twitterAddress: string;
  email: string;
};

export type NavigationLink = {
  href: string;
  label: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  subNavigationLinks?: NavigationLink[];
};

export type MusicType = {
  id: string;
  music: string;
  artist: string;
  addedBy: UserType;
  bpm: number;
  link: LinkType;
  rating: number;
  category: "Easy" | "Tempo" | "Sprint" | "Hard";
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  bio: string;
};

export type CategoryType = {
  name: string;
  description: string;
  backgroundLight: string;
  backgroundDark: string;
  border: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  slug: string;
  groupHover: string;
};

export type LinkType = {
  spotify?: string | null;
  appleMusic?: string | null;
  soundcloud?: string | null;
  youtube?: string | null;
  pandora?: string | null;
};

export type TableColumnType = {
  key: keyof MusicType;
  label: string;
  icon: React.ComponentType<{ className?: string }> | null;
};

export type StreamingPlatform = {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
};
