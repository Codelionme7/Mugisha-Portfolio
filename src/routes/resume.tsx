import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { profile, resume } from "@/lib/profile";

export const Route = createFileRoute("/resume")({ component: ResumePage });

const reveals = ["reveal-2", "reveal-3", "reveal-4"] as const;

function ResumePage() {
  return (
    <SiteShell backTo="/" backLabel="Links" width="prose">
      <header className="reveal reveal-1 mb-8">
        <p className="text-xs font-medium tracking-wide text-accent uppercase">Resume</p>
        <h1 className="font-display mt-2 text-3xl leading-tight font-medium tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="mt-3 text-base leading-normal text-muted">{resume.headline}</p>
        <p className="mt-2 text-sm text-faint">
          {profile.location} ·{" "}
          <a href={profile.github} className="underline decoration-line underline-offset-4" target="_blank" rel="noreferrer">
            github.com/{profile.handle}
          </a>
          {" · "}
          <a href={profile.linkedin} className="underline decoration-line underline-offset-4" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {resume.sections.map((section, index) => (
          <section key={section.title} className={`reveal ${reveals[index] ?? "reveal-4"}`}>
            <h2 className="text-xs font-medium tracking-wide text-accent uppercase">
              {section.title}
            </h2>
            <ul className="mt-3 flex flex-col gap-5">
              {section.items.map((item) => (
                <li key={item.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-medium text-ink">{item.label}</h3>
                    <p className="shrink-0 text-sm text-faint">{item.detail}</p>
                  </div>
                  <p className="mt-1 text-base leading-normal text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </SiteShell>
  );
}
