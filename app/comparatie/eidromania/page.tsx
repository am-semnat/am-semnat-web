import type { Metadata } from "next";
import { Fragment, type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "AmSemnat vs eidromania.ro - alternativă open-source pentru SDK CEI",
  description:
    "Comparație factuală între AmSemnat (open source, semnare PDF, gratuit) și eID Romania (proprietar, doar citire, 12.000 €/an). Ce alegi pentru integrările tale cu cartea electronică de identitate.",
};

const VERIFIED_DATE = "26 aprilie 2026";

type Row = {
  label: string;
  amsemnat: ReactNode;
  eidromania: ReactNode;
  highlight?: boolean;
};

type Group = {
  index: string;
  title: string;
  rows: Row[];
};

const groups: Group[] = [
  {
    index: "01",
    title: "Licență & cod-sursă",
    rows: [
      {
        label: "Licență",
        amsemnat: <em className="font-display italic">Apache 2.0</em>,
        eidromania: "Proprietary, închis",
        highlight: true,
      },
      {
        label: "Cod-sursă disponibil",
        amsemnat: "Da, pe GitHub",
        eidromania: "Nu (doar exemple, nu și SDK-ul)",
        highlight: true,
      },
      {
        label: "Chei de licență · DRM",
        amsemnat: "Nu",
        eidromania: "Da",
      },
    ],
  },
  {
    index: "02",
    title: "Capabilități",
    rows: [
      {
        label: "Citire CEI prin NFC",
        amsemnat: "Da",
        eidromania: "Da",
      },
      {
        label: "Semnătură PAdES pe CEI",
        amsemnat: <em className="font-display italic">Da, native</em>,
        eidromania: "Nu (doar citire)",
        highlight: true,
      },
      {
        label: "Sesiuni multi-semnatar",
        amsemnat: (
          <>
            Da · <em className="font-display italic">Planul Echipe</em>
          </>
        ),
        eidromania: "Nu",
        highlight: true,
      },
      {
        label: "Passive Authentication",
        amsemnat: "Da · CSCA furnizat de tine",
        eidromania: "Da",
      },
      {
        label: "Status eIDAS QTSP",
        amsemnat: "Nu",
        eidromania: "Nu",
      },
    ],
  },
  {
    index: "03",
    title: "Distribuție",
    rows: [
      {
        label: "Platforme mobile",
        amsemnat: "Android · iOS · Expo / RN",
        eidromania: "Android · iOS · Flutter · RN",
      },
      {
        label: "Platforme desktop",
        amsemnat: <span className="text-ink-faint">- (nu în 0.x)</span>,
        eidromania: "Windows · macOS · Linux · .NET, Java",
      },
      {
        label: "Documentație SDK",
        amsemnat: "GitHub READMEs · subdomeniu dedicat în curând",
        eidromania: "Documentație publică pe site",
      },
    ],
  },
  {
    index: "04",
    title: "Preț",
    rows: [
      {
        label: "Preț SDK",
        amsemnat: <em className="font-display italic">Gratuit</em>,
        eidromania: <em className="font-display italic">12.000 €/an</em>,
        highlight: true,
      },
    ],
  },
  {
    index: "05",
    title: "Operator",
    rows: [
      {
        label: "Tip",
        amsemnat: "Proiect open source",
        eidromania: "Companie privată · UP2DATE Software SRL",
      },
    ],
  },
];

const highlights = [
  {
    index: "01",
    title: "Cod deschis vs binar închis",
    body: "Codul care îți citește buletinul electronic și produce semnături în numele tău e prima linie de apărare a identității tale. Auditabilitatea nu e o virtute decorativă - e singurul mod în care poți să verifici că instrumentul face exact ce zice. Apache 2.0 înseamnă: poți citi fiecare linie, poți face fork, poți integra în produsul tău fără să accepți un cod opac în lanțul de încredere.",
  },
  {
    index: "02",
    title: "Semnare vs doar citire",
    body: "eidromania.ro citește chip-ul, dar nu semnează. Cu PAdES generezi documente PDF semnate, folosind certificatul de pe card. Pentru fluxuri cu contracte, formulare sau onboarding KYC, citirea singură nu e suficientă.”",
  },
  {
    index: "03",
    title: "€0 vs €12.000/an - TCO concret",
    body: "Echipă de 10 dezvoltatori care construiește un produs cu integrare CEI: SDK-ul eidromania costă 12.000 € pe an = 36.000 € pe trei ani. Birou notarial mic care folosește Apps + API: 399 €/an = 1.200 € pe trei ani - și asta doar pentru citire, fără semnare. Fintech cu 50 de clienți / zi onboardați prin CEI: tot 36.000 € pe trei ani pentru SDK. Cu AmSemnat, oricare dintre aceste scenarii costă zero - plus că semnezi PDF-uri direct cu certificatul de pe CEI, nu doar citești chip-ul.",
  },
];

const concessions = [
  {
    label: "Desktop coverage",
    body: "Dacă ai nevoie de integrare desktop pe Windows, macOS sau Linux - în .NET, Java sau printr-un system tray service - eidromania are pachete pentru asta. Noi nu acoperim desktop în 0.x. Pentru un sistem POS sau o aplicație notarială desktop, ei sunt opțiunea care există astăzi.",
  },
  {
    label: "Flutter",
    body: "eidromania publică un SDK Flutter. Noi nu, încă. Dacă produsul tău e construit în Flutter și nu poți migra spre RN/Expo, e o diferență care contează.",
  },
  {
    label: "Suport comercial",
    body: "Ei sunt o firmă cu un contract de support comercial. Dacă ai nevoie de SLA, escaladare prin email cu răspuns garantat în X ore și o factură pentru suport, modelul nostru open-source community-driven nu acoperă asta - nu astăzi.",
  },
];

const parities = [
  {
    label: "Citire NFC",
    body: "Ambele citesc CEI-ul prin NFC, fac handshake-ul PACE conform ICAO 9303 și extrag eDATA (numele, prenumele, CNP-ul, data de naștere etc.).",
  },
  {
    label: "Passive Authentication",
    body: "Ambele verifică că datele din chip sunt semnate de stat și că lanțul se închide la un CSCA în care ai încredere.",
  },
  {
    label: "Toate variantele de CEI",
    body: "Ambele funcționează cu toate cardurile electronice de identitate emise de România până la data de astăzi.",
  },
];

export default function ComparatieEidromaniaPage() {
  return (
    <>
      <Container className="pt-12 md:pt-20">
        <Eyebrow index="C">Comparație factuală</Eyebrow>
        <h1 className="font-display text-ink mt-7 text-[clamp(2.5rem,4.75vw+1rem,5.25rem)] leading-[0.98] tracking-[-0.02em]">
          AmSemnat <em className="font-light italic">vs</em> eidromania.ro
        </h1>
        <p className="text-ink-muted mt-7 max-w-[58ch] text-lg leading-relaxed md:text-xl">
          Alternativa open-source pentru integrări CEI. Mai jos găsești toate
          datele relevante, fără marketing. eidromania.ro a construit primul SDK
          comercial pentru cartea electronică de identitate în România. Acum
          există și o versiune open-source. Aici sunt diferențele, punctual.
        </p>
      </Container>

      <Section className="mt-16 md:mt-24" containerClassName="!pt-0">
        <div className="border-rule-strong bg-paper-elevated border-y">
          <div className="bg-paper-muted border-rule hidden border-b md:grid md:grid-cols-12 md:gap-x-6 md:px-6 md:py-4 md:lg:px-8">
            <div className="md:col-span-4" />
            <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase md:col-span-4">
              AmSemnat
            </div>
            <div className="text-ink-muted font-mono text-[11px] tracking-[0.2em] uppercase md:col-span-4">
              eID Romania <span className="text-ink-faint">· UP2DATE</span>
            </div>
          </div>

          {groups.map((group, gi) => (
            <Fragment key={group.index}>
              <div
                className={`px-6 pt-9 pb-3 lg:px-8 ${
                  gi === 0 ? "md:pt-7" : "border-rule border-t"
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                    §{group.index}
                  </span>
                  <span className="bg-rule-strong h-px flex-1" />
                  <span className="font-display text-ink text-[15px] leading-tight md:text-[17px]">
                    {group.title}
                  </span>
                </div>
              </div>

              {group.rows.map((row, ri) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-1 gap-x-6 gap-y-2 px-6 py-4 md:grid-cols-12 md:py-5 lg:px-8 ${
                    ri !== 0 ? "border-rule border-t" : ""
                  } ${row.highlight ? "bg-cobalt-50/55" : ""}`}
                >
                  <div className="text-ink-muted font-mono text-[11px] tracking-[0.18em] uppercase md:col-span-4 md:pt-0.5">
                    {row.label}
                  </div>
                  <div className="text-ink text-[15px] leading-relaxed md:col-span-4 md:text-[15.5px]">
                    <span className="text-ink-faint mr-2 inline-block w-20 font-mono text-[10px] tracking-[0.18em] uppercase md:hidden">
                      AmSemnat
                    </span>
                    {row.amsemnat}
                  </div>
                  <div className="text-ink-muted text-[15px] leading-relaxed md:col-span-4 md:text-[15.5px]">
                    <span className="text-ink-faint mr-2 inline-block w-20 font-mono text-[10px] tracking-[0.18em] uppercase md:hidden">
                      eID Romania
                    </span>
                    {row.eidromania}
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>

        <p className="text-ink-faint mt-6 max-w-[68ch] font-mono text-[10.5px] leading-[1.7] tracking-[0.14em] uppercase">
          Date despre eidromania.ro din pagina lor publică de prețuri, accesată{" "}
          {VERIFIED_DATE}. Ne corectăm dacă oferta lor se schimbă -{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-ink-muted hover:text-ink underline decoration-1 underline-offset-4 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Section
        index="01"
        label="Trei diferențe care contează"
        title={
          <>
            Unde se vede <em className="font-light italic">cu adevărat</em>{" "}
            diferența.
          </>
        }
        intro="Tabelul de sus enumeră faptele. Mai jos - de ce contează în practică, cu cifre concrete pentru scenarii realiste."
        bordered
      >
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.index}
              className="bg-paper hover:bg-paper-elevated flex flex-col p-7 transition-colors duration-200 md:p-9"
            >
              <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                §{h.index}
              </div>
              <h3 className="font-display text-ink mt-6 text-[1.5rem] leading-[1.15] tracking-tight md:text-[1.7rem]">
                {h.title}
              </h3>
              <p className="text-ink-muted mt-5 text-[14.5px] leading-relaxed md:text-[15.5px]">
                {h.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="02"
        label="Când eidromania e alegerea bună"
        title={
          <>
            Trei situații în care{" "}
            <em className="font-light italic">ei rămân</em> opțiunea corectă.
          </>
        }
        intro="O comparație care nu recunoaște unde celălalt e mai bun nu e o comparație, e o reclamă. eidromania a investit în acoperirea desktop și are un model de suport comercial pe care noi nu îl avem astăzi."
        bordered
      >
        <ul className="border-rule-strong divide-rule divide-y border-y">
          {concessions.map((c, i) => (
            <li
              key={c.label}
              className="grid grid-cols-1 gap-x-10 gap-y-3 py-7 md:grid-cols-12 md:py-9"
            >
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-cobalt-600 font-mono text-[11px] tracking-[0.18em] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-muted font-mono text-[11px] tracking-[0.18em] uppercase">
                    {c.label}
                  </span>
                </div>
              </div>
              <p className="text-ink-muted max-w-[60ch] text-[15px] leading-relaxed md:col-span-8 md:text-[16px]">
                {c.body}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        index="03"
        label="Ce rămâne la fel"
        title={
          <>
            Capabilități pe care{" "}
            <em className="font-light italic">le ai în ambele</em>.
          </>
        }
        intro="Dacă te îngrijorează paritatea, n-ai de ce. Toate funcționalitățile principale există în ambele direcții."
        bordered
      >
        <dl className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {parities.map((p) => (
            <div key={p.label} className="bg-paper p-7 md:p-8">
              <dt className="text-ink font-display text-[1.25rem] leading-tight tracking-tight md:text-[1.4rem]">
                {p.label}
              </dt>
              <dd className="text-ink-muted mt-4 text-[14px] leading-relaxed md:text-[15px]">
                {p.body}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section bordered className="text-center md:text-left">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Eyebrow index="↗">Ce urmează</Eyebrow>
            <h2 className="font-display text-ink mt-6 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.05] tracking-tight">
              Începe cu AmSemnat - <em className="font-light italic">acum</em>.
            </h2>
            <p className="text-ink-muted mt-6 max-w-[55ch] text-base leading-relaxed md:text-lg">
              SDK-urile sunt deja publicate pe Maven Central, CocoaPods trunk și
              npm. Aplicația mobilă urmează curând. Vezi cum integrezi într-un
              produs nou sau cum instalezi pe device-ul tău.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button href="/dezvoltatori" arrow>
                Vezi SDK-urile
              </Button>
              <Button href="/aplicatie" variant="secondary">
                Vezi aplicația
              </Button>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Notă editorială
              </div>
              <p className="text-ink-muted mt-4 max-w-[44ch] text-[14px] leading-relaxed">
                eidromania.ro a construit primul SDK comercial pentru CEI - fără
                ei, ecosistemul ar fi fost mai sărac. Această pagină nu e o
                concurență ostilă, e o alternativă axată diferit. Dacă ești la
                ei și nu te-am convins,{" "}
                <em className="text-ink font-display italic">rămâneți acolo</em>
                . Dacă te-am convins, ne găsești pe GitHub.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
