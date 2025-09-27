import React, { FC } from "react";
import Link from "next/link";

import { technologies, experiences } from "@/config";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BackgroundGrid from "@/components/background-grid";

const About: FC = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundGrid />

      <section className="container mx-auto px-4 py-16 pt-32">
        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl border border-border/60 bg-background/95 p-10 text-center shadow-xl backdrop-blur">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>

          <p className="mb-12 text-lg text-muted-foreground">
            I&apos;m a Software Engineer from Sweden who enjoys creating games.
            In my free time, I like to cook and make/learn music.
            <br />
            <br />
            I&apos;m always looking to learn new things and expand my knowledge
            in game development. I&apos;m fascinated by the constantly evolving
            technology in this field and I&apos;m always eager to stay on top of
            the latest trends and techniques.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/projects">View Work</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <h3 className="mb-6 mt-12 text-2xl font-semibold">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Button key={index} variant="secondary" asChild>
                {tech.href ? (
                  <Link
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tech.name}
                  </Link>
                ) : (
                  <span>{tech.name}</span>
                )}
              </Button>
            ))}
          </div>

          <h3 className="mb-6 mt-12 text-2xl font-semibold">Experience</h3>
          <div className="relative">
            <div
              className="absolute bottom-6 left-4 top-6 w-px bg-border/60 sm:left-6"
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
