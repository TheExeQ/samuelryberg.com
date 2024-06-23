import React, { FC } from "react";
import { Spotlight } from "@/components";

const Hero: FC = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="purple"
        />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="cyan" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <p className="relative z-20 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text py-8 text-4xl font-bold uppercase text-transparent sm:text-7xl">
          Vipertrace
        </p>
      </div>
    </div>
  );
};

export default Hero;
