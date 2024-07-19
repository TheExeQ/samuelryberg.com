import { FC } from "react";
import { Hero } from "@/components";

const Home: FC = () => (
  <main className="relative min-h-screen overflow-hidden">
    <div className="mx-auto max-w-7xl">
      <Hero />
      <div className="h-screen"></div>
    </div>
  </main>
);

export default Home;
