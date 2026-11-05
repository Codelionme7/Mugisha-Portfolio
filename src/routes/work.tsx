import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { projects } from "@/lib/profile";

export const Route = createFileRoute("/work")({ component: WorkPage });

const reveals = ["reveal-2", "reveal-3", "reveal-4"] as const;

function WorkPage() {
  return (
    <SiteShell backTo="/" backLabel="Links" width="prose">
      <header className="reveal reveal-1 mb-8">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">Selected work</p>
        <h1 className="font-display mt-2 text-3xl leading-tight font-medium tracking-tight text-ink">
          Systems, not demos
        </h1>
        <p className="mt-3 text-base leading-normal text-muted">
          Backends, evaluation pipelines, and product previews. The source is on GitHub.
        </p>
      </header>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => (
          <article
            key={project.id}
            id={project.id}
            className={`reveal ${reveals[index] ?? "reveal-4"} scroll-mt-8`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="font-display text-xl font-medium tracking-tight text-ink">
                {project.title}
              </h2>
              <p className="text-sm text-faint">{project.year}</p>
            </div>
            <p className="mt-1 text-xs font-medium tracking-wide text-accent">{project.meta}</p>
            <p className="mt-3 text-base leading-normal font-medium text-ink">{project.lede}</p>
            <p className="mt-2 text-base leading-normal text-muted">{project.body}</p>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-accent underline decoration-line underline-offset-4"
            >
              {project.linkLabel ?? "View repository"}
            </a>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
