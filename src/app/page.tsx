import Image from "next/image";
import Vipertrace from "@public/projects/vipertrace/vipertrace.png";

export default function Home() {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <Image
        alt="Vipertrace"
        src={Vipertrace}
        quality={100}
        fill
        priority
        sizes="(max-width: 1080px) 100vw"
        style={{ objectFit: "cover" }}
      />
      <a
        className="font-bold text-5xl text-center underline z-10"
        href="https://samuelryberg.com/"
      >
        Samuel Ryberg Portfolio
      </a>
    </div>
  );
}
