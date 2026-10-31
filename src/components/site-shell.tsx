import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Toaster } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  backTo,
  backLabel = "Back",
  width = "narrow",
}: {
  children: React.ReactNode;
  backTo?: "/";
  backLabel?: string;
  width?: "narrow" | "prose";
}) {
  const { theme } = useTheme();

  return (
    <div className="paper-grain min-h-dvh bg-page text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "mx-auto w-full px-5 pt-5 pb-24",
          width === "prose" ? "max-w-lg" : "max-w-md",
        )}
      >
        <header className="mb-6 flex min-h-11 items-center justify-between">
          {backTo ? (
            <Link
              to={backTo}
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted"
            >
              <ArrowLeft className="size-4" strokeWidth={1.75} />
              {backLabel}
            </Link>
          ) : (
            <span />
          )}
          <ThemeToggle />
        </header>
        <main id="content">{children}</main>
      </div>
      <Toaster
        theme={theme}
        position="bottom-center"
        toastOptions={{
          className: "!bg-surface !text-ink !border-line !font-sans !shadow-none",
        }}
      />
    </div>
  );
}
