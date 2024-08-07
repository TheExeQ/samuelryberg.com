import React, { FC } from "react";
import Image from "next/image";

import AboutImage from "@public/About/About.jpg";

import { Alex_Brush } from "next/font/google";
import { cn } from "@/lib/utils";
const AlexBrush = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const About: FC = () => {
  return (
    <div className="mt-32">
      <div
        className={cn(
          AlexBrush.className,
          "mb-16 flex items-center justify-center"
        )}
      >
        <div className="relative aspect-square h-64 md:h-80 lg:h-96">
          <Image
            className="rounded-xl"
            src={AboutImage}
            alt="About me picture"
            fill
          />
          <div className="absolute flex h-full w-full items-end justify-center">
            <h1 className="-mb-6 -rotate-12 text-center text-6xl md:-mb-8 lg:-mb-10 lg:text-8xl">
              Samuel Ryberg
            </h1>
          </div>
        </div>
      </div>

      <div className="prose prose-invert mx-auto max-w-[800px] px-8 md:px-6">
        <p>
          I'm a Gameplay, Tools and Backend Engineer from Sweden who enjoys
          creating games. In my free time, I like to cook and make/learn music.
          <br />
          <br />
          I'm always looking to learn new things and expand my knowledge in game
          development. I'm fascinated by the constantly evolving technology in
          this field and I'm always eager to stay on top of the latest trends
          and techniques.
        </p>
      </div>
    </div>
  );
};
