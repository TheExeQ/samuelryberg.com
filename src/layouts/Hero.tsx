import Image, { StaticImageData } from "next/image";

interface Props {
  projectName: string;
  poster: StaticImageData;
  url: string;
}

export default function Hero({ projectName, poster, url }: Props) {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
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
    </div>
  );
}
