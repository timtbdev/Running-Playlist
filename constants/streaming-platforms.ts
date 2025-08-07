import { FaSpotify as SpotifyIcon } from "react-icons/fa";
import {
  SiApplemusic as AppleMusicIcon,
  SiPandora as PandoraIcon,
  SiSoundcloud as SoundcloudIcon,
  SiYoutube as YoutubeIcon,
} from "react-icons/si";

const STREAMING_PLATFORMS = [
  {
    id: "spotify",
    name: "Spotify",
    icon: SpotifyIcon,
    color: "text-green-500",
  },
  {
    id: "apple-music",
    name: "Apple",
    icon: AppleMusicIcon,
    color: "text-red-500",
  },
  {
    id: "soundcloud",
    name: "SoundCloud",
    icon: SoundcloudIcon,
    color: "text-orange-500",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: YoutubeIcon,
    color: "text-red-500",
  },
  {
    id: "pandora",
    name: "Pandora",
    icon: PandoraIcon,
    color: "text-blue-500",
  },
];

export default STREAMING_PLATFORMS;
