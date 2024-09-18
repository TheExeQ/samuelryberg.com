import { FC } from "react";

import { ModeToggle } from "@/components";

const DarkMode: FC = () => (
  <div className="flex h-screen items-center justify-center">
    <ModeToggle />
  </div>
);

export default DarkMode;
