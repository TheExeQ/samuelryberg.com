import React from "react";
import Link from "next/link";

import { technologies as technologyConfig } from "@/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components";

import { PortfolioProjectProps, Technology } from "@/types";

const technologyMap: Record<string, Technology> = technologyConfig;

export function PortfolioProject({
  title,
  description,
  trailerUrl,
  technologies,
  additional,
  sections,
}: PortfolioProjectProps) {
  const projectTechnologies = (technologies ?? []).map((tech) => ({
    key: tech,
    info: technologyMap[tech],
  }));

  return (
    <div className="py-32">
      <Card className="mx-auto w-full max-w-7xl">
        <CardHeader>
          <CardTitle className="my-2 text-center text-6xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What is {title}?</h2>
              <div className="text-muted-foreground">{description}</div>
            </div>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={trailerUrl}
                title={`${title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {projectTechnologies.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold">Tools &amp; Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                {projectTechnologies.map(({ key, info }) => {
                  const Icon = info?.icon;
                  const label = info?.name ?? key;

                  return (
                    <Button
                      key={key}
                      variant="outline"
                      className="border-primary text-primary/90 bg-primary/5 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-md"
                      asChild={Boolean(info?.href)}
                    >
                      {info?.href ? (
                        <Link
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                          <span>{label}</span>
                        </Link>
                      ) : (
                        <span className="flex items-center gap-2">
                          {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                          <span>{label}</span>
                        </span>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          )}
          {additional && <div className="mt-8">{additional}</div>}
          {sections && (
            <div className="mt-4">
              <ProjectCarousel tabs={sections} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
