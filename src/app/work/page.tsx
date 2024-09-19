import React, { FC } from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiUnity, SiUnrealengine, SiCplusplus } from "react-icons/si";

import VipertraceImage from "@public/Projects/Vipertrace/Vipertrace.png";

const projects = [
  {
    id: 1,
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: ["cpp", "unity", "unreal"],
  },
  {
    id: 2,
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: ["unity", "unreal"],
  },
  {
    id: 3,
    title: "Vipertrace",
    image: VipertraceImage,
    technologies: ["cpp"],
  },
];

const technologyIcons: { [key: string]: JSX.Element } = {
  cpp: <SiCplusplus className="h-4 w-4" />,
  unity: <SiUnity className="h-4 w-4" />,
  unreal: <SiUnrealengine className="h-4 w-4" />,
};

const Work: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <h1 className="mb-8 text-3xl font-bold">My Game Development Projects</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="relative pb-[56.25%]">
              <Image
                src={project.image}
                alt={`${project.title} wallpaper`}
                className="absolute inset-0 h-full w-full object-cover"
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
