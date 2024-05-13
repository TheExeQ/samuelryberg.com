import Link from "next/link";
import { meta, footer } from "@/constants/config";

const Footer = () => (
  <footer className="mx-auto w-full px-4 py-10 pt-10 font-sans md:px-8 lg:px-16">
    <div className="grid grid-cols-2 gap-9 md:grid-cols-6">
      <div className="col-span-3 flex flex-col justify-center">
        <Link href="/">
          <span className="flex cursor-pointer items-center text-2xl font-semibold">
            {meta.author}
          </span>
        </Link>

        <p className="my-3 text-neutral-300">
          Created using{" "}
          <Link href="https://nextjs.org" target="_blank">
            Next.js
          </Link>
        </p>
      </div>
      {footer.categories.map((category, index) => (
        <div key={index} className="col-span-1 text-neutral-300">
          <p className="mt-3 font-semibold text-white sm:mb-3 sm:mt-0 ">
            {category.title}
          </p>
          <div>
            {category.links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target={link.target || "_self"}
                className="mt-2 block duration-100 hover:underline motion-reduce:transition-none hover:text-gray-300"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mt-5 flex justify-end text-center text-neutral-300">
      <p className="font-semibold">
        &copy; 2023 - {new Date().getFullYear()} Samuel Ryberg, All rights
        reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
