import {
  SnailIcon as EasyIcon,
  RocketIcon as HardIcon,
  RabbitIcon as SprintIcon,
  GaugeIcon as TempoIcon,
} from "lucide-react";

// Category configuration shared between components
export const CATEGORY_CONFIG = {
  Easy: {
    styles: "bg-green-100 border-green-300 text-green-800 hover:bg-green-200",
    icon: EasyIcon,
    description: "Steady pace, 120-130 BPM",
  },
  Tempo: {
    styles: "bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200",
    icon: TempoIcon,
    description: "Moderate intensity, 130-140 BPM",
  },
  Sprint: {
    styles:
      "bg-orange-100 border-orange-300 text-orange-800 hover:bg-orange-200",
    icon: SprintIcon,
    description: "High energy, 140-150 BPM",
  },
  Hard: {
    styles: "bg-red-100 border-red-300 text-red-800 hover:bg-red-200",
    icon: HardIcon,
    description: "Maximum effort, 150+ BPM",
  },
} as const;

export type CategoryType = keyof typeof CATEGORY_CONFIG;
