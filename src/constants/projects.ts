import { Project, PortfolioProjectProps } from "@/types";

import { Vipertrace } from "./projects-data";

import RubberBanditsImage from "@public/projects/rubberbandits/rubberbandits.jpg";

import PotionRunImage from "@public/projects/potionrun/potionrun.png";
import HungryHouseImage from "@public/projects/hungryhouse/hungryhouse.png";
import CuteEmUpImage from "@public/projects/cuteemup/cuteemup.png";
import BardKnightImage from "@public/projects/bardknight/bardknight.png";
import BoImage from "@public/projects/morningofbo/bo.png";
import SpiteImage from "@public/projects/spiteyellowplague/spite.png";
import EkayaImage from "@public/projects/ekayaandpebbles/ekaya.png";
import VipertraceImage from "@public/projects/vipertrace/vipertrace.png";

export const projectsData: { [key: string]: PortfolioProjectProps } = {
  vipertrace: Vipertrace,
};

export const professionalProjects: Project[] = [
  {
    id: 1,
    href: "rubber-bandits",
    title: "Rubber Bandits",
    image: RubberBanditsImage,
    technologies: ["Unity Engine"],
  },
];

export const academicProjects: Project[] = [
  {
    id: 1,
    href: "vipertrace",
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: [],
  },
  {
    id: 2,
    href: "ekaya-pebbles",
    title: "Ekaya & Pebbles",
    image: EkayaImage,
    technologies: [],
  },
  {
    id: 3,
    href: "spite-the-yellow-plague",
    title: "Spite: The Yellow Plague",
    image: SpiteImage,
    technologies: [],
  },
  {
    id: 4,
    href: "bos-morning",
    title: "Bo's Morning",
    image: BoImage,
    technologies: [],
  },
  {
    id: 5,
    href: "bard-knight",
    title: "Bard Knight",
    image: BardKnightImage,
    technologies: [],
  },
  {
    id: 6,
    href: "cute-em-up",
    title: "Cute 'em up",
    image: CuteEmUpImage,
    technologies: [],
  },
  {
    id: 7,
    href: "hungry-house",
    title: "Hungry House",
    image: HungryHouseImage,
    technologies: ["Unity Engine"],
  },
  {
    id: 8,
    href: "potion-run",
    title: "Potion Run",
    image: PotionRunImage,
    technologies: ["Unity Engine"],
  },
];
