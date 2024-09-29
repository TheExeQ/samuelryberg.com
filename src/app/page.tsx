import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import AboutImage from "@public/about/about-gray.jpg";

const Home: FC = () => (
  <main className="relative min-h-screen">
    <Spotlight
      className="-top-40 left-0 hidden dark:block md:-top-20 md:left-60"
      fill="white"
    />
    <div className="absolute inset-0 -z-10 flex h-auto w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

    {/* Hero Section */}
    <Card className="container mx-auto max-w-6xl border-none bg-transparent pt-20 shadow-none sm:pt-0">
      <CardContent className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 pb-12 pt-20 sm:px-6 sm:pt-24 md:pt-32 lg:flex-row lg:px-8 lg:pt-0">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Welcome to My Portfolio
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl lg:mx-0">
            I&apos;m a game developer specializing in backend systems.
            Let&apos;s build something great together!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button size="lg" asChild>
              <Link href="/work">View Projects</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">About me</Link>
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
