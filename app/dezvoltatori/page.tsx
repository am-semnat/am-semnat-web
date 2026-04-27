import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { InstallSnippet } from "@/components/marketing/InstallSnippet";
import { RepoCard } from "@/components/marketing/RepoCard";
import { CodeTabs, type CodeTab } from "@/components/marketing/CodeTabs";
import { PACKAGES } from "@/lib/packages";
import { GITHUB_ORG_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pentru dezvoltatori",
  description:
    "SDK-uri AmSemnat - open source, gratuite, complete. Android (Maven Central), iOS (CocoaPods + SwiftPM), Expo / React Native (npm).",
};

const capabilities = [
  {
    index: "01 / 03",
    title: "Citire",
    body: "Scanare MRZ, handshake PACE-CAN, citire eDATA. Toate CEI emise după 2025. NFC nativ pe Android și iOS, plus modul low-level pentru când vrei să controlezi sesiunea.",
  },
  {
    index: "02 / 03",
    title: "Verificare",
    body: "Passive authentication completă cu CSCA furnizat de tine. Chip Authentication ca semnal (chipAuthenticated: Bool).",
  },
  {
    index: "03 / 03",
    title: "Semnare",
    body: "Semnături PAdES native cu certificatul de pe applet-ul de semnătură al CEI-ului. eIDAS-conform, fără server, fără intermediari, fără chei stocate undeva.",
  },
];

const quickStart: CodeTab[] = [
  {
    id: "kotlin",
    label: "Kotlin",
    language: "Kotlin · Android",
    code: `import ro.amsemnat.sdk.AmSemnat

lifecycleScope.launch {
    val identity = AmSemnat.read(
        activity = this@MyActivity,
        can = "123456",
        onProgress = { progress ->
            Log.d("AmSemnat", progress.stage.name)
        }
    )
    println(identity.firstName)
    println(identity.documentNumber)
}`,
  },
  {
    id: "swift",
    label: "Swift",
    language: "Swift · iOS 15+",
    code: `import AmSemnat

let identity = try await AmSemnat.read(
    can: "123456",
    onProgress: { progress in
        print(progress.stage)
    }
)
print(identity.firstName)
print(identity.documentNumber)`,
  },
  {
    id: "typescript",
    label: "TypeScript",
    language: "TypeScript · Expo / React Native",
    code: `import { AmSemnat } from '@amsemnat/expo-sdk';

const identity = await AmSemnat.read({
  can: '123456',
  onProgress: (progress) => {
    console.log(progress.stage);
  },
});

console.log(identity.firstName);
console.log(identity.documentNumber);`,
  },
];

const roadmap = [
  {
    status: "în progres",
    title: "Active Authentication",
    body: "Complementar la passive auth - semnătură challenge-response cu cheia chip-ului.",
  },
  {
    status: "planificat",
    title: "Documentație dedicată",
    body: "docs.amsemnat.ro cu API reference structurată, generată din KDoc / DocC. Până atunci: README-urile pe GitHub.",
  },
];

export default function DezvoltatoriPage() {
  return (
    <>
      <section className="border-rule relative overflow-hidden border-b">
        <Container className="pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="D">SDK-uri AmSemnat</Eyebrow>
              <h1 className="font-display text-ink mt-7 text-[clamp(2.5rem,4.75vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em]">
                SDK-uri <em className="font-light italic">open source</em>{" "}
                pentru CEI.
              </h1>
              <p className="text-ink-muted mt-7 max-w-[55ch] text-lg leading-relaxed md:text-xl">
                Trei platforme, un API comun. Citire, verificare, semnare PAdES
                - pe Android (Maven Central), iOS (CocoaPods + SwiftPM) și Expo
                / React Native (npm). Apache 2.0, gratuit, fără chei de licență.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="#quick-start" arrow>
                  Quick start
                </Button>
                <Button href={GITHUB_ORG_URL} variant="secondary" external>
                  GitHub
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <InstallSnippet defaultId="expo" />
              <p className="text-ink-faint mt-3 text-center font-mono text-[10px] tracking-[0.18em] uppercase">
                Selectează platforma · Apache 2.0
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section
        index="01"
        label="Capabilități"
        title={
          <>
            Citire, verificare, <em className="font-light italic">semnare</em>.
          </>
        }
        intro="Un API comun în trei limbaje. Aceleași tipuri de erori, aceeași normalizare a datelor (toate datele ISO yyyy-mm-dd), aceleași etape de progres."
      >
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {capabilities.map((c) => (
            <article
              key={c.index}
              className="bg-paper hover:bg-paper-elevated p-8 transition-colors duration-200 md:p-10"
            >
              <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                {c.index}
              </div>
              <h3 className="font-display text-ink mt-6 text-[1.6rem] leading-[1.1] tracking-tight md:text-[1.75rem]">
                {c.title}
              </h3>
              <p className="text-ink-muted mt-4 text-[15px] leading-relaxed">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        index="02"
        label="Pachete"
        title={<>Trei platforme, o singură versiune.</>}
        intro="Versiunile cresc împreună când se schimbă API-ul public. Fix-urile interne rămân independente."
        bordered
      >
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <RepoCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </Section>

      <Section
        index="03"
        label="Quick start"
        title={
          <>
            Cinci linii de cod și ai un{" "}
            <em className="font-light italic">RomanianIdentity</em>.
          </>
        }
        intro="Pune CAN-ul (cele 6 cifre de pe CEI), apropie-l de spatele telefonului, primești obiectul tipizat. Progres emis pe etape, gata pentru UI."
        bordered
        className="scroll-mt-20"
        containerClassName="[&]:pt-20 [&]:md:pt-28"
      >
        <div className="anchor-target" id="quick-start" />
        <CodeTabs tabs={quickStart} defaultId="typescript" />
        <p className="text-ink-faint mt-6 max-w-[60ch] font-mono text-[11px] tracking-[0.16em] uppercase">
          Fluxurile de semnare PAdES și verificare passive sunt în README-uri -
          vezi linkurile de la pachete.
        </p>
      </Section>

      <Section
        index="04"
        label="Passive authentication"
        title={
          <>
            Verifici că documentul vine{" "}
            <em className="font-light italic">de la stat</em>, nu de la un
            dispozitiv fals.
          </>
        }
        intro="Passive authentication confirmă că semnătura statului (Document Signer Certificate) e validă și se validează până la o autoritate (CSCA) în care ai încredere."
        bordered
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="text-ink-muted text-[15px] leading-relaxed md:col-span-7 md:text-[16px]">
            <p>
              SDK-urile fac toată verificarea - calculează hash-urile pe datele
              citite din chip, le compară cu Document Security Object semnat de
              stat, validează lanțul de certificate. Singurul lucru pe care ți-l
              cerem: trust list-ul.
              <strong className="text-ink font-medium">
                {" "}
                Nu împachetăm certificate CSCA în SDK
              </strong>{" "}
              - nu vrem să decidem noi în cine ai încredere când codul tău
              rulează în 2030.
            </p>
            <p className="mt-5">
              Practic: descarci CSCA-ul publicat de DGP / MAI, îl pasezi ca
              parametru la verifyPassiveOffline(), și SDK-ul îți spune dacă
              chip-ul e autentic plus dacă lanțul s-a închis. Dacă nu vrei să
              faci asta on-device -{" "}
              <a
                href="https://www.npmjs.com/package/@amsemnat/verifier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-cobalt-600 underline decoration-dotted underline-offset-4 transition-colors"
              >
                @amsemnat/verifier
              </a>{" "}
              îți permite să muți validarea pe server, sau o folosești{" "}
              <Link
                href="/unelte/verificare-pdf"
                className="text-ink hover:text-cobalt-600 underline decoration-dotted underline-offset-4 transition-colors"
              >
                direct în browser pe pagina noastră de verificare
              </Link>
              .
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Două PKI-uri MAI
              </div>
              <dl className="mt-5 space-y-5">
                <div>
                  <dt className="text-ink text-[14px] font-medium">
                    DGP · CSCA Romania
                  </dt>
                  <dd className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                    Pentru passive authentication. Semnatarul Document Security
                    Object-ului.
                  </dd>
                </div>
                <div>
                  <dt className="text-ink text-[14px] font-medium">
                    DGEP · RO CEI MAI Root/Sub-CA
                  </dt>
                  <dd className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                    Pentru semnături PAdES. Emite certificatul de pe applet-ul
                    de semnătură.
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <Section index="05" label="Roadmap" title={<>Ce urmează.</>} bordered>
        <ul className="border-rule-strong divide-rule divide-y border-y">
          {roadmap.map((item, i) => (
            <li
              key={item.title}
              className="grid grid-cols-1 gap-x-10 gap-y-3 py-7 md:grid-cols-12 md:py-8"
            >
              <div className="flex items-center gap-4 md:col-span-3">
                <span className="text-cobalt-600 font-mono text-[11px] tracking-[0.18em] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="border-rule-strong text-ink-muted rounded-[2px] border px-2 py-0.5 font-mono text-[10px] tracking-[0.16em] uppercase">
                  {item.status}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-display text-ink text-[1.25rem] leading-[1.2] tracking-tight md:text-[1.4rem]">
                  {item.title}
                </h3>
                <p className="text-ink-muted mt-2 max-w-[60ch] text-[14px] leading-relaxed md:text-[15px]">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        index="06"
        label="Licență"
        title={
          <>
            Apache 2.0, <em className="font-light italic">cu o stea</em> mică.
          </>
        }
        bordered
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="text-ink-muted max-w-[60ch] text-[15px] leading-relaxed md:col-span-7 md:text-[16px]">
            <p>
              Tot codul AmSemnat e Apache 2.0 - folosire comercială, modificare,
              redistribuție, totul permis. Singura cerință e să păstrezi
              notițele de copyright și să incluzi licența.
            </p>
            <p className="mt-5">
              Steaua: SDK-ul Android depinde tranzitiv de{" "}
              <strong className="text-ink font-medium">JMRTD și SCUBA</strong>{" "}
              (LGPL-2.1+) pentru parsing-ul ICAO 9303 și BAC/PACE.
              Compatibilitatea LGPL cu produsul tău (mai ales pentru
              redistribuție compilată) merită verificată.
            </p>
            <p className="mt-5">
              Mai multe informații în secțiunea de licență a fiecărui repo de pe
              GitHub - vezi linkurile de la pachete.
            </p>
            <p className="mt-5">SDK-urile iOS și Expo nu au dependențe LGPL.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
