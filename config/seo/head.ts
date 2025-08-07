import { truncateDescription, truncateTitle } from '@/lib/seo';
import type { HeadType } from '@/types';

const HEAD: HeadType[] = [
  {
    page: 'Home',
    title: truncateTitle('Playlist.fan'),
    description: truncateDescription(
      'Find and share running music and playlists.'
    ),
    slug: '/',
  },
];

export default HEAD;
