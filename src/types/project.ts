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

export interface ProjectSection {
  title: string;
  content: JSX.Element;
  mediaType: "image" | "video";
  mediaSrc: string;
  altText?: string;
}

export interface PortfolioProjectProps {
  title: string;
  description: JSX.Element;
  trailerUrl: string;
  additional?: JSX.Element;
  sections?: ProjectSection[];
}
