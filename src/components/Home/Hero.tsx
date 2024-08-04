import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Spotlight, TextGenerateEffect, MagicButton } from "@/components";
import { Navigation, ArrowDownFromLine } from "lucide-react";

import FeaturedBackground from "@public/projects/vipertrace/vipertrace.png";

export const Hero: FC = () => {
  return (
    <div className="h-screen">
      {/* Spotlights */}
      <div className="hidden lg:block">
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="purple"
        />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="cyan" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 h-screen">
        <Image
          src={FeaturedBackground}
          alt="vipertrace background"
          className="object-cover"
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 flex h-screen w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Description */}
      <div className="relative z-10 flex h-svh justify-center">
        <div className="lg:max-w[60vw] flex max-w-[89vw] flex-col items-center justify-center md:mt-56 md:max-w-2xl">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Featured Project
          </h2>

          <TextGenerateEffect
            className="text-center text-6xl uppercase lg:text-8xl"
            words="Vipertrace"
          />

          <Link href="projects/vipertrace">
            <MagicButton
              title="Read more!"
              icon={<Navigation className="w-4" />}
            />
          </Link>
        </div>
        <div className="absolute bottom-5 mx-auto flex flex-col items-center justify-center gap-2">
          <h3 className="text-md font-bold uppercase lg:text-lg">
            Scroll Down
          </h3>
          <ArrowDownFromLine className="w-6" />
        </div>
      </div>
    </div>
  );
};
