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
    technologies: ["Unity Engine"],
    summary:
      "Shipped a fast-paced online arena brawler for Steam with bespoke combat systems and live multiplayer tooling.",
    tags: ["Multiplayer", "Unity", "Steam", "Professional"],
    category: "Games",
    featured: true,
  },
  {
    href: "rubber-bandits",
    title: "Rubber Bandits",
    image: RubberBanditsImage,
    technologies: ["Unity Engine"],
    summary:
      "Delivered the physics-driven chaos behind Rubber Bandits, keeping party play polished across console and PC.",
    tags: ["Multiplayer", "Unity", "Professional"],
    category: "Games",
    featured: true,
  },
  {
    href: "vipertrace",
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: [],
    summary:
      "Led AI and navigation for a sci-fi FPS built in our custom Volt engine during my final year at The Game Assembly.",
    tags: ["Custom Engine", "C++", "Academic"],
    category: "Games",
    featured: true,
  },
  {
    href: "ekaya-pebbles",
    title: "Ekaya & Pebbles",
    image: EkayaImage,
    technologies: [],
    summary:
      "Created third-person traversal and telekinetic companion systems in a bespoke engine for Ekaya & Pebbles.",
    tags: ["Custom Engine", "C++", "Academic"],
    category: "Games",
  },
  {
    href: "spite-the-yellow-plague",
    title: "Spite: The Yellow Plague",
    image: SpiteImage,
    technologies: [],
    summary:
      "Built enemy navigation and tools while co-authoring the Volt engine for a dark dungeon crawler.",
    tags: ["Custom Engine", "C++", "Academic"],
    category: "Games",
  },
  {
    href: "bos-morning",
    title: "Bo's Morning",
    image: BoImage,
    technologies: [],
    summary:
      "Designed a top-down action adventure with handcrafted enemy behaviors to bring Bo's farm back to life.",
    tags: ["C++", "Academic"],
    category: "Games",
  },
  {
    href: "bard-knight",
    title: "Bard Knight",
    image: BardKnightImage,
    technologies: [],
    summary:
      "Developed rhythm-driven platforming mechanics in collaboration with Ostra Grevie's music program.",
    tags: ["C++", "Academic"],
    category: "Games",
  },
  {
    href: "cute-em-up",
    title: "Cute 'em up",
    image: CuteEmUpImage,
    technologies: [],
    summary:
      "Engineered arcade shooter systems and bullet-hell encounters in our first C++ project.",
    tags: ["C++", "Academic"],
    category: "Games",
  },
  {
    href: "hungry-house",
    title: "Hungry House",
    image: HungryHouseImage,
    technologies: ["Unity Engine"],
    summary:
      "Designed award-winning mobile puzzle loops and creature animations during an eight-week sprint.",
    tags: ["C#", "Academic"],
    category: "Mobile",
    featured: true,
  },
  {
    href: "potion-run",
    title: "Potion Run",
    image: PotionRunImage,
    technologies: ["Unity Engine"],
    summary:
      "Built the endless runner foundation for Potion Run, balancing pacing, obstacles, and progression on mobile.",
    tags: ["C#", "Academic"],
    category: "Games",
  },
];
