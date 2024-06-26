import { Meta, Footer, NavLink, Technology } from "@/types";

export const meta: Meta = {
  title: "Samuel Ryberg | Official Website",
  author: "Samuel Ryberg",
  description: "Explore Samuel Ryberg's projects, skills, and experience.",
  keywords: [
    "Samuel Ryberg",
    "Game",
    "Developer",
    "Programmer",
    "Engineer",
    "Portfolio",
    "C++",
    "C#",
    "Unity",
    "Unreal Engine",
  ],
  accounts: {
    github: {
      username: "ExeQ",
      repo: "https://github.com/TheExeQ",
    },
    linkedin: {
      username: "samuelryberg",
    },
    discord: {
      username: "@exeq",
    },
    instagram: {
      username: "samuelryberg",
    },
  },
};

export const header = {
  title: "Samuel Ryberg",
  subtitle: "Software Engineer",
  description: meta.description,
};

export const technologies: Array<Technology> = [
  {
    name: "C++",
  },
  {
    name: "C#",
  },
  {
    name: "Unity",
    href: "https://unity.com/",
  },
  {
    name: "Unreal",
    href: "https://unrealengine.com/",
  },
  {
    name: "Perforce",
    href: "https://www.perforce.com/",
  },
  {
    name: "Git",
    href: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    href: "https://github.com/",
  },
  {
    name: "NodeJS",
    href: "https://nodejs.org/",
  },
  {
    name: "React",
    href: "https://react.dev/",
  },
  {
    name: "NextJS",
    href: "https://nextjs.org/",
  },
  {
    name: "TailwindCSS",
    href: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    name: "Docker",
    href: "https://docker.com/",
  },
  {
    name: "Vercel",
    href: "https://vercel.com/",
  },
];

export const nav: Array<NavLink> = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "My work",
    href: "/work",
  },
  // {
  //   title: "Music",
  //   href: "/music",
  // },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const footer: Footer = {
  categories: [
    {
      title: "Important Links",
      links: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "My work",
          href: "/work",
        },
        // {
        //   title: "Music",
        //   href: "/music",
        // },
        {
          title: "Blog",
          href: "/blog",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          title: "Github",
          href: meta.accounts.github.repo,
          target: "_blank",
        },
        {
          title: "LinkedIn",
          href: `https://www.linkedin.com/in/${meta.accounts.linkedin.username}`,
          target: "_blank",
        },
        {
          title: "Instagram",
          href: `https://instagram.com/${meta.accounts.instagram.username}`,
          target: "_blank",
        },
      ],
    },
    {
      title: "Other",
      links: [
        {
          title: "About Me",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
        },
      ],
    },
  ],
};
