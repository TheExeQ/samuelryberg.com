import { FC } from "react";
import { Hero } from "@/components";

const Home: FC = () => (
  <main className="relative overflow-hidden min-h-screen">
    <div className="max-w-7xl">
      <Hero />
    </div>
  </main>
);

export default Home;
