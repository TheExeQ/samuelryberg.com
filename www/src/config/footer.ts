import { Footer } from "@/types";
import { meta } from "./meta";

export const footer: Footer = {
  socials: [
    {
      title: "Github",
      link: meta.accounts.github.repo,
    },
    {
      title: "LinkedIn",
      link: `https://www.linkedin.com/in/${meta.accounts.linkedin.username}`,
    },
    {
      title: "Instagram",
      link: `https://instagram.com/${meta.accounts.instagram.username}`,
    },
  ],
};
