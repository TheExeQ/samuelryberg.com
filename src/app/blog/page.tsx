import React, { FC } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

import { parseISO } from "@/lib/utils";

const Blog: FC = () => {
  const posts = [
    {
      slug: "test",
      title: "Why do we use it?",
      publishedAt: "2024-12-23",
      summary:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      slug: "test2",
      title: "Where does it come from?",
      publishedAt: "2024-12-25",
      summary:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
    {
      slug: "test3",
      title: "Where can I get some?",
      publishedAt: "2024-12-26",
      summary:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    },
  ];

  return (
    <div className="mx-auto max-w-[800px] px-8">
      <div className="mb-16 mt-32 flex flex-col items-start justify-center">
        <h2 className="mb-4 text-3xl font-bold">Blog</h2>
        <p className="mb-6 text-lg text-muted-foreground">
          {" "}
          A blog about technology, programming, and various intriguing topics.
          Here I share my experiences, projects and opinions.
        </p>

        <h2 className="text-md font-bold">All Posts</h2>
        {!posts.length && <p className="mb-4 text-red-400">No posts found!</p>}
        <ol className="relative mt-4 border-l border-neutral-200 dark:border-neutral-800">
          {posts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              className="w-full"
              key={`/blog/${post.slug}`}
            >
              <li className="-mt-3 mb-10 ml-6 rounded-2xl border px-6 py-3 duration-200 hover:bg-neutral-200/50 motion-reduce:transition-none dark:border-neutral-800 dark:bg-[#161617] dark:hover:border-neutral-700 dark:hover:bg-[#202021]">
                <span className="absolute -left-3 flex size-6 items-center justify-center rounded-full bg-black/10 ring-8 ring-white backdrop-blur dark:bg-white/10 dark:ring-[#101110]">
                  <Calendar className="h-3 w-3 text-neutral-800 dark:text-white" />
                </span>
                <header>
                  <h3 className="mb-1 flex items-center text-lg font-bold text-neutral-900 dark:text-white">
                    {post.title}{" "}
                    {index === 0 && (
                      <span className="ml-3 mr-2 hidden rounded bg-black/10 py-0.5 pl-1.5 pr-2.5 text-sm font-medium dark:bg-white/10 sm:block">
                        🔥 Latest
                      </span>
                    )}
                  </h3>
                  <time
                    className="mb-2 block text-sm font-normal leading-none text-neutral-500 dark:text-neutral-500"
                    dateTime={new Date(post.publishedAt).toUTCString()}
                  >
                    {parseISO(post.publishedAt)}
                  </time>
                </header>
                <p className="mb-2 text-base font-normal text-neutral-700 dark:text-neutral-300">
                  {post.summary}
                </p>
                <p className="inline-flex text-sm font-bold text-blue-500">
                  Read more
                </p>
              </li>
            </Link>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Blog;
