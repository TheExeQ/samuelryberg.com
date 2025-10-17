import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import BackgroundGrid from "@/components/background-grid";

import AboutImage from "@public/about/about-gray.jpg";

const Home: FC = () => (
  <main className="relative min-h-screen">
    <BackgroundGrid />

    {/* Hero Section */}
    <Card className="container mx-auto max-w-6xl border-none bg-transparent pt-20 shadow-none sm:pt-0">
      <CardContent className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 pb-12 pt-20 sm:px-6 sm:pt-24 md:pt-32 lg:flex-row lg:px-8 lg:pt-0">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl/none">
            Hi, I&apos;m Samuel! 👋🏼
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:mx-0">
            I create automated pipelines that help teams ship faster without surprises, tightening feedback loops and smoothing every release.
          </p>
          <p className="mx-auto max-w-[600px] text-sm text-muted-foreground md:text-base lg:mx-0">
            Focused on CI/CD automation, observability, and developer
            experience.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/about">More About Me</Link>
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative h-64 w-64 overflow-hidden rounded-lg border-2 border-primary sm:h-80 sm:w-80">
            <Image
              src={AboutImage}
              alt="Samuel Ryberg"
              fill
              quality={75}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  </main>
);

export default Home;
