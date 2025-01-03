import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

import Link from 'next/link'
import Image from 'next/image'

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(level: number) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    let className = 'font-medium text-foreground';

    if (level === 1) {
      className += ' mb-0 pt-12 fade-in';
    } else {
      className += ' mb-3 mt-8';
    }
    
    return React.createElement(
      `h${level}`,
      { id: slug, className },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
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
  Image: RoundedImage,
  a: CustomLink,
}

export function MDXComponent(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components }} />;
}
