import { notFound } from "next/navigation";

import BackgroundGrid from "@/components/background-grid";
import { PortfolioProject } from "@/components";
import { projectsData } from "@/config/projects";

type ProjectPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = await params;
  const projectData = projectsData[projectId];

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
}

export const generateStaticParams = () =>
  Object.keys(projectsData).map((projectId) => ({ projectId }));
