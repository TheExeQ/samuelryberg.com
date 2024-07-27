import { FC } from "react";

import Link from "next/link";

import { MagicButton } from "@/components";
import { DoorClosed } from "lucide-react";

const NotFound: FC = () => (
  <main className="flex h-svh justify-center">
    <div className="flex flex-col items-center justify-center">
      <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-red-300">
        Error
      </h2>

      <div className="my-8">
        <h1 className="text-center text-6xl font-bold uppercase leading-snug tracking-wide lg:text-8xl">
          <span className="text-purple-300">Page</span> not found!
        </h1>
      </div>

      <Link href="/">
        <MagicButton
          title="Back to home"
          icon={<DoorClosed className="w-4" />}
        />
      </Link>
    </div>
  </main>
);

export default NotFound;
