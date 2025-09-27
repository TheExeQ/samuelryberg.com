import { PortfolioProjectProps } from "@/types";

export const BosMorning: PortfolioProjectProps = {
  title: "Bo's Morning",
  description: (
    <p>
      My fifth project at The Game Assembly was an adventure top-down game
      called &quot;Bo&apos;s Morning.&quot; The game revolved around a farmer
      named Bo, who had to save his farm from a plague that had caused all
      animals and plants in the area to become evil.
      <br />
      <br />
      In order to save his farm, Bo had to eliminate the infectious flower that
      was causing the plague. The game design involved a lot of creativity, as
      we had to think about how to create an immersive world for the player to
      explore
    </p>
  ),
  trailerUrl: "https://www.youtube.com/embed/kqHU9M_ITfA",
  sections: [
    {
      description: "Rabbit Enemy",
      mediaSrc: "https://www.youtube.com/embed/lDRKc5rsBpk",
    },
    {
      description: "Hedgehog Enemy",
      mediaSrc: "https://www.youtube.com/embed/z9oXHQRuVUw",
    },
    {
      description: "Bird Enemy",
      mediaSrc: "https://www.youtube.com/embed/zvYMHCj5zBE",
    },
    {
      description: "Frog Enemy",
      mediaSrc: "https://www.youtube.com/embed/y-tYkYYEvYQ",
    },
  ],
};
