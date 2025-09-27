import { FC } from "react";
import { notFound } from "next/navigation";

import BackgroundGrid from "@/components/background-grid";
import { PortfolioProject } from "@/components";
import { projectsData } from "@/config/projects";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

const ProjectPage: FC<ProjectPageProps> = ({ params }) => {
  const projectData = projectsData[params.projectId];

  if (!projectData) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundGrid />

      <PortfolioProject
        title={projectData.title}
        description={projectData.description}
        additional={projectData.additional}
        trailerUrl={projectData.trailerUrl}
        sections={projectData.sections}
      />
    </div>
  );
};

export const generateStaticParams = () => {
  Object.keys(projectsData).map((projectId) => ({ projectId }));
};

export default ProjectPage;
