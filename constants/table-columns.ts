import type { TableColumnType } from "@/types";
import {
  UserIcon as AddedByIcon,
  CircleUser as ArtistIcon,
  ListFilterIcon as CategoryIcon,
  HeadphonesIcon,
  LinkIcon,
  MusicIcon,
  StarIcon as RatingIcon,
} from "lucide-react";

const TABLE_COLUMNS: TableColumnType[] = [
  { key: "music", label: "Music", icon: MusicIcon },
  { key: "artist", label: "Artist", icon: ArtistIcon },
  { key: "category", label: "Category", icon: CategoryIcon },
  { key: "rating", label: "Rating", icon: RatingIcon },
  { key: "addedBy", label: "Added By", icon: AddedByIcon },
  { key: "link", label: "Link", icon: LinkIcon },
];

export default TABLE_COLUMNS;
