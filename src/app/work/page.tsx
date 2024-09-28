import React, { FC } from "react";

import { ProjectView } from "@/components";
import { academicProjects, professionalProjects } from "@/constants/projects";

const Work: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 pt-32">
      <ProjectView title="Professional" projects={professionalProjects} />
      <ProjectView title="Academic" projects={academicProjects} />
    </div>
  );
};

export default Work;
