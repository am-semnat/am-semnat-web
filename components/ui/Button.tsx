import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-[3px] font-medium transition-all duration-200 ease-out whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-cobalt-600 active:bg-cobalt-700 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]",
  secondary:
    "border border-ink/15 text-ink hover:border-ink hover:bg-paper-elevated",
  ghost: "text-ink-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-[13px] tracking-tight",
  lg: "h-12 px-6 text-[15px] tracking-tight",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  arrow,
  children,
  className = "",
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden
          className="-mr-0.5 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      )}
    </>
  );
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
