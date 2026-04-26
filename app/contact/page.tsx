import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { CONTACT_EMAIL, GITHUB_ORG_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Scrie-ne la contact@amsemnat.ro sau deschide un issue pe GitHub.",
};

const channels = [
  {
    index: "01",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    note: "Răspundem în 1–2 zile lucrătoare. Pentru întrebări de business, integrare, parteneriate sau presă.",
  },
  {
    index: "02",
    label: "GitHub Issues",
    value: "github.com/am-semnat",
    href: GITHUB_ORG_URL,
    external: true,
    note: "Bug-uri, feature requests, întrebări tehnice despre SDK-uri. Public, pentru ca răspunsurile să folosească tuturor.",
  },
];

export default function ContactPage() {
  return (
    <Container className="py-24 md:py-32">
      <Eyebrow index="C">Contact</Eyebrow>
      <h1 className="font-display text-ink mt-7 max-w-[16ch] text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.98] tracking-tight">
        Vorbim <em className="font-light italic">direct</em>.
      </h1>
      <p className="text-ink-muted mt-6 max-w-[52ch] text-lg leading-relaxed md:text-xl">
        Două canale, niciun formular. Alege ce ți se potrivește.
      </p>

      <div className="border-rule-strong mt-16 grid grid-cols-1 divide-y border-y md:mt-20 md:grid-cols-2 md:divide-x md:divide-y-0">
        {channels.map((c) => (
          <a
            key={c.index}
            href={c.href}
            {...(c.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group hover:bg-paper-elevated flex flex-col p-8 transition-colors md:p-10"
          >
            <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
              {c.index}
            </div>
            <div className="text-ink-muted mt-5 font-mono text-[11px] tracking-[0.18em] uppercase">
              {c.label}
            </div>
            <div className="font-display text-ink mt-3 flex items-baseline gap-3 text-[1.5rem] leading-[1.1] tracking-tight md:text-[1.75rem]">
              <span className="break-all">{c.value}</span>
              {c.label === "GitHub Issues" && (
                <GitHubIcon className="text-ink-muted h-4 w-4 shrink-0" />
              )}
            </div>
            <p className="text-ink-muted mt-5 max-w-[42ch] text-[14px] leading-relaxed md:text-[15px]">
              {c.note}
            </p>
            <div className="text-ink-faint group-hover:text-cobalt-600 border-rule mt-7 inline-flex items-center gap-2 border-t pt-5 font-mono text-[11px] tracking-[0.18em] uppercase transition-colors">
              <span>{c.label === "Email" ? "Trimite mesaj" : "Deschide issue"}</span>
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
}
