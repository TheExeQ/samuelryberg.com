import Link from "next/link";

import { nav } from "@/config/nav";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-900/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight sm:text-2xl"
        >
          SR
          <span className="text-cyan-400">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-200">
          {nav.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
