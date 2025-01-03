import { notFound } from "next/navigation";
import { getBlogPosts } from "@/lib/blog";
import { parseISO } from "@/lib/utils";
import { MDXComponent } from "@/components";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }) {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <div className="mx-auto mb-16 mt-32 flex min-h-screen max-w-[800px] flex-col items-start justify-center px-4">
        <div className="dark:prose-dark prose grid flex-1 grid-cols-1 md:grid-cols-[1fr,minmax(auto,640px),1fr] md:[&>*]:col-start-2">
          <div>
            <header className="w-full">
              <h1 className="text-foreground">{post.metadata.title}</h1>
              <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
                <div className="flex items-center">
                  <time
                    className="text-sm text-muted-foreground"
                    dateTime={new Date(post.metadata.publishedAt).toUTCString()}
                  >
                    Samuel Ryberg / {parseISO(post.metadata.publishedAt)}
                  </time>
                </div>
              </div>
            </header>
            <article>
              <MDXComponent source={post.content} />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
