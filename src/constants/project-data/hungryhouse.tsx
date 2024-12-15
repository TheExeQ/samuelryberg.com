import { PortfolioProjectProps } from "@/types";

export const HungryHouse: PortfolioProjectProps = {
  title: "Hungry House",
  description: (
    <p>
      During my second project I worked on a mobile puzzle game called Hungry
      House. The game&apos;s objective was to move a group of frogs between
      platforms, in order to feed a hungry living house creature. <br />
      <br />
      What made the game challenging was that the creature couldn&apos;t be
      overfed or underfed, so players had to think strategically about how to
      move the frogs in order to get the right amount of food to the creature.{" "}
      <br />
      <br />
      As the game progressed, it became even more challenging as obstacles were
      introduced. These obstacles required players to carefully consider the
      movements of the frogs, in order to successfully navigate the level and
      keep the creature happy. <br />
      <br />
    </p>
  ),
  trailerUrl: "https://www.youtube.com/embed/pXnV-tQai3s",
  additional: (
    <div>
      <h2 className="pb-2 text-2xl font-bold">Nominations & Awards</h2>
      <ul className="list-inside list-disc">
        <li>
          <a
            className="text-blue-400 underline"
            href="https://www.gameawards.se/2022-nominees"
            target="_blank"
          >
            Mobile Game of the Year and Best Art at the Swedish Game Awards 2022
          </a>
        </li>
        <li>
          <a
            className="text-blue-400 underline"
            href="https://www.therookies.co/entries/16448"
            target="_blank"
          >
            Mobile Game of the Year - People&apos;s Choice at The Rookies Awards
            2022
          </a>
        </li>
      </ul>
    </div>
  ),
  sections: [
    {
      description: "Creature Animations",
      mediaSrc: "https://www.youtube.com/embed/uvDD25SQ_r4"
    },
    {
      description: "Main Menu",
      mediaSrc: "https://www.youtube.com/embed/quxzQwJaG_M"
    },
    {
      description: "Level Select",
      mediaSrc: "https://www.youtube.com/embed/etTgkPEaUvY"
    }
  ]
};
