import type { CategoryType } from "@/types";
import {
  SnailIcon as EasyIcon,
  RocketIcon as HardIcon,
  RabbitIcon as SprintIcon,
  GaugeIcon as TempoIcon,
} from "lucide-react";

// Category configuration shared between components
const CATEGORIES: CategoryType[] = [
  {
    name: "Easy",
    icon: EasyIcon,
    description: "120-130 BPM",
    backgroundLight: "bg-green-100",
    backgroundDark: "bg-green-200",
    groupHover: "group-hover:bg-green-100",
    border: "border-green-300",
    text: "text-green-800",
    slug: "easy",
  },
  {
    name: "Tempo",
    icon: TempoIcon,
    description: "130-140 BPM",
    backgroundLight: "bg-blue-100",
    backgroundDark: "bg-blue-200",
    groupHover: "group-hover:bg-blue-100",
    border: "border-blue-300",
    text: "text-blue-800",
    slug: "tempo",
  },
  {
    name: "Sprint",
    icon: SprintIcon,
    description: "140-150 BPM",
    backgroundLight: "bg-orange-100",
    backgroundDark: "bg-orange-200",
    groupHover: "group-hover:bg-orange-100",
    border: "border-orange-300",
    text: "text-orange-800",
    slug: "sprint",
  },
  {
    name: "Hard",
    icon: HardIcon,
    description: "150+ BPM",
    backgroundLight: "bg-red-100",
    backgroundDark: "bg-red-200",
    groupHover: "group-hover:bg-red-100",
    border: "border-red-300",
    text: "text-red-800",
    slug: "hard",
  },
];

export default CATEGORIES;
