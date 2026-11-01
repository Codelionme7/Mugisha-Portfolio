import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, FileText, Layers, Mail, PenLine } from "lucide-react";
import type { FeaturedLink } from "@/lib/profile";
import { cn } from "@/lib/utils";

const icons = {
  work: Layers,
  note: PenLine,
  resume: FileText,
  mail: Mail,
  code: Cpu,
};

type InternalPath = "/work" | "/notes" | "/resume";

export function LinkButton({ link }: { link: FeaturedLink }) {
  const Icon = icons[link.icon];
  const className = cn(
    "link-card group flex min-h-14 w-full items-center gap-3 rounded-lg bg-surface py-3 pr-3.5 pl-3 text-left",
  );

  const inner = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-sm bg-page text-accent">
        <Icon className="size-4" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium text-ink">{link.title}</span>
        <span className="block truncate text-sm text-muted">{link.subtitle}</span>
      </span>
      <ArrowUpRight
        className="link-arrow size-4 shrink-0 text-faint opacity-70"
        strokeWidth={1.75}
        aria-hidden="true"
      />
    </>
  );

  if (link.external) {
    return (
      <a href={link.href} className={className} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }

  const [pathname, hash] = link.href.split("#");
  const to = (pathname || "/") as InternalPath;

  return (
    <Link to={to} hash={hash} className={className}>
      {inner}
    </Link>
  );
}
