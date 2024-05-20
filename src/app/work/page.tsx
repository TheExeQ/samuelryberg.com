import { FC } from "react";

import { projects } from "@/constants/projects";

const Work: FC = () => {
  const sortedProjects = projects.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="max-w-4xl mt-24 mx-auto grid gap-2">
      {sortedProjects.map((project, index) => (
        <div className="grid grid-cols-2 gap-2" key={index}>
          <div className="p-4 text-center bg-secondary rounded-md">
            {project.name}
          </div>
          <div className="p-4 bg-secondary rounded-md">
            {project.studio} ({project.date.getFullYear()})
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
