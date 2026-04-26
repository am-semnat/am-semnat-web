import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politică de confidențialitate",
  description:
    "Ce date colectează site-ul amsemnat.ro și cum le folosim.",
};

const sections = [
  {
    index: "01",
    title: "Cine suntem",
    body: (
      <>
        AmSemnat e un proiect open source operat din București. Oferim o
        aplicație mobilă și trei SDK-uri (Android, iOS, Expo) pentru
        citirea și semnarea cu cartea electronică de identitate (CEI).
        Site-ul amsemnat.ro e operat de echipa AmSemnat. Pentru întrebări
        legate de această politică, scrie-ne la{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        .
      </>
    ),
  },
  {
    index: "02",
    title: "Ce date colectăm pe site",
    body: (
      <>
        <strong className="text-ink font-medium">
          Statistici agregate prin Plausible Analytics
        </strong>{" "}
        - număr de vizualizări, sursa traficului, țara aproximativă.
        Plausible nu folosește cookie-uri, nu urmărește utilizatori
        individuali și nu construiește profiluri.{" "}
        <strong className="text-ink font-medium">
          Adresa de email pe care o trimiți voluntar
        </strong>{" "}
        la {CONTACT_EMAIL}, dacă alegi să ne contactezi. Atât. Nu există
        cont, nu există formulare, nu există tracking de marketing.
      </>
    ),
  },
  {
    index: "03",
    title: "Aplicația mobilă",
    body: (
      <>
        Funcționează local pe dispozitivul tău. Datele de pe chip-ul CEI,
        semnăturile produse și fișierele PDF nu trec prin serverele
        noastre. Detalii suplimentare în politica de confidențialitate a
        aplicației, disponibilă în App Store și Google Play când aplicația
        e publicată.
      </>
    ),
  },
  {
    index: "04",
    title: "SDK-urile",
    body: (
      <>
        Bibliotecile open source (Android, iOS, Expo) nu colectează
        telemetrie de niciun fel. Toată prelucrarea NFC + criptografică
        rulează pe dispozitivul utilizatorului final al aplicației care
        integrează SDK-ul. Dacă tu construiești o aplicație folosind
        SDK-urile, propria ta politică de confidențialitate trebuie să
        acopere ce date colectezi de la utilizatorii tăi.
      </>
    ),
  },
  {
    index: "05",
    title: "Cookie-uri",
    body: (
      <>
        Site-ul nu folosește cookie-uri pentru tracking sau publicitate.
        Plausible Analytics rulează cookieless, iar Vercel poate seta
        cookie-uri tehnice pentru rutarea cererilor și prevenția
        abuzurilor.
      </>
    ),
  },
  {
    index: "06",
    title: "Drepturile tale (GDPR)",
    body: (
      <>
        Conform Regulamentului UE 2016/679, ai dreptul: să afli ce date
        avem despre tine, să le corectezi sau ștergi, să ne ceri să
        încetăm prelucrarea, să depui plângere la ANSPDCP. Cere oricare
        dintre acestea la {CONTACT_EMAIL}. Răspundem în termen de o
        lună (cu posibilă prelungire pentru cereri complexe, conform
        GDPR).
      </>
    ),
  },
  {
    index: "07",
    title: "Modificări",
    body: (
      <>
        Vom actualiza această politică când lansăm funcționalități noi
        (de exemplu, dashboard-ul cu cont). Versiunea curentă: aprilie
        2026.
      </>
    ),
  },
];

export default function ConfidentialitatePage() {
  return (
    <Container className="py-24 md:py-32">
      <Eyebrow index="L1">Legal</Eyebrow>
      <h1 className="font-display text-ink mt-7 max-w-[20ch] text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.02] tracking-tight">
        Politică de{" "}
        <em className="font-light italic">confidențialitate</em>.
      </h1>
      <p className="text-ink-muted mt-6 max-w-[55ch] text-lg leading-relaxed">
        Pe scurt: site-ul nu te urmărește, aplicația rulează local,
        SDK-urile nu trimit telemetrie. Detalii mai jos.
      </p>

      <div className="border-rule-strong divide-rule mt-16 divide-y border-t md:mt-20">
        {sections.map((s) => (
          <section
            key={s.index}
            className="grid grid-cols-1 gap-x-10 gap-y-3 py-8 md:grid-cols-12 md:py-10"
          >
            <div className="md:col-span-3">
              <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                §{s.index}
              </div>
              <h2 className="font-display text-ink mt-2 text-[1.25rem] leading-[1.2] tracking-tight md:text-[1.4rem]">
                {s.title}
              </h2>
            </div>
            <div className="text-ink-muted max-w-[60ch] text-[15px] leading-relaxed md:col-span-9">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
