import { FC } from "react";

const Home: FC = () => (
  <main className="relative h-screen">
    <div className="absolute inset-0 flex h-auto w-full items-center justify-center bg-grid-black/[0.05] dark:bg-grid-white/[0.05]" />
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />
  </main>
);

export default Home;
