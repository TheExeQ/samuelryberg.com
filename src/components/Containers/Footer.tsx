import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { footer } from "@/constants/config";

export const Footer: FC = () => {
  return (
    <footer className="relative bottom-0 w-full pb-10 pt-20" id="contact">
      <div className="mx-auto max-w-7xl">
        {/* background grid */}
        <div className="absolute bottom-0 left-0 min-h-96 w-full">
          <img
            src="/footer-grid.svg"
            alt="grid"
            className="h-full w-full opacity-50"
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © 2024 Samuel Ryberg
          </p>

          <div className="flex items-center gap-6 md:gap-3">
            {footer.socials.map((info, index) => (
              <Link key={index} href={info.link} target="_blank">
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border-2 bg-opacity-75 backdrop-blur-lg backdrop-filter">
                  <Image
                    src={info.icon}
                    alt={info.title}
                    width={20}
                    height={20}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
