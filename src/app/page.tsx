import { FC } from "react";
import { Hero } from "@/components";

const Home: FC = () => (
  <main className="relative min-h-screen overflow-hidden">
    <div className="max-w-7xl">
      <Hero />
    </div>
  </main>
);

export default Home;
