import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { notes } from "@/lib/profile";

export const Route = createFileRoute("/notes")({ component: NotesPage });

function NotesPage() {
  const [featured, ...rest] = notes;

  return (
    <SiteShell backTo="/" backLabel="Links" width="prose">
      <header className="reveal reveal-1 mb-8">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">Notes</p>
        <h1 className="font-display mt-2 text-3xl leading-tight font-medium tracking-tight text-ink">
          Writing
        </h1>
      </header>

      {featured ? (
        <article className="reveal reveal-2">
          <p className="text-sm text-faint">{featured.date}</p>
          <h2 className="font-display mt-2 text-2xl leading-snug font-medium tracking-tight text-ink">
            {featured.title}
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {featured.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-base leading-normal text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      ) : null}

      <div className="mt-12 flex flex-col gap-8 border-t border-line pt-8">
        {rest.map((note) => (
          <article key={note.slug} className="reveal reveal-3">
            <p className="text-sm text-faint">{note.date}</p>
            <h2 className="font-display mt-1 text-xl font-medium tracking-tight text-ink">
              {note.title}
            </h2>
            <div className="mt-3 flex flex-col gap-3">
              {note.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-base leading-normal text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SiteShell>
  );
}
