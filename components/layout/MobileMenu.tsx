"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { PRIMARY_NAV } from "@/lib/nav";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const panelId = useId();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Închide meniul" : "Deschide meniul"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="text-ink-muted hover:text-ink relative inline-flex h-9 w-9 items-center justify-center transition-colors md:hidden"
      >
        <span aria-hidden className="relative block h-3 w-4">
          <span
            className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-200 ${
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-full -translate-y-px"
            }`}
          />
        </span>
      </button>

      {open && (
        <button
          type="button"
          aria-label="Închide meniul"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className="fixed inset-x-0 top-14 bottom-0 z-30 cursor-default bg-ink/20 backdrop-blur-sm md:hidden"
        />
      )}

      <div
        id={panelId}
        hidden={!open}
        className="border-rule bg-paper/95 fixed inset-x-0 top-14 z-40 border-b backdrop-blur-md md:hidden"
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
          {PRIMARY_NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-rule/60 text-ink hover:text-cobalt-600 flex items-center gap-3 border-b py-3 text-[15px] last:border-b-0"
            >
              <span className="text-cobalt-600 font-mono text-[10px] tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
