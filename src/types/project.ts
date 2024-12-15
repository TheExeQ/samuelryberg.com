import { StaticImageData } from "next/image";

export interface Project {
  id: number;
  href: string;
  title: string;
  image: StaticImageData;
  technologies: string[];
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
  additional?: JSX.Element;
  sections?: ProjectSection[];
}
