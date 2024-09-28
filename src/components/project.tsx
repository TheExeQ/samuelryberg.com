import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <CardTitle className="my-6 text-center text-6xl font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-8 grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Project Overview</h2>
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
          <div>{additional}</div>
          {sections?.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} mb-12 items-center gap-6`}
            >
              <div className="flex-1">
                <h3 className="mb-2 text-xl font-semibold">{section.title}</h3>
                <div className="text-muted-foreground">{section.content}</div>
              </div>
              <div className="flex-1">
                {section.mediaType === "image" ? (
                  <Image
                    src={section.mediaSrc}
                    alt={section.altText || `${section.title} image`}
                    width={500}
                    height={300}
                    className="h-auto w-full rounded-lg object-cover"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={section.mediaSrc}
                      title={section.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
