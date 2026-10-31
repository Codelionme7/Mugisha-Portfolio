import { toast } from "sonner";

export async function copyText(value: string, copiedLabel?: string) {
  let copied = false;
  try {
    await navigator.clipboard.writeText(value);
    copied = true;
  } catch {
    try {
      const field = document.createElement("textarea");
      field.value = value;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      copied = document.execCommand("copy");
      field.remove();
    } catch {
      copied = false;
    }
  }

  toast(copied ? (copiedLabel ?? `Copied ${value}`) : value);
}
