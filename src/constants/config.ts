import { Meta, Footer, NavLink, Technology, Experience } from "@/types";

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

export const experiences: Array<Experience> = [
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
    name: "Unreal Engine",
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
    name: "Docker",
    href: "https://docker.com/",
  },
  {
    name: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    name: "React",
    href: "https://react.dev/",
  },
  {
    name: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
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
    name: "Vercel",
    href: "https://vercel.com/",
  },
];

export const nav: Array<NavLink> = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  // {
  //   title: "Music",
  //   href: "/music",
  // },
  // {
  //   name: "Blog",
  //   link: "/blog",
  // },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  // {
  //   name: "Mode",
  //   link: "/dark",
  // },
];

export const footer: Footer = {
  socials: [
    {
      title: "Github",
      link: meta.accounts.github.repo,
    },
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/${meta.accounts.linkedin.username}`,
    },
    {
      title: "Instagram",
      link: `https://instagram.com/${meta.accounts.instagram.username}`,
    },
  ],
};
