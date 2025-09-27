import { FC } from "react";
import { cn } from "@/lib/utils";

const BackgroundGrid: FC = () => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 -z-10",
      "[background-size:35px_35px]",
      "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
      "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
    )}
  />
);

export default BackgroundGrid;
