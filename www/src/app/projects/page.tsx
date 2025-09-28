"use client";

import { type FC, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ProjectView } from "@/components";
import { academicProjects, professionalProjects } from "@/config/projects";
import type { Project } from "@/types";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ExtendedProject = Project & {
  summary: string;
  tags: string[];
  categories: string[];
  featured?: boolean;
};

const projectMetadata: Record<
  string,
  {
    summary: string;
    tags: string[];
    categories: string[];
    featured?: boolean;
  }
> = {
  warriors: {
    summary:
      "Shipped a fast-paced online arena brawler for Steam with bespoke combat systems and live multiplayer tooling.",
    tags: ["Multiplayer", "Unity", "Steam", "Professional"],
    categories: ["Games"],
    featured: true,
  },
  "rubber-bandits": {
    summary:
      "Delivered the physics-driven chaos behind Rubber Bandits, keeping party play polished across console and PC.",
    tags: ["Multiplayer", "Unity", "Professional"],
    categories: ["Games"],
    featured: true,
  },
  vipertrace: {
    summary:
      "Led AI and navigation for a sci-fi FPS built in our custom Volt engine during my final year at The Game Assembly.",
    tags: ["Custom Engine", "C++", "Academic"],
    categories: ["Games"],
    featured: true,
  },
  "ekaya-pebbles": {
    summary:
      "Created third-person traversal and telekinetic companion systems in a bespoke engine for Ekaya & Pebbles.",
    tags: ["Custom Engine", "C++", "Academic"],
    categories: ["Web"],
  },
  "spite-the-yellow-plague": {
    summary:
      "Built enemy navigation and tools while co-authoring the Volt engine for a dark dungeon crawler.",
    tags: ["Custom Engine", "C++", "Academic"],
    categories: ["Games"],
  },
  "bos-morning": {
    summary:
      "Designed a top-down action adventure with handcrafted enemy behaviors to bring Bo's farm back to life.",
    tags: ["C++", "Academic"],
    categories: ["Games"],
  },
  "bard-knight": {
    summary:
      "Developed rhythm-driven platforming mechanics in collaboration with Ostra Grevie's music program.",
    tags: ["C++", "Academic"],
    categories: ["Games"],
  },
  "cute-em-up": {
    summary:
      "Engineered arcade shooter systems and bullet-hell encounters in our first C++ project.",
    tags: ["C++", "Academic"],
    categories: ["Games"],
  },
  "hungry-house": {
    summary:
      "Designed award-winning mobile puzzle loops and creature animations during an eight-week sprint.",
    tags: ["C#", "Academic"],
    categories: ["Mobile"],
    featured: true,
  },
  "potion-run": {
    summary:
      "Built the endless runner foundation for Potion Run, balancing pacing, obstacles, and progression on mobile.",
    tags: ["C#", "Academic"],
    categories: ["Mobile"],
  },
};

const categoryOrder = ["Games", "Web", "Mobile"];

const baseProjects: Project[] = [
  ...professionalProjects,
  ...academicProjects,
];

const projectsWithMetadata: ExtendedProject[] = baseProjects
  .map((project) => {
    const meta = projectMetadata[project.href];

    if (!meta) {
      return null;
    }

    return {
      ...project,
      ...meta,
    } as ExtendedProject;
  })
  .filter(Boolean) as ExtendedProject[];

const featuredProjectsData = projectsWithMetadata.filter((project) => project.featured);

const tagOptionsData = Array.from(
  projectsWithMetadata.reduce((acc, project) => {
    project.tags.forEach((tag) => acc.add(tag));
    return acc;
  }, new Set<string>())
).sort((a, b) => a.localeCompare(b));

const Work: FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const handleSelect = () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    setCurrentSlide(carouselApi.selectedScrollSnap());
    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  const visibleProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projectsWithMetadata;
    }

    return projectsWithMetadata.filter((project) =>
      selectedTags.every((tag) => project.tags.includes(tag))
    );
  }, [selectedTags]);

  const categorizedProjects = useMemo(
    () =>
      categoryOrder.map((category) => ({
        category,
        projects: visibleProjects.filter((project) =>
          project.categories.includes(category)
        ),
      })),
    [visibleProjects]
  );

  const hasVisibleProjects = categorizedProjects.some(
    (group) => group.projects.length > 0
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-32">
      <div className="space-y-16">
        {featuredProjectsData.length > 0 && (
          <section className="space-y-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Featured projects
                </h1>
                <p className="text-base text-muted-foreground">
                  A closer look at the work I&apos;m most proud of right now.
                </p>
              </div>
              <span className="text-sm text-muted-foreground">
                {currentSlide + 1} of {featuredProjectsData.length}
              </span>
            </div>
            <Carousel setApi={setCarouselApi} className="relative w-full">
              <CarouselContent>
                {featuredProjectsData.map((project, index) => (
                  <CarouselItem key={project.href}>
                    <Card className="overflow-hidden border-0 shadow-2xl">
                      <CardContent className="relative h-[360px] overflow-hidden rounded-2xl bg-muted p-0 sm:h-[420px] lg:h-[520px]">
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 960px"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 text-white sm:p-8">
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <h2 className="text-2xl font-semibold sm:text-3xl">
                              {project.title}
                            </h2>
                            <Link
                              href={`/projects/${project.href}`}
                              className="text-sm font-medium underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                            >
                              View project
                            </Link>
                          </div>
                          <p className="max-w-3xl text-sm text-white/80 sm:text-base">
                            {project.summary}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={`${project.href}-${tag}`}
                                variant="secondary"
                                className="bg-white/15 text-xs font-medium uppercase tracking-wide text-white backdrop-blur"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 -translate-x-[120%] hidden h-12 w-12 items-center justify-center rounded-full border bg-background shadow-lg disabled:hidden sm:flex" />
              <CarouselNext className="right-0 top-1/2 -translate-y-1/2 translate-x-[120%] hidden h-12 w-12 items-center justify-center rounded-full border bg-background shadow-lg disabled:hidden sm:flex" />
            </Carousel>
            <div className="flex justify-center gap-2">
              {featuredProjectsData.map((project, index) => (
                <button
                  key={project.href}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={cn(
                    "h-2.5 w-2.5 rounded-full transition-colors",
                    currentSlide === index
                      ? "bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>
        )}

        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Filter by tags
            </h2>
            <p className="text-sm text-muted-foreground">
              Mix and match tags to find projects that match your interests.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tagOptionsData.map((tag) => (
              <Toggle
                key={tag}
                pressed={selectedTags.includes(tag)}
                onPressedChange={() => handleTagToggle(tag)}
                variant="outline"
                className="px-3 py-2 text-sm"
                aria-label={`Toggle ${tag} filter`}
              >
                {tag}
              </Toggle>
            ))}
          </div>
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedTags([])}
              className="w-fit px-2"
            >
              Clear filters
            </Button>
          )}
        </section>

        <section>
          {hasVisibleProjects ? (
            categorizedProjects.map((group) =>
              group.projects.length > 0 ? (
                <ProjectView
                  key={group.category}
                  title={group.category}
                  projects={group.projects}
                />
              ) : null
            )
          ) : (
            <div className="rounded-lg border border-dashed border-muted-foreground/40 p-12 text-center">
              <p className="text-base font-medium text-foreground">
                No projects match those tags yet.
              </p>
              <p className="text-sm text-muted-foreground">
                Try removing a filter or choosing a different combination.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Work;
