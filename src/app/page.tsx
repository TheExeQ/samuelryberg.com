import { FC } from "react";
import { Hero, About, Awards } from "@/components";

const Home: FC = () => (
  <main className="h-full">
    <Hero />
    <div className="mx-auto h-full w-full max-w-7xl">
      <About />
      <Awards />
      {/* About */}
      {/* Experience */}
      {/* Projects */}
      {/* Contact */}
    </div>
  </main>
);

export default Home;
