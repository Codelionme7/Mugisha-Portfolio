import { Github, Linkedin, Mail } from "lucide-react";
import { copyText } from "@/lib/clipboard";
import { socials, type Social } from "@/lib/profile";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M14.72 10.16 22.4 1.5h-1.82l-6.66 7.52L8.6 1.5H1.5l8.05 11.4L1.5 22.5h-1.82l7.04-7.94 5.62 7.94h7.1L14.72 10.16Zm-2.49 2.81-.82-1.14L4 2.89h2.8l5.26 7.32.82 1.14 6.86 9.55h-2.8l-5.71-7.93Z" />
    </svg>
  );
}

function SocialIcon({ id }: { id: Social["id"] }) {
  const className = "size-4";
  if (id === "github") return <Github className={className} strokeWidth={1.75} />;
  if (id === "linkedin") return <Linkedin className={className} strokeWidth={1.75} />;
  if (id === "mail") return <Mail className={className} strokeWidth={1.75} />;
  return <XIcon className={className} />;
}

export function SocialRow() {
  return (
    <ul className="flex items-center justify-center gap-2">
      {socials.map((social) => (
        <li key={social.id}>
          {social.href ? (
            <a
              href={social.href}
              aria-label={social.label}
              className="icon-btn grid size-11 place-items-center rounded-full bg-surface text-ink"
            >
              <SocialIcon id={social.id} />
            </a>
          ) : (
            <button
              type="button"
              aria-label={`Copy ${social.label} handle`}
              onClick={() => social.copy && copyText(social.copy)}
              className="icon-btn grid size-11 place-items-center rounded-full bg-surface text-ink"
            >
              <SocialIcon id={social.id} />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
