import { FC } from "react";
import { Hero, About, Technologies } from "@/components";

import Vipertrace from "@public/projects/vipertrace/vipertrace.png";

const featuredProject = {
  projectName: "Vipertrace",
  poster: Vipertrace,
  url: "https://www.samuelryberg.com/projects/vipertrace",
};

const Home: FC = () => (
  <>
    <Hero {...featuredProject} />
    <About />
    <Technologies />
  </>
);

export default Home;
