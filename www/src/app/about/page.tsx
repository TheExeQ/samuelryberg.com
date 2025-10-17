import React, { FC } from "react";
import Link from "next/link";
import { FileText } from "lucide-react";

import { technologyList, experiences } from "@/config";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BackgroundGrid from "@/components/background-grid";

const About: FC = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundGrid />

      <section className="container mx-auto px-4 py-16 pt-32">
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-border/60 bg-background/95 p-10 text-center shadow-xl backdrop-blur">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">About Me</h2>
          <div className="mb-8 flex items-center justify-center gap-6 text-sm font-semibold uppercase tracking-wide text-primary/80">
            <a
              href="#skills"
              className="transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              Skills
            </a>
            <span className="h-3 w-px bg-border" aria-hidden="true" />
            <a
              href="#experience"
              className="transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              Experience
            </a>
          </div>

          <div className="mb-12 space-y-6 text-lg text-muted-foreground">
            <p>
              Outside of work, I spend most of my time cooking or exploring
              music, though I&apos;ll admit I&apos;m a much better cook than
              musician. Cooking has become a real passion of mine, and I even
              built{" "}
              <a
                href="https://food.samuelryberg.com"
                className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                a small recipe website
              </a>{" "}
              where I occasionally share my favorite dishes.
            </p>
            <p>
              I live in Malmö but grew up in Helsingborg. I enjoy traveling and
              experiencing new cultures whenever I can, and I&apos;ve made a
              habit of creating short travel montages to look back on later. You
              can find a few of them in{" "}
              <a
                href="https://youtube.com/playlist?list=PL7c_fMDztcngV8bVy3eanumZa1VbmHIHL&si=UNQ5BF-rjgLQLNG8"
                className="font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                my travel playlist on YouTube
              </a>
              .
            </p>
            <p>
              Friends and teammates would likely describe me as reliable, calm,
              curious, humble, and a good listener. One of my proudest
              engineering achievements was optimizing the network traffic for a
              multiplayer game project. I implemented improvements that reduced
              bandwidth usage by about 60%.
            </p>
            <p>
              In my work, I value clear communication, transparency, and
              approachability. I strive to build maintainable, scalable, and
              secure systems, and I&apos;m always looking for ways to learn and
              improve. Curiosity drives much of what I do, both personally and
              professionally, and I enjoy continuously finding opportunities to
              grow and refine my craft.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" aria-hidden="true" />
                <span>View Resume</span>
              </Link>
            </Button>
          </div>

          <h3
            id="skills"
            className="mb-6 mt-12 text-2xl font-semibold scroll-mt-[40vh]"
          >
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologyList.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <Button
                  key={index}
                  variant="outline"
                  className="border-primary text-primary/90 bg-primary/5 transition-all duration-200 hover:border-primary/60 hover:bg-primary/10 hover:text-primary hover:shadow-md"
                  asChild
                >
                  {"href" in tech && tech.href ? (
                    <Link
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      <span>{tech.name}</span>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                      <span>{tech.name}</span>
                    </span>
                  )}
                </Button>
              );
            })}
          </div>

          <h3
            id="experience"
            className="mb-6 mt-12 text-2xl font-semibold scroll-mt-[40vh]"
          >
            Experience
          </h3>
          <div className="relative">
            <div
              className="absolute bottom-6 left-4 top-6 w-px bg-[color:color-mix(in_oklab,var(--foreground)_13%,transparent)] dark:bg-[color:color-mix(in_oklab,var(--foreground)_26%,transparent)] sm:left-6"
              aria-hidden="true"
            />
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative pl-12 sm:pl-16">
                  {index === 0 && (
                    <span
                      className="absolute left-4 top-0 z-10 h-6 w-4 -translate-x-1/2 rounded-b-full bg-background/95 sm:left-6"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="absolute left-4 top-6 z-20 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-6"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <Card className="!gap-0 p-5 text-left">
                    <div className="text-sm font-medium uppercase tracking-wide text-primary">
                      {exp.year}
                    </div>
                    <div className="mt-1 text-lg font-bold">{exp.title}</div>
                    <div className="text-sm font-semibold text-muted-foreground">
                      {exp.company}
                    </div>
                    <div className="mt-2">{exp.description}</div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
