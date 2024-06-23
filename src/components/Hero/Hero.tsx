import React, { FC } from "react";
import { Spotlight } from "@/components";

const Hero: FC = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="cyan" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold uppercase relative z-20 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent py-8">
          Vipertrace
        </p>
      </div>
    </div>
  );
};

export default Hero;
