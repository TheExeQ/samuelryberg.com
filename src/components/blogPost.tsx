import { parseISO } from "@/lib/utils";

export function BlogPost({content} : {content: any}) {
  return (
    <article className="max-w-[800px] mx-auto mb-16 mt-32 flex min-h-screen flex-col items-start justify-center">
      <div className="prose grid flex-1 grid-cols-1 dark:prose-dark md:grid-cols-[1fr,minmax(auto,640px),1fr] md:[&>*]:col-start-2">
        <div>
          <header className="w-full">
            <h1 className="text-foreground">Title</h1>
            <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
              <div className="flex items-center">
                <time className="text-sm text-muted-foreground" dateTime={new Date("2025-01-01").toUTCString()}>
                  Samuel Ryberg / {parseISO("2025-01-01")}
                </time>
              </div>
              <p className="mt-2 min-w-32 text-sm text-muted-foreground md:mt-0">
                69 words • 4 min
              </p>
            </div>
          </header>
          {content}
        </div>
      </div>
    </article>
  );
}