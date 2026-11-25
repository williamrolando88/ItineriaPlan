import { Flame } from "lucide-react";

export function BrandIcon({ className = "size-9" }: { className?: string }) {
  return (
    <span
      className={`grid place-items-center rounded-full border border-white/25 bg-white/10 ${className}`}
    >
      <Flame className="size-5 text-blue-400" aria-hidden="true" />
    </span>
  );
}

export default BrandIcon;
