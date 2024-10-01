import React, { FC } from "react";
import Link from "next/link";

import { technologies, experiences } from "@/constants/config";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About: FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 flex h-auto w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />

      <section className="container mx-auto px-4 py-16 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>

          <p className="mb-12 text-lg text-muted-foreground">
            I&apos;m a Gameplay, Tools and Backend Engineer from Sweden who
            enjoys creating games. In my free time, I like to cook and
            make/learn music.
            <br />
            <br />
            I&apos;m always looking to learn new things and expand my knowledge
            in game development. I&apos;m fascinated by the constantly evolving
            technology in this field and I&apos;m always eager to stay on top of
            the latest trends and techniques.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/work">View Work</Link>
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
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 text-left">
                <div className="text-lg font-bold">{exp.year}</div>
                <div className="font-semibold">{exp.title}</div>
                <div className="mb-2 text-sm text-muted-foreground">
                  {exp.company}
                </div>
                <p>{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
