import React, { FC } from "react";
import Link from "next/link";

import { MagicButton } from "@/components";
import { footer } from "@/constants/config";

import { Navigation } from "lucide-react";

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

        <div className="mx-4 flex flex-col items-center">
          <h1 className="lg:max-w-[45vw]">
            Ready to take <span className="text-purple-300">your</span> digital
            presence to the next level?
          </h1>
          <p className="my-5 text-center md:mt-10">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>
          <a href="mailto:samuel.ryberg@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<Navigation className="w-4" />}
              position="right"
            />
          </a>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © 2024 Samuel Ryberg
          </p>

          <div className="flex items-center gap-6 md:gap-3">
            {footer.socials.map((info, index) => (
              <Link href={info.link} target="_blank">
                <div
                  key={index}
                  className="saturate-180 bg-black-200 border-black-300 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter"
                >
                  <img
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
