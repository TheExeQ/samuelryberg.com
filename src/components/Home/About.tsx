import React, { FC } from "react";

import { Alex_Brush } from "next/font/google";
const AlexBrush = Alex_Brush({ subsets: ["latin"], weight: "400" });

export const About: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className={AlexBrush.className}>
        <h1 className="-rotate-12 text-6xl">Samuel Ryberg</h1>
      </div>
    </div>
  );
};
