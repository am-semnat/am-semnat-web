import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function NavLink({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`text-ink-muted hover:text-ink text-sm font-medium transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}
