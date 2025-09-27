import React, { FC } from "react";

import { PortfolioProject } from "@/components";
import { projectsData } from "@/constants/projects";
import BackgroundGrid from "@/components/background-grid";

const ProjectSlug: FC<{ params: Promise<{ projectId: string }> }> = async ({
  params,
}) => {
  const { projectId } = await params;
  const projectData = projectsData[projectId];

  if (!projectData) {
    return <></>;
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

export default ProjectSlug;
