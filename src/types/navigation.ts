import type { JSX } from "react";
export interface NavLink {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export interface FooterSocial {
  title: string;
  link: string;
}

export interface Footer {
  socials: Array<FooterSocial>;
}
