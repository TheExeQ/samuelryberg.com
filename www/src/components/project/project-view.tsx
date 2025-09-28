import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectsProps } from "@/types";
import type { IconType } from "react-icons";
import { SiUnity, SiUnrealengine } from "react-icons/si";

const technologyIcons: Record<string, IconType> = {
  "Unity Engine": SiUnity,
  "Unreal Engine": SiUnrealengine,
};

export const ProjectView: FC<ProjectsProps> = ({ title, projects }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <div className="pt-12">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
        }}
        className="relative"
      >
        <CarouselContent className="-ml-4 pr-8 sm:pr-12">
          {projects.map((project) => (
            <CarouselItem
              key={project.href}
              className="basis-[calc(100%_-_2.25rem)] overflow-visible pl-4 sm:basis-[calc(50%_-_1.4rem)] xl:basis-[calc(32.5%_-_1.1rem)] 2xl:basis-[calc(30%_-_1rem)]"
            >
              <Card className="overflow-hidden !p-0">
                <Link href={`/projects/${project.href}`} className="block">
                  <div className="relative pb-[56.25%]">
                    <Image
                      src={project.image}
                      alt={`${project.title} wallpaper`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      className="object-cover"
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
                            <Tooltip key={`${project.href}-${tech}-${i}`}>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 -translate-x-[120%] hidden h-12 w-12 items-center justify-center rounded-full border bg-background shadow-lg disabled:hidden sm:flex" />
        <CarouselNext className="right-0 top-1/2 -translate-y-1/2 translate-x-[120%] hidden h-12 w-12 items-center justify-center rounded-full border bg-background shadow-lg disabled:hidden sm:flex" />
      </Carousel>
    </div>
  );
};
