export interface ProjectSection {
  title: string;
  content: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  altText?: string;
}

export interface PortfolioProjectProps {
  title: string;
  description: string;
  trailerUrl: string;
  sections: ProjectSection[];
}
