import Image from "next/image";
import Vipertrace from "@public/projects/vipertrace/vipertrace.png";

export default function Hero() {
  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden">
      <div className="pointer-events-none">
        <Image
          alt="Vipertrace"
          src={Vipertrace}
          quality={100}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="text-center z-10">
        <h1 className="font-bold text-5xl uppercase">Vipertrace</h1>
        <div className="p-4">
          <a
            className="hover:underline hover:font-semibold"
            href="https://samuelryberg.com/projects/vipertrace"
            target="_blank"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
