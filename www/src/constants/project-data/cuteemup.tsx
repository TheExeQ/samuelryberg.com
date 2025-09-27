import { PortfolioProjectProps } from "@/types";

export const CuteEmUp: PortfolioProjectProps = {
  title: "Cute 'em up",
  description: (
    <p>
      My third project at The Game Assembly was both exciting and challenging.
      It was the first game I developed using the school&apos;s in-house game
      engine, which made the project more difficult than my previous ones.{" "}
      <br />
      <br />
      The game was called Cute Em Up, and it was a Shoot Em Up game where
      players had to progress through levels while shooting robots engineered by
      an evil scientist. <br />
      <br />
      One of the biggest challenges with the Cute Em Up project was that it was
      the first game we developed in C++. This meant that we had to worry about
      memory management and other complexities that we didn&apos;t have to think
      about in our previous projects, which were developed using C#.
    </p>
  ),
  trailerUrl: "https://www.youtube.com/embed/332anY3R0WI",
  sections: [
    {
      description: "Boss (Phase One)",
      mediaSrc: "https://www.youtube.com/embed/JjI7lcCLCxs",
    },
    {
      description: "Shink Ability & Boss (Phase Two)",
      mediaSrc: "https://www.youtube.com/embed/HAkhXtlDyXA",
    },
    {
      description: "Bullet Hell",
      mediaSrc: "https://www.youtube.com/embed/ZKxCr1c5rSw",
    },
  ],
};
