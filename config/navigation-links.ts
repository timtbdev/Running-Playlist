import { NavigationLink } from "@/types";
import {
    UserIcon as AboutMeIcon,
    HomeIcon,
    MailIcon
} from "lucide-react";

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
    icon: MailIcon,
    href: "/contact",
    label: "Contact",
  },
];

export default navigationLinks;
