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
  images,
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
              </div>
            </div>
          ))}
          {images && (
            <>
              <h2 className="mb-6 text-center text-3xl font-bold">Gallery</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {images?.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] w-full">
                    <Image
                      src={image}
                      alt={`${title} gallary image ${index}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={75}
                      className="rounded-lg bg-foreground/50 object-cover"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
