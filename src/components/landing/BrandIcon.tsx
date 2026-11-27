import { Flame } from "lucide-react";

export function BrandIcon({ className = "size-9" }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-full border border-ink/25 bg-ink/10 ${className}`}
    >
      <Flame className="size-5 text-brand-accent" aria-hidden="true" />
    </span>
  );
}

export default BrandIcon;
