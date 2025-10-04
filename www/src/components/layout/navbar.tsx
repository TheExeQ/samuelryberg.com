"use client";

import { useState } from "react";
import Link from "next/link";

import { nav } from "@/config/nav";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="relative mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
          >
          SR
          <span className="text-cyan-400">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background sm:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5" />
            </svg>
          </button>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground sm:flex">
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
        {isOpen ? (
          <div
            id="mobile-nav"
            className="absolute inset-x-0 top-[calc(100%+0.75rem)] origin-top rounded-lg border border-border/80 bg-background/95 p-4 text-sm font-medium text-muted-foreground shadow-lg backdrop-blur sm:hidden"
          >
            <nav className="flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="rounded-md px-3 py-2 transition-colors hover:bg-muted hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
