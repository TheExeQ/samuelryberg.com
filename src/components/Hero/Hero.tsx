import React, { FC } from "react";
import Image from "next/image";

import { Spotlight, TextGenerateEffect, MagicButton } from "@/components";
import { Navigation } from "lucide-react";

import FeaturedBackground from "@public/projects/vipertrace/vipertrace.png";

const Hero: FC = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="purple"
        />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="cyan" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      {/* Background */}
      <div className="absolute left-0 top-0 h-screen w-full overflow-hidden">
        <Image
          src={FeaturedBackground}
          alt="vipertrace background"
          className="h-full object-cover"
          priority
        />
      </div>
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.1] dark:bg-grid-white/[0.1]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Description */}
      <div className="relative z-10 my-56 flex justify-center">
        <div className="lg:max-w[60vw] flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Featured Project
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] uppercase md:text-5xl lg:text-6xl"
            words="Vipertrace"
          />

          <MagicButton
            title="Read more!"
            icon={<Navigation className="w-4" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
