import {
  UserIcon as AboutMeIcon,
  HomeIcon,
  MailIcon,
  MusicIcon,
} from "lucide-react";
import type { NavigationLink } from "@/types";

const navigationLinks: NavigationLink[] = [
  {
    icon: HomeIcon,
    href: "/",
    label: "Home",
  },
  {
    icon: AboutMeIcon,
    href: "/about",
    label: "About",
  },
  {
    icon: MusicIcon,
    href: "/music",
    label: "Music",
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Contact",
  },
];

export default navigationLinks;
