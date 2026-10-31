import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={cn(
        "icon-btn relative grid size-11 place-items-center rounded-full bg-surface text-ink",
        className,
      )}
    >
      <span
        className={cn(
          "icon-swap col-start-1 row-start-1",
          isDark ? "scale-100 opacity-100 blur-0" : "scale-[0.25] opacity-0 blur-[4px]",
        )}
        aria-hidden="true"
      >
        <Sun className="size-4" strokeWidth={1.75} />
      </span>
      <span
        className={cn(
          "icon-swap col-start-1 row-start-1",
          isDark ? "scale-[0.25] opacity-0 blur-[4px]" : "scale-100 opacity-100 blur-0",
        )}
        aria-hidden="true"
      >
        <Moon className="size-4" strokeWidth={1.75} />
      </span>
    </button>
  );
}
