import { Project, PortfolioProjectProps } from "@/types";

import { PotionRun } from "./project-data/potionrun";
import { HungryHouse } from "./project-data/hungryhouse";
import { CuteEmUp } from "./project-data/cuteemup";
import { BardKnight } from "./project-data/bardknight";
import { BosMorning } from "./project-data/bosmorning";
import { Spite } from "./project-data/spite";
import { Ekaya } from "./project-data/ekaya";
import { Vipertrace } from "./project-data/vipertrace";
import { RubberBandits } from "./project-data/rubberbandits";
import { Warriors } from "./project-data/warriors";

import RubberBanditsImage from "@public/projects/rubberbandits/rubberbandits.jpg";
import WarriorsImage from "@public/projects/warriors/warriors.png";

import PotionRunImage from "@public/projects/potionrun/potionrun.png";
import HungryHouseImage from "@public/projects/hungryhouse/hungryhouse.png";
import CuteEmUpImage from "@public/projects/cuteemup/cuteemup.png";
import BardKnightImage from "@public/projects/bardknight/bardknight.png";
import BoImage from "@public/projects/morningofbo/bo.png";
import SpiteImage from "@public/projects/spiteyellowplague/spite.png";
import EkayaImage from "@public/projects/ekayaandpebbles/ekaya.png";
import VipertraceImage from "@public/projects/vipertrace/vipertrace.png";

export const projectsData: { [key: string]: PortfolioProjectProps } = {
  warriors: Warriors,
  "rubber-bandits": RubberBandits,
  vipertrace: Vipertrace,
  "ekaya-pebbles": Ekaya,
  "spite-the-yellow-plague": Spite,
  "bos-morning": BosMorning,
  "bard-knight": BardKnight,
  "cute-em-up": CuteEmUp,
  "hungry-house": HungryHouse,
  "potion-run": PotionRun,
};

export const categoryOrder = ["Games", "Web", "Mobile"] as const;

export const projects: Project[] = [
  {
    href: "warriors",
    title: "Warriors",
    image: WarriorsImage,
    technologies: ["Unity", "C#", "Perforce"],
    summary:
      "Shipped a fast-paced online arena brawler for Steam with bespoke combat systems and live multiplayer tooling.",
    tags: ["Multiplayer", "Unity", "C#", "Steam", "Professional"],
    category: "Games",
    featured: true,
  },
  {
    href: "rubber-bandits",
    title: "Rubber Bandits",
    image: RubberBanditsImage,
    technologies: ["Unity", "C#", "Perforce"],
    summary:
      "Delivered the physics-driven chaos behind Rubber Bandits, keeping party play polished across console and PC.",
    tags: ["Multiplayer", "Unity", "C#", "Steam", "Professional"],
    category: "Games",
    featured: true,
  },
  {
    href: "vipertrace",
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: ["C++", "C#", "Perforce"],
    summary:
      "Led AI and navigation for a sci-fi FPS built in our custom Volt engine during my final year at The Game Assembly.",
    tags: ["Multiplayer", "Custom Engine", "C++", "C#", "Steam", "Academic"],
    category: "Games",
    featured: true,
  },
  {
    href: "ekaya-pebbles",
    title: "Ekaya & Pebbles",
    image: EkayaImage,
    technologies: ["C++", "C#", "Perforce"],
    summary:
      "Created third-person traversal and telekinetic companion systems in a bespoke engine for Ekaya & Pebbles.",
    tags: ["Custom Engine", "C++", "C#", "Academic"],
    category: "Games",
  },
  {
    href: "spite-the-yellow-plague",
    title: "Spite: The Yellow Plague",
    image: SpiteImage,
    technologies: ["C++", "Perforce"],
    summary:
      "Built enemy navigation and tools while co-authoring the Volt engine for a dark dungeon crawler.",
    tags: ["Custom Engine", "C++", "Academic"],
    category: "Games",
  },
  {
    href: "bos-morning",
    title: "Bo's Morning",
    image: BoImage,
    technologies: ["C++", "Perforce"],
    summary:
      "Designed a top-down action adventure with handcrafted enemy behaviors to bring Bo's farm back to life.",
    tags: ["C++", "Academic"],
    category: "Games",
  },
  {
    href: "bard-knight",
    title: "Bard Knight",
    image: BardKnightImage,
    technologies: ["C++", "Perforce"],
    summary:
      "Developed rhythm-driven platforming mechanics in collaboration with Ostra Grevie's music program.",
    tags: ["Custom Engine", "C++", "Academic"],
    category: "Games",
  },
  {
    href: "cute-em-up",
    title: "Cute 'em up",
    image: CuteEmUpImage,
    technologies: ["C++", "Perforce"],
    summary:
      "Engineered arcade shooter systems and bullet-hell encounters in our first C++ project.",
    tags: ["Custom Engine", "C++", "Academic"],
    category: "Games",
  },
  {
    href: "hungry-house",
    title: "Hungry House",
    image: HungryHouseImage,
    technologies: ["Unity", "C#", "Perforce"],
    summary:
      "Designed award-winning mobile puzzle loops and creature animations during an eight-week sprint.",
    tags: ["Unity", "C#", "Academic"],
    category: "Mobile",
    featured: true,
  },
  {
    href: "potion-run",
    title: "Potion Run",
    image: PotionRunImage,
    technologies: ["Unity", "C#", "Perforce"],
    summary:
      "Built the endless runner foundation for Potion Run, balancing pacing, obstacles, and progression on mobile.",
    tags: ["Unity", "C#", "Academic"],
    category: "Games",
  },
];
