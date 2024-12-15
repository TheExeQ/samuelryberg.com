import React, { FC } from "react";

import { PortfolioProject } from "@/components";
import { projectsData } from "@/constants/projects";

const ProjectSlug: FC<{ params: { projectId: string } }> = ({ params }) => {
  const projectData = projectsData[params.projectId];

  if (!projectData) {
    return <></>;
  }

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 flex h-auto w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />

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

export default ProjectSlug;
