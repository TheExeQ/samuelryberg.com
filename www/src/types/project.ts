import { StaticImageData } from "next/image";

import type { JSX } from "react";

export interface Project {
  href: string;
  title: string;
  image: StaticImageData;
  technologies: string[];
  summary?: string;
  tags?: string[];
  category?: string;
  featured?: boolean;
}

export interface ProjectsProps {
  title: string;
  projects: Project[];
}

export interface ProjectCarouselProps {
  tabs: ProjectSection[];
}

export interface ProjectSection {
  description: string;
  mediaSrc: string;
}

export interface PortfolioProjectProps {
  title: string;
  description: JSX.Element;
  trailerUrl: string;
  technologies?: string[];
  additional?: JSX.Element;
  sections?: ProjectSection[];
}
