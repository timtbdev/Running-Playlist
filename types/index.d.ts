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

export type SocialType = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
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
  link: string;
  qrCode: string;
  rating: number;
  category: "Easy" | "Tempo" | "Sprint" | "Hard";
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
};

export type MusicType = {
  id: string;
  music: string;
  artist: string;
  addedBy: UserType;
  bpm: number;
  link: string;
  qrCode: string;
  rating: number;
  category: "Easy" | "Tempo" | "Sprint" | "Hard";
};

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
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
