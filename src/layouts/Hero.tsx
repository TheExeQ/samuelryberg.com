import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface FeaturedProps {
  projectName: string;
  poster: StaticImageData;
  url: string;
}

const Hero: FC<FeaturedProps> = ({ projectName, poster, url }) => (
  <section className="relative h-screen flex justify-center items-center overflow-hidden">
    <div className="pointer-events-none">
      <Image
        alt={projectName}
        src={poster}
        quality={100}
        fill
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="text-center z-10">
      <h1 className="font-bold text-5xl uppercase">{projectName}</h1>
      <div className="p-4">
        <a
          className="hover:underline hover:font-semibold"
          href={url}
          target="_blank"
        >
          Read more
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
