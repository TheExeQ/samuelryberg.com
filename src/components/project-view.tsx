import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { ProjectsProps } from "@/types";

import { SiUnity, SiUnrealengine } from "react-icons/si";

const technologyIcons: { [key: string]: JSX.Element } = {
  "Unity Engine": <SiUnity className="h-4 w-4" />,
  "Unreal Engine": <SiUnrealengine className="h-4 w-4" />,
};

export const ProjectView: FC<ProjectsProps> = ({ title, projects }) => {
  return <></>;
};

// export const ProjectView: FC<ProjectsProps> = ({ title, projects }) => {
//   return (
//     <div className="pt-12">
//       <h1 className="mb-8 text-4xl font-bold">{title}</h1>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project) => (
//           <Card key={project.id} className="overflow-hidden">
//             <Link href={`/work/${project.href}`}>
//               <div className="relative pb-[56.25%]">
//                 <Image
//                   src={project.image}
//                   alt={`${project.title} wallpaper`}
//                   fill
//                   style={{ objectFit: "cover" }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <h2 className="mb-2 text-xl font-semibold text-white">
//                     {project.title}
//                   </h2>
//                   <div className="flex space-x-2">
//                     {project.technologies.map((tech) => (
//                       <Tooltip key={tech}>
//                         <TooltipTrigger asChild>
//                           <Badge
//                             variant="secondary"
//                             className="rounded-full p-1"
//                           >
//                             {technologyIcons[tech]}
//                           </Badge>
//                         </TooltipTrigger>
//                         <TooltipContent>
//                           <p>{tech}</p>
//                         </TooltipContent>
//                       </Tooltip>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
