import { PortfolioProjectProps } from "@/types";

export const Spite: PortfolioProjectProps = {
  title: "Spite: The Yellow Plague",
  description: (
    <p>
      My sixth project at The Game Assembly was a dungeon crawler called
      &quot;Spite: The Yellow Plague&quot;. <br />
      <br />
      The game was about a witch hunter who had been recruited by a village to
      end the yellow plague that was spreading in the swamp next to the village.
      On his quest to protect the village, the hunter meets a creature that
      lives in the swamp, which offers to help him by giving him abilities in
      return for parts of his soul. <br />
      <br />
      What made this project special was that it was the first time we built our
      own game engine from scratch. The engine was named &quot;Volt&quot; and
      creating it was a challenging task, but also very fun and exciting. We had
      to think about every aspect of game development, from the physics engine
      to the rendering pipeline.
    </p>
  ),
  trailerUrl: "https://www.youtube.com/embed/g8_7V2Aum3k",
  sections: [
    {
      description: "Player Navigation",
      mediaSrc: "https://www.youtube.com/embed/xWkqRO_yUD0",
    },
    {
      description: "Enemy Navigation",
      mediaSrc: "https://www.youtube.com/embed/Uy6N9_Vh-Qk",
    },
    {
      description: "NavMesh Tool",
      mediaSrc: "https://www.youtube.com/embed/P-GT45HNbBY",
    },
  ],
};
