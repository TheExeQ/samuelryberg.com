import React, { FC } from "react";
import Link from "next/link";

import { footer, nav } from "@/constants/config";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-neutral-100 bg-background px-8 py-20 dark:border-white/[0.1]">
      <div className="mx-auto flex max-w-[80rem] flex-col items-start justify-between px-6 text-neutral-500 sm:flex-row">
        <div>
          <div className="mb-4 mr-4 md:flex">
            <div className="flex items-center justify-start space-x-2 text-2xl font-bold text-black dark:text-white">
              <h1>Samuel Ryberg</h1>
            </div>
          </div>
          <div>Software Engineer</div>
          <div className="mt-2">
            &copy; {currentYear} Samuel Ryberg, All rights reserved.
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 items-start gap-10 text-foreground/60 sm:mt-0">
          {/* Website Navigation */}
          <div className="mt-4 flex flex-col justify-center space-y-4">
            {nav.slice(0, 5).map((navItem, index) => (
              <Link
                key={index}
                href={navItem.link}
                className="hover:text-foreground/80"
              >
                {navItem.name}
              </Link>
            ))}
          </div>
          {/* Social Links */}
          <div className="mt-4 flex flex-col justify-center space-y-4">
            {footer.socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="hover:text-foreground/80"
              >
                {social.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
