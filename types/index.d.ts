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
