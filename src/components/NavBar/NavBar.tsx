import Link from "next/link";
import { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar: FC = () => (
  <nav className="fixed left-0 top-0 w-full p-8 flex items-center justify-between z-10">
    <Link
      className="bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-transparent text-2xl font-bold uppercase cursor-pointer"
      href="/"
    >
      SR.
    </Link>
    <button>
      <AiOutlineMenu size={28} />
    </button>
  </nav>
);

export default NavBar;
