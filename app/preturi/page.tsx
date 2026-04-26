import type { Metadata } from "next";
import { type ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Prețuri",
  description:
    "Personal - gratuit pentru totdeauna. SDK-uri Apache 2.0 - fără chei de licență. Echipe - plan dedicat pentru sesiuni de semnare coordonate.",
};

type PriceBlock = {
  index: string;
  label: string;
  price: string;
  body: ReactNode;
  meta?: string;
  badge?: string;
};

const blocks: PriceBlock[] = [
  {
    index: "01 / 03",
    label: "SDK-uri pentru dezvoltatori",
    price: "Gratuit",
    body: "Folosește-le în orice proiect, comercial sau nu. Apache 2.0. Fără chei de licență, fără factură anuală, fără limite per dispozitiv.",
    meta: "Maven Central · CocoaPods · npm",
  },
  {
    index: "02 / 03",
    label: "Aplicație · Personal",
    price: "Gratuit",
    body: "Citește, verifică și semnează PDF-uri cu CEI-ul tău. Autentificare OIDC. Pentru totdeauna, fără limite per dispozitiv, fără KYC, fără cont obligatoriu.",
    meta: "iOS · Android",
    badge: "în curând",
  },
  {
    index: "03 / 03",
    label: "Aplicație · Echipe",
    price: "La cerere",
    body: (
      <>
        Sesiuni de semnare în grup, audit și administrare. Pricing-ul e funcție
        de mărime și folosință -{" "}
        <Link
          href="/contact"
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
        >
          contactați-ne
        </Link>{" "}
        pentru detalii când ești gata să integrezi.
      </>
    ),
    meta: "iOS · Android · plan dedicat",
  },
];

export default function PreturiPage() {
  return (
    <>
      <Container className="pt-24 md:pt-32">
        <Eyebrow index="P">Prețuri</Eyebrow>
        <h1 className="font-display text-ink mt-7 max-w-[20ch] text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.98] tracking-tight">
          Gratuit pentru tine. <em className="font-light italic">Plătit</em>{" "}
          pentru echipe.
        </h1>
        <p className="text-ink-muted mt-6 max-w-[58ch] text-lg leading-relaxed md:text-xl">
          App-ul personal e gratuit pentru totdeauna. SDK-urile sunt Apache 2.0
          - fără chei de licență, fără factură anuală. Echipele care semnează în
          grup au un plan dedicat.
        </p>
      </Container>

      <Section className="mt-16 md:mt-24" containerClassName="!pt-0">
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {blocks.map((b) => (
            <article
              key={b.index}
              className="bg-paper hover:bg-paper-elevated flex flex-col p-8 transition-colors duration-200 md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                  {b.index}
                </div>
                {b.badge && (
                  <span className="border-rule-strong text-ink-muted rounded-[2px] border px-2 py-0.5 font-mono text-[10px] tracking-[0.16em] uppercase">
                    {b.badge}
                  </span>
                )}
              </div>

              <div className="text-ink-muted mt-6 font-mono text-[11px] tracking-[0.18em] uppercase">
                {b.label}
              </div>

              <div className="font-display text-ink mt-3 text-[2.75rem] leading-[1] tracking-tight md:text-[3rem]">
                {b.price === "-" ? (
                  <span className="text-ink-faint">-</span>
                ) : (
                  <em className="font-light italic">{b.price}</em>
                )}
              </div>

              <p className="text-ink-muted mt-5 text-[14px] leading-relaxed md:text-[15px]">
                {b.body}
              </p>

              {b.meta && (
                <p className="text-ink-faint border-rule mt-7 border-t pt-5 font-mono text-[11px] tracking-[0.16em] uppercase">
                  {b.meta}
                </p>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Container className="pb-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-8">
            <Eyebrow index="P · 02">Comparație</Eyebrow>
            <h2 className="font-display text-ink mt-6 text-[clamp(1.75rem,2.5vw+1rem,2.75rem)] leading-[1.1] tracking-tight">
              Față de SDK-uri comerciale închise, avantajele sunt clare.
            </h2>
            <p className="text-ink-muted mt-6 max-w-[55ch] text-base leading-relaxed md:text-lg">
              Singurul SDK comercial pentru CEI din România costă{" "}
              <strong className="text-ink font-medium">12.000 € pe an</strong>,
              restricționat prin chei de licență și distribuit ca binar închis.
              Pentru o echipă asta înseamnă peste 36.000 € pe trei ani - bani pe
              care îi păstrezi în firma ta când alegi AmSemnat.
            </p>
            <div className="mt-8">
              <Button href="/dezvoltatori" variant="secondary" arrow>
                Vezi SDK-urile
              </Button>
            </div>
          </div>

          <aside className="md:col-span-4">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Întrebare frecventă
              </div>
              <p className="text-ink mt-3 text-[15px] leading-relaxed">
                <em className="font-display italic">
                  „Pot folosi SDK-urile în produsul meu comercial?”
                </em>
              </p>
              <p className="text-ink-muted mt-3 text-[14px] leading-relaxed">
                Da. Apache 2.0 permite explicit utilizarea comercială,
                modificarea, distribuția. Singura cerință e să păstrezi notițele
                de copyright și să incluzi licența.{" "}
                <Link
                  href="/legal/termeni"
                  className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
                >
                  Detalii →
                </Link>
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
