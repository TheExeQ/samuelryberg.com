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
    year: "Aug 2023 - Dec 2024",
    title: "Associate Programmer",
    company: "Flashbulb Games",
    description: (
      <ul className="list-disc space-y-2 px-4">
        <li>
          Gained experience working in a professional development environment.
        </li>
        <li>
          Contributed to the development of{" "}
          <span className="font-bold">tools</span>, enhancing workflow
          efficiency for the team.
        </li>
        <li>
          Worked on <span className="font-bold">UI implementation</span>,
          improving user experience and accessibility.
        </li>
        <li>
          Assisted in implementing{" "}
          <span className="font-bold">gameplay features</span>, applying my
          programming skills in real-world projects.
        </li>
      </ul>
    ),
  },
  {
    year: "Aug 2021 - Apr 2024",
    title: "Game Programming Student",
    company: "The Game Assembly",
    description: (
      <ul className="list-disc space-y-2 px-4">
        <li>
          Created a custom game engine in <span className="font-bold">C++</span>{" "}
          for hands-on experience in low-level programming.
        </li>
        <li>
          Learned advanced physics for realistic movement and rendering
          techniques for improved visuals.
        </li>
        <li>
          Implemented <span className="font-bold">AI</span> for NPC behavior and{" "}
          <span className="font-bold">network programming</span> for multiplayer
          capabilities.
        </li>
        <li>
          Developed complete game projects, enhancing skills in project
          management and collaboration.
        </li>
      </ul>
    ),
  },
  {
    year: "Aug 2017 - Jun 2020",
    title: "High School Student",
    company: "LBS Kreativa Gymnasiet",
    description: (
      <ul className="list-disc space-y-2 px-4">
        <li>
          Developed skills in <span className="font-bold">C#</span> and{" "}
          <span className="font-bold">Unity</span>
        </li>
        <li>Learned core game design principles</li>
      </ul>
    ),
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
