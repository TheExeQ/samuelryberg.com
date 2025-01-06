import React from "react";
import Link from "next/link";

import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

import "@/styles/highlight-js/atom-one-dark.css";

function createLink(props) {
  const href = props.href;
  const className = "text-blue-500"; 

  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a className={className} {...props} />;
  }

  return <a className={className} target="_blank" rel="noopener noreferrer" {...props} />;
}

function createImage(props) {
  return (
      <img alt={props.alt} className="mx-auto" {...props} />
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    let className = "font-medium text-foreground";

    if (level === 1) {
      className += " mb-0 pt-12 fade-in";
    } else {
      className += " mb-3 mt-8";
    }

    return React.createElement(
      `h${level}`,
      { id: slug, className },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

function createParagraph(props) {
  return <p className="leading-snug text-foreground" {...props} />;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  p: createParagraph,
  img: createImage,
  a: createLink,
};

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export function MDXComponent(props: MDXRemoteProps) {
  return (
    <article className="prose prose-invert">
      <MDXRemote {...props} components={{ ...components }} options={options} />
    </article>
  );
}
