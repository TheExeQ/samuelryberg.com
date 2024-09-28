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
  sections: ProjectSection[];
}
