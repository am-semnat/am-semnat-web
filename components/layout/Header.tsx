import Link from "next/link";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { PRIMARY_NAV } from "@/lib/nav";
import { GITHUB_ORG_URL, SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="border-rule bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="border-ink/10 relative inline-flex h-7 w-7 items-center justify-center border bg-transparent">
            <span
              aria-hidden
              className="border-cobalt-500 absolute -top-px -left-px h-1.5 w-1.5 border-t border-l"
            />
            <span
              aria-hidden
              className="border-cobalt-500 absolute -top-px -right-px h-1.5 w-1.5 border-t border-r"
            />
            <span
              aria-hidden
              className="border-cobalt-500 absolute -bottom-px -left-px h-1.5 w-1.5 border-b border-l"
            />
            <span
              aria-hidden
              className="border-cobalt-500 absolute -right-px -bottom-px h-1.5 w-1.5 border-r border-b"
            />
            <span className="font-display text-ink mt-0.5 -translate-y-[0.12em] text-[14px] leading-none italic">
              a
            </span>
          </span>
          <span className="text-ink text-[14px] font-medium tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {PRIMARY_NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group text-ink-muted hover:text-ink flex items-center gap-1.5 text-[13px] transition-colors"
            >
              <span className="text-cobalt-600 font-mono text-[10px] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted hover:text-ink inline-flex items-center gap-2 p-1 text-[13px] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
