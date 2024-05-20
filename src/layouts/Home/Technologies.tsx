import { FC } from "react";

import { technologies } from "@/constants/config";

const Technologies: FC = () => {
  return (
    <section className="bg-secondary py-4">
      <div className="m-auto max-w-2xl">
        <h2 className="text-5xl text-center pb-4">Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="text-center py-2 bg-background rounded-md"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
