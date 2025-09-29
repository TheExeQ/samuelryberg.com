import Link from "next/link";

import { nav } from "@/config/nav";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          SR
          <span className="text-cyan-400">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {nav.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
