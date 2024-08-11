import React, { FC } from "react";
import Image from "next/image";

import AboutImage from "@public/About/About.jpg";

import { Alex_Brush } from "next/font/google";
import { cn } from "@/lib/utils";
const AlexBrush = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const About: FC = () => {
  return (
    <div className="mt-32">
      {/* Picture and Name */}
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
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            fill
          />
          <div className="absolute flex h-full w-full items-end justify-center">
            <h1 className="-mb-6 -rotate-12 text-center text-6xl md:-mb-8 lg:-mb-10 lg:text-8xl">
              Samuel Ryberg
            </h1>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="prose prose-invert mx-auto max-w-[800px] px-8 md:px-6">
        <p>
          I&apos;m a Gameplay, Tools and Backend Engineer from Sweden who enjoys
          creating games. In my free time, I like to cook and make/learn music.
          <br />
          <br />
          I&apos;m always looking to learn new things and expand my knowledge in
          game development. I&apos;m fascinated by the constantly evolving
          technology in this field and I&apos;m always eager to stay on top of
          the latest trends and techniques.
        </p>
      </div>

      {/* Experience Timeline */}
      <ul role="list" className="mx-auto mt-8 max-w-screen-md px-4">
        <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
          <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
          <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-purple-300 bg-zinc-950"></div>
          <h3 className="mt-2 text-sm/6 font-semibold text-white">
            Flashbulb Games
          </h3>
          <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-purple-300">
            2023 - Present
          </p>
          <p className="mt-0.5 text-sm/6 text-zinc-400">
            Gameplay, UI & Tools Engineer
          </p>
        </li>
        <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
          <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
          <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-purple-300 bg-zinc-950"></div>
          <h3 className="mt-2 text-sm/6 font-semibold text-white">
            The Game Assembly
          </h3>
          <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-purple-300">
            2021 - 2024
          </p>
          <p className="mt-0.5 text-sm/6 text-zinc-400">
            Learning industry standards in the game development industry
          </p>
        </li>
        <li className="group relative flex flex-col pb-8 pl-7 last:pb-0">
          <div className="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-0 w-px bg-white/10 group-first:top-3"></div>
          <div className="absolute left-0 top-2 h-2 w-2 rounded-full border border-purple-300 bg-zinc-950"></div>
          <h3 className="mt-2 text-sm/6 font-semibold text-white">
            LBS Creative High School
          </h3>
          <p className="font-display text-2xs/6 order-first font-semibold tracking-[0.2em] text-purple-300">
            2017 - 2020
          </p>
          <p className="mt-0.5 text-sm/6 text-zinc-400">
            Learning game development in the Unity game engine
          </p>
        </li>
      </ul>
    </div>
  );
};
