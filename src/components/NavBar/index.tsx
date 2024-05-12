import Link from "next/link";

const NavBar = () => (
  <div className="fixed w-full p-8 flex items-center justify-between z-10">
    <a
      className="bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-transparent text-2xl font-bold uppercase"
      href="https://samuelryberg.com/"
    >
      SR
    </a>
    <div className="flex items-center">
      <Link
        className="mx-2 text-l uppercase hover:underline hover:font-semibold"
        href="/projects"
      >
        Projects
      </Link>
      <Link
        className="mx-2 text-l uppercase hover:underline hover:font-semibold"
        href="/about"
      >
        About
      </Link>
      <Link
        className="mx-2 text-l uppercase hover:underline hover:font-semibold"
        href="/contact"
      >
        Contact
      </Link>
    </div>
  </div>
);

export default NavBar;
