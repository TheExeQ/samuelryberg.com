import React from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";

import { components } from "@/mdx-components";

export function MDXComponent(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={{ ...components }} />;
}
