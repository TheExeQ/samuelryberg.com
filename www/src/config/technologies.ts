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

export const technologies: Array<Technology> = [
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "C#",
    icon: SiDotnet,
  },
  {
    name: "Unity",
    href: "https://unity.com/",
    icon: SiUnity,
  },
  {
    name: "Unreal Engine",
    href: "https://unrealengine.com/",
    icon: SiUnrealengine,
  },
  {
    name: "Perforce",
    href: "https://www.perforce.com/",
    icon: SiPerforce,
  },
  {
    name: "Git",
    href: "https://git-scm.com/",
    icon: SiGit,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: SiGithub,
  },
  {
    name: "Docker",
    href: "https://docker.com/",
    icon: SiDocker,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
    icon: SiNodedotjs,
  },
  {
    name: "React",
    href: "https://react.dev/",
    icon: SiReact,
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: SiTailwindcss,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    name: "Vercel",
    href: "https://vercel.com/",
    icon: SiVercel,
  },
];
