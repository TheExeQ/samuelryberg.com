import React, { FC } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const experiences = [
  {
    year: "2024-Present",
    title: "Associate Programmer",
    company: "Flashbulb Games",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit ducimus adipisci neque ab voluptatibus quisquam, doloribus obcaecati reiciendis fuga porro commodi nam illo omnis voluptas et accusantium cupiditate aliquam.",
  },
  {
    year: "2023-2024",
    title: "Programmer Intern",
    company: "Flashbulb Games",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit ducimus adipisci neque ab voluptatibus quisquam, doloribus obcaecati reiciendis fuga porro commodi nam illo omnis voluptas et accusantium cupiditate aliquam.",
  },
  {
    year: "2021-2024",
    title: "Game Programming Student",
    company: "The Game Assembly",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit ducimus adipisci neque ab voluptatibus quisquam, doloribus obcaecati reiciendis fuga porro commodi nam illo omnis voluptas et accusantium cupiditate aliquam.",
  },
  {
    year: "2017-2020",
    title: "High School Student",
    company: "LBS Kreativa Gymnasiet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit ducimus adipisci neque ab voluptatibus quisquam, doloribus obcaecati reiciendis fuga porro commodi nam illo omnis voluptas et accusantium cupiditate aliquam.",
  },
];

const technologies = [
  { name: "Unity", url: "https://unity.com/" },
  { name: "Unreal Engine", url: "https://www.unrealengine.com/" },
  { name: "C#", url: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
  { name: "C++", url: "https://cplusplus.com/" },
  { name: "Perforce", url: "https://www.perforce.com/" },
  { name: "Git", url: "https://git-scm.com/" },
  { name: "Node.js", url: "https://nodejs.org/" },
  { name: "Next.js", url: "https://nextjs.org/" },
  { name: "Vercel", url: "https://vercel.com/" },
  { name: "TypeScript", url: "https://www.typescriptlang.org/" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
  { name: "Docker", url: "https://www.docker.com/" },
];

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

          <div className="mb-12 flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/yourusername">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourusername">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="mailto:samuel.ryberg@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>

          <h3 className="mb-6 text-2xl font-semibold">Experience</h3>
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

          <h3 className="mb-6 mt-12 text-2xl font-semibold">Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Button key={index} variant="outline" asChild>
                <Link href={tech.url} target="_blank" rel="noopener noreferrer">
                  {tech.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
