export interface NavLink {
  title: string;
  href: string;
  target?: string;
}

export interface FooterCategory {
  title: string;
  links: Array<NavLink>;
}

export interface Footer {
  categories: Array<FooterCategory>;
}
