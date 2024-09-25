import React, { FC } from "react";

import { PortfolioProject } from "@/components";
import { PortfolioProjectProps } from "@/types";

const placeholderData: PortfolioProjectProps = {
  title: "Vipertrace",
  description: `My eighth project at The Game Assembly was another game built on the same engine "Volt" we created in our sixth project. Since we already had most of the functionality required to create games, we were able to get started a lot faster this time around.

With a solid engine to work with and 8 weeks of full-time work ahead of us, we were prepared for much more this time around. The game we created was a first-person shooter game called "Vipertrace" which was referenced by Call of Duty: Black Ops - Zombies.

In this futuristic sci-fi adventure, players step into the boots of a resilient protagonist in the bustling metropolis of Tokyo. As the city grapples with an invasion of velociraptor aliens, gamers must harness an impressive arsenal of high-tech weaponry to combat the extraterrestrial threat and ascend to newfound power. Navigate the neon-lit streets, engage in intense battles, and strategically advance through the alien-infested terrain.`,
  trailerUrl: "https://www.youtube.com/embed/HKU5GvgAssY",
  sections: [
    {
      title: "Recast/Detour Navigation",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloremque dolorum nihil magni repellat quo, dolores harum blanditiis temporibus maiores iste, consequatur architecto excepturi quis? Rerum nemo officiis dolorem ut!",
      mediaType: "video",
      mediaSrc: "https://www.youtube.com/embed/OVYgWwEUw1o",
    },
    {
      title: "Weapon System",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloremque dolorum nihil magni repellat quo, dolores harum blanditiis temporibus maiores iste, consequatur architecto excepturi quis? Rerum nemo officiis dolorem ut!",
      mediaType: "video",
      mediaSrc: "https://www.youtube.com/embed/OuYq4GHIHKY",
    },
    {
      title: "Mystery Box",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloremque dolorum nihil magni repellat quo, dolores harum blanditiis temporibus maiores iste, consequatur architecto excepturi quis? Rerum nemo officiis dolorem ut!",
      mediaType: "video",
      mediaSrc: "https://www.youtube.com/embed/LGPHe8XiDEU",
    },
    {
      title: "Placeholder",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt doloremque dolorum nihil magni repellat quo, dolores harum blanditiis temporibus maiores iste, consequatur architecto excepturi quis? Rerum nemo officiis dolorem ut!",
      mediaType: "image",
      mediaSrc: "/placeholder.svg",
      altText: "Placeholder",
    },
  ],
};

const Project: FC = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 flex h-auto w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />

      <PortfolioProject
        title={placeholderData.title}
        description={placeholderData.description}
        trailerUrl={placeholderData.trailerUrl}
        sections={placeholderData.sections}
      />
    </div>
  );
};

export default Project;
