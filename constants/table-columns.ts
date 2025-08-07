import {
  CircleUser as ArtistIcon,
  ActivityIcon as BpmIcon,
  HeadphonesIcon,
  MusicIcon,
} from 'lucide-react';
import type { TableColumnType } from '@/types';

const TABLE_COLUMNS: TableColumnType[] = [
  { key: 'music', label: 'Music', icon: MusicIcon },
  { key: 'artist', label: 'Artist', icon: ArtistIcon },
  { key: 'category', label: 'Category', icon: null },
  { key: 'bpm', label: 'BPM', icon: BpmIcon },
  { key: 'rating', label: 'Rating', icon: null },
  { key: 'addedBy', label: 'Added By', icon: null },
  { key: 'link', label: 'Listen', icon: HeadphonesIcon },
];

export default TABLE_COLUMNS;
