import { Technology } from "@/types";
import {
  SiCplusplus,
  SiDotnet,
  SiDocker,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPerforce,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
  SiUnrealengine,
  SiVercel,
} from "react-icons/si";

export const technologies = {
  "C++": {
    name: "C++",
    icon: SiCplusplus,
  },
  "C#": {
    name: "C#",
    icon: SiDotnet,
  },
  Unity: {
    name: "Unity Engine",
    href: "https://unity.com/",
    icon: SiUnity,
  },
  Unreal: {
    name: "Unreal Engine",
    href: "https://unrealengine.com/",
    icon: SiUnrealengine,
  },
  Perforce: {
    name: "Perforce",
    href: "https://www.perforce.com/",
    icon: SiPerforce,
  },
  Git: {
    name: "Git",
    href: "https://git-scm.com/",
    icon: SiGit,
  },
  GitHub: {
    name: "GitHub",
    href: "https://github.com/",
    icon: SiGithub,
  },
  Docker: {
    name: "Docker",
    href: "https://docker.com/",
    icon: SiDocker,
  },
  "Node.js": {
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: SiNodedotjs,
  },
  React: {
    name: "React",
    href: "https://react.dev/",
    icon: SiReact,
  },
  "Next.js": {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  Tailwind: {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  JavaScript: {
    name: "JavaScript",
    icon: SiJavascript,
  },
  TypeScript: {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  Vercel: {
    name: "Vercel",
    href: "https://vercel.com/",
    icon: SiVercel,
  },
} satisfies Record<string, Technology>;

export const technologyList = Object.values(technologies);
