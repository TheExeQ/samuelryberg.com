import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
      <div className="flex flex-wrap gap-6">
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              className="block w-40 transition-transform hover:-translate-y-1"
              href="https://www.gameawards.se/2022-nominees"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mobile Game of the Year and Best Art nominations at the Swedish Game Awards 2022"
            >
              <img
                src="/awards/sga-finalist.webp"
                alt="Swedish Game Awards 2022 finalist badge"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Swedish Game Awards · Mobile GOTY & Best Art finalist</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              className="block w-40 transition-transform hover:-translate-y-1"
              href="https://www.therookies.co/entries/16448"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mobile Game of the Year finalist at The Rookies Awards 2022"
            >
              <img
                src="/awards/rookies-finalist.webp"
                alt="The Rookies Awards 2022 finalist badge"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>The Rookies · Mobile GOTY finalist</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              className="block w-40 transition-transform hover:-translate-y-1"
              href="https://www.therookies.co/entries/16448"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Mobile Game of the Year People's Choice winner at The Rookies Awards 2022"
            >
              <img
                src="/awards/rookies-goty.webp"
                alt="The Rookies Awards 2022 Mobile Game of the Year badge"
                className="h-full w-full object-contain"
                loading="lazy"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>The Rookies · Mobile GOTY People&apos;s Choice</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
  sections: [
    {
      description: "Creature Animations",
      mediaSrc: "https://www.youtube.com/embed/uvDD25SQ_r4",
    },
    {
      description: "Main Menu",
      mediaSrc: "https://www.youtube.com/embed/quxzQwJaG_M",
    },
    {
      description: "Level Select",
      mediaSrc: "https://www.youtube.com/embed/etTgkPEaUvY",
    },
  ],
};
