import React, { FC } from "react";
import Image from "next/image";

import AboutImage from "@public/About/About.jpg";

import { Alex_Brush } from "next/font/google";
const AlexBrush = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const About: FC = () => {
  return (
    <div className="mt-32 flex items-center justify-center">
      <div className={AlexBrush.className}>
        <div className="relative aspect-square h-48 md:h-80 lg:h-96">
          <Image src={AboutImage} alt="About me picture" fill />
          <div className="absolute flex h-full w-full items-end justify-center">
            <h1 className="-mb-6 -rotate-12 text-center text-4xl md:-mb-8 md:text-6xl lg:-mb-10 lg:text-8xl">
              Samuel Ryberg
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
