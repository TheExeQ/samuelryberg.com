import { BlogPost } from "@/components";
import Content from "./content.mdx"

export default function Blog() {
  return (
    <BlogPost content={<Content />} />
  );
}