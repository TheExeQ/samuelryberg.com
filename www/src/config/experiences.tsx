import { Experience } from "@/types";

export const experiences: Array<Experience> = [
  {
    year: "Apr 2025 - Jul 2025",
    title: "Game Programmer",
    company: "Eddaheim",
    description: (
      <ul className="list-disc space-y-2 px-4">
        <li>
          Learned <span className="font-bold">Unreal Engine</span>,
          prototyping gameplay systems and team workflows.
        </li>
        <li>
          Set up and maintained <span className="font-bold">Perforce</span>{" "}
          depots, ensuring reliable version control for the team.
        </li>
        <li>
          Managed the project build and deployment pipeline for{" "}
          <span className="font-bold">Steam</span>, streamlining releases.
        </li>
      </ul>
    ),
  },
  {
    year: "Aug 2023 - Mar 2025",
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
