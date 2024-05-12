import { FC } from "react";

const NotFound: FC = () => (
  <div className="flex min-h-screen flex-1 flex-col items-center justify-center px-8">
    <div className="max-w-4xl rounded-md border border-neutral-200 px-9 py-6 shadow-2xl duration-200 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617]">
      <h1 className="bg-gradient-to-r from-purple-500 to-pink-200 bg-clip-text text-transparent text-3xl text-center font-semibold">
        404 - Page not found
      </h1>
      <p className="mt-3 text-center text-neutral-800 dark:text-neutral-200">
        We're sorry — we can't find the page you're looking for.
      </p>
      <a href="/" className="underline mx-auto">
        Go home
      </a>
    </div>
  </div>
);

export default NotFound;
