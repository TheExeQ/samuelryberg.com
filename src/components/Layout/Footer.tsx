import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="bg-background border-t border-neutral-100 px-8 py-20 dark:border-white/[0.1]">
      <div className="text-foreground mx-auto flex max-w-[80rem] items-center justify-between px-6">
        <p>Demo Footer</p>
        <div className="grid grid-cols-3 items-start gap-10">
          <div className="mt-4 flex flex-col justify-center space-y-4">
            <p>Home</p>
            <p>Work</p>
            <p>Blog</p>
            <p>Contact</p>
          </div>
          <div className="mt-4 flex flex-col justify-center space-y-4">
            <p>LinkedIn</p>
            <p>Instagram</p>
            <p>Discord</p>
          </div>
          <div className="mt-4 flex flex-col justify-center space-y-4">
            <p>Youtube</p>
            <p>Twitch</p>
            <p>Music</p>
          </div>
        </div>
      </div>
    </div>
  );
};
