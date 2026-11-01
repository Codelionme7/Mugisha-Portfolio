import { createFileRoute } from "@tanstack/react-router";
import { Copy, MapPin } from "lucide-react";
import { LinkButton } from "@/components/link-button";
import { SiteShell } from "@/components/site-shell";
import { SocialRow } from "@/components/social-row";
import { copyText } from "@/lib/clipboard";
import { featuredLinks, profile } from "@/lib/profile";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <div className="flex flex-col items-center text-center">
        <div className="reveal reveal-1 relative mb-5">
          <img
            src={profile.avatar}
            alt={profile.avatarAlt}
            width={112}
            height={112}
            className="content-img size-28 rounded-full object-cover"
          />
        </div>

        <h1 className="reveal reveal-2 font-display text-3xl leading-tight font-medium tracking-tight text-ink">
          {profile.name}
        </h1>
        <p className="reveal reveal-2 mt-1 text-sm font-medium text-muted">{profile.role}</p>
        <p className="reveal reveal-2 mt-2 inline-flex items-center justify-center gap-1 text-sm text-faint">
          <MapPin className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
          {profile.location}
        </p>

        <p className="reveal reveal-3 mt-5 max-w-sm text-base leading-normal text-muted">
          {profile.bio}
        </p>

        <p className="reveal reveal-4 mt-5 rounded-full bg-surface px-3 py-1.5 text-xs font-medium tracking-wide text-accent elevated">
          {profile.status}
        </p>

        <nav aria-label="Featured links" className="link-stack mt-8 flex w-full flex-col gap-3">
          {featuredLinks.map((link) => (
            <LinkButton key={link.title} link={link} />
          ))}
        </nav>

        <div className="reveal reveal-6 mt-8 w-full">
          <SocialRow />
        </div>

        <footer className="reveal reveal-7 mt-10 flex flex-col items-center gap-3 text-sm text-faint">
          <p>
            <a
              href={profile.github}
              className="text-muted underline decoration-line underline-offset-4"
              rel="noreferrer"
              target="_blank"
            >
              github.com/Codelionme7
            </a>
          </p>
          <button
            type="button"
            onClick={() => copyText(window.location.origin, "Page link copied")}
            className="inline-flex min-h-11 items-center gap-1.5 text-muted"
          >
            <Copy className="size-3.5" strokeWidth={1.75} />
            Copy this page
          </button>
        </footer>
      </div>
    </SiteShell>
  );
}
