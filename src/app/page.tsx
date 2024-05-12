import { FC } from "react";
import { Hero } from "@/layouts";
import Vipertrace from "@public/projects/vipertrace/vipertrace.png";

const featuredProject = {
  projectName: "Vipertrace",
  poster: Vipertrace,
  url: "https://www.samuelryberg.com/projects/vipertrace",
};

const Home: FC = () => (
  <>
    <Hero {...featuredProject} />
  </>
);

export default Home;
