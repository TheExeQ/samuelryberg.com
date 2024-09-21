import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiUnity, SiUnrealengine, SiCplusplus } from "react-icons/si";

import RubberBanditsImage from "@public/projects/rubberbandits/rubberbandits.jpg";

import PotionRunImage from "@public/projects/potionrun/potionrun.png";
import HungryHouseImage from "@public/projects/hungryhouse/hungryhouse.png";
import CuteEmUpImage from "@public/projects/cuteemup/cuteemup.png";
import BardKnightImage from "@public/projects/bardknight/bardknight.png";
import BoImage from "@public/projects/morningofbo/bo.png";
import SpiteImage from "@public/projects/spiteyellowplague/spite.png";
import EkayaImage from "@public/projects/ekayaandpebbles/ekaya.png";
import VipertraceImage from "@public/projects/vipertrace/vipertrace.png";

type Project = {
  id: number;
  title: string;
  image: StaticImageData;
  technologies: string[];
};

const technologyIcons: { [key: string]: JSX.Element } = {
  cpp: <SiCplusplus className="h-4 w-4" />,
  unity: <SiUnity className="h-4 w-4" />,
  unreal: <SiUnrealengine className="h-4 w-4" />,
};

const professionalProjects: Project[] = [
  {
    id: 1,
    title: "Rubber Bandits",
    image: RubberBanditsImage,
    technologies: ["unity"],
  },
];

const academicProjects: Project[] = [
  {
    id: 1,
    title: "Potion Run",
    image: PotionRunImage,
    technologies: ["unity"],
  },
  {
    id: 2,
    title: "Hungry House",
    image: HungryHouseImage,
    technologies: ["unity"],
  },
  {
    id: 3,
    title: "Cute 'em up",
    image: CuteEmUpImage,
    technologies: ["cpp"],
  },
  {
    id: 4,
    title: "Bard Knight",
    image: BardKnightImage,
    technologies: ["cpp"],
  },
  {
    id: 5,
    title: "Bo's Morning",
    image: BoImage,
    technologies: ["cpp"],
  },
  {
    id: 6,
    title: "Spite: The Yellow Plague",
    image: SpiteImage,
    technologies: ["cpp"],
  },
  {
    id: 7,
    title: "Ekaya & Pebbles",
    image: EkayaImage,
    technologies: ["cpp"],
  },
  {
    id: 8,
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: ["cpp"],
  },
];

const Work: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <Projects title="Professional Projects" projects={professionalProjects} />
      <Projects title="Academic Projects" projects={academicProjects} />
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
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full p-1"
                    >
                      {technologyIcons[tech]}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Work;
