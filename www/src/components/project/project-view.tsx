import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { ProjectsProps } from "@/types";
import { SiUnity, SiUnrealengine } from "react-icons/si";
import type { IconType } from "react-icons";

const technologyIcons: Record<string, IconType> = {
  "Unity Engine": SiUnity,
  "Unreal Engine": SiUnrealengine,
};

export const ProjectView: FC<ProjectsProps> = ({ title, projects }) => {
  return (
    <div className="pt-12">
      <h1 className="mb-8 text-4xl font-bold">{title}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden !p-0">
            <Link href={`/projects/${project.href}`} className="block">
              <div className="relative pb-[56.25%]">
                <Image
                  src={project.image}
                  alt={`${project.title} wallpaper`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="mb-2 text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, i) => {
                      const Icon = technologyIcons[tech];
                      return (
                        <Tooltip key={`${project.id}-${tech}-${i}`}>
                          <TooltipTrigger asChild>
                            <Badge
                              variant="secondary"
                              className="rounded-full p-1"
                            >
                              {Icon ? (
                                <Icon className="h-4 w-4" />
                              ) : (
                                <span className="text-xs">{tech}</span>
                              )}
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{tech}</p>
                          </TooltipContent>
                        </Tooltip>
                      );
                    })}
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
