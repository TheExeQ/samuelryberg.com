import React, { FC } from "react";

type Props = {
  title: string;
  onClick?: () => void;
};

export const MagicButton: FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none"
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
      </span>
    </button>
  );
};
