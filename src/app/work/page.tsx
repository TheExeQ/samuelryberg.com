import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { SiUnity, SiUnrealengine } from "react-icons/si";

import RubberBanditsImage from "@public/projects/rubberbandits/rubberbandits.jpg";

import PotionRunImage from "@public/projects/potionrun/potionrun.png";
import HungryHouseImage from "@public/projects/hungryhouse/hungryhouse.png";
import CuteEmUpImage from "@public/projects/cuteemup/cuteemup.png";
import BardKnightImage from "@public/projects/bardknight/bardknight.png";
import BoImage from "@public/projects/morningofbo/bo.png";
import SpiteImage from "@public/projects/spiteyellowplague/spite.png";
import EkayaImage from "@public/projects/ekayaandpebbles/ekaya.png";
import VipertraceImage from "@public/projects/vipertrace/vipertrace.png";
import Link from "next/link";

type Project = {
  id: number;
  href: string;
  title: string;
  image: StaticImageData;
  technologies: string[];
};

const technologyIcons: { [key: string]: JSX.Element } = {
  "Unity Engine": <SiUnity className="h-4 w-4" />,
  "Unreal Engine": <SiUnrealengine className="h-4 w-4" />,
};

const professionalProjects: Project[] = [
  {
    id: 1,
    href: "rubber-bandits",
    title: "Rubber Bandits",
    image: RubberBanditsImage,
    technologies: ["Unity Engine"],
  },
];

const academicProjects: Project[] = [
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

const Work: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <Projects title="Professional" projects={professionalProjects} />
      <Projects title="Academic" projects={academicProjects} />
    </div>
  );
};

interface ProjectsProps {
  title: string;
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ title, projects }) => {
  return (
    <div className="pt-12">
      <h1 className="mb-8 text-4xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <Link href={`/work/${project.href}`}>
              <div className="relative pb-[56.25%]">
                <Image
                  src={project.image}
                  alt={`${project.title} wallpaper`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="mb-2 text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech) => (
                      <Tooltip key={tech}>
                        <TooltipTrigger asChild>
                          <Badge
                            variant="secondary"
                            className="rounded-full p-1"
                          >
                            {technologyIcons[tech]}
                          </Badge>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tech}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Work;
