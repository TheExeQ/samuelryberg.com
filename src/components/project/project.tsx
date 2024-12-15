import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCarousel } from "@/components";

import { PortfolioProjectProps } from "@/types";

export function PortfolioProject({
  title,
  description,
  trailerUrl,
  additional,
  sections,
}: PortfolioProjectProps) {
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
