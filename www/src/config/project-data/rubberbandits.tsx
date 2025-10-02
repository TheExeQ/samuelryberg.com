import { PortfolioProjectProps } from "@/types";

export const RubberBandits: PortfolioProjectProps = {
  title: "Rubber Bandits",
  description: (
    <p>
      Rubber Bandits is a criminally fun multiplayer party game for up to 4
      players. With 8 action-packed game modes, players steal, brawl, and dash
      to the finish line with the most loot to win!
    </p>
  ),
  trailerUrl: "https://www.youtube.com/embed/fEosWC6hAb4",
  additional: (
    <>
      <iframe
        src="https://store.steampowered.com/widget/1206610"
        width="100%"
        height="200"
      />
      <p className="mt-3 text-sm italic text-muted-foreground">
        Due to NDA obligations, I am unable to publicly detail my contributions.
      </p>
    </>
  ),
};
