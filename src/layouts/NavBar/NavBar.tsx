"use client";

import Link from "next/link";
import { FC, useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { cn } from "@/lib/utils";

import { nav } from "@/constants/config";

const NavBar: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 w-full z-50">
      {menuOpen && (
        <nav className="fixed w-screen h-screen bg-black/80 flex justify-center items-center">
          <div>
            {nav.map((link, index) => (
              <Link
                onClick={() => setMenuOpen(false)}
                key={index}
                href={link.href}
                target={link.target || "_self"}
                className="text-5xl text-center mt-6 block duration-100 hover:underline motion-reduce:transition-none hover:text-gray-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className="p-8 flex items-center justify-between z-10 relative">
        <div>
          <Link
            className={cn(
              !menuOpen ? "block" : "hidden",
              "bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-transparent text-2xl font-bold uppercase cursor-pointer"
            )}
            href="/"
          >
            SR.
          </Link>
        </div>

        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <nav>
            <AiOutlineMenu size={28} />
          </nav>
        </button>
      </div>
    </header>
  );
};

export default NavBar;
