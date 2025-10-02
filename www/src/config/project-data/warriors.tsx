import { PortfolioProjectProps } from "@/types";

export const Warriors: PortfolioProjectProps = {
  title: "Warriors",
  description: (
    <p>
      Jump into WARRIORS, a bloodily exciting online multiplayer game and
      prepare to smash, slice and trash your opponents in brutal rounds of
      mayhem, fighting your way to the top. With multiple game modes, a wide
      array of weapons, and no rules against backstabbing, it&apos;s survival of
      the fiercest!
    </p>
  ),
  trailerUrl: "https://www.youtube.com/embed/kiYflJp1yoA",
  additional: (
    <>
      <iframe
        src="https://store.steampowered.com/widget/3268430"
        width="100%"
        height="200"
      />
      <p className="mt-3 text-sm italic text-muted-foreground">
        Due to NDA obligations, I am unable to publicly detail my contributions.
      </p>
    </>
  ),
};
