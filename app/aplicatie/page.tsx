import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { AppDownloadCTA } from "@/components/marketing/AppDownloadCTA";
import { AppHeroVisual } from "@/components/marketing/AppHeroVisual";
import { FAQ, type FaqItem } from "@/components/marketing/FAQ";

export const metadata: Metadata = {
  title: "Aplicația AmSemnat",
  description:
    "Aplicația mobilă AmSemnat - semnezi PDF-uri cu CEI-ul tău, gratuit pentru semnare individuală. Sesiuni de semnare în grup în planul Echipe. OIDC, fără KYC, local-first.",
};

const groupSteps = [
  {
    n: "01",
    title: "Încarci PDF-ul",
    body: "Document local sau primit prin email. Aplicația deschide o sesiune de semnare nouă.",
  },
  {
    n: "02",
    title: "Distribui link-ul",
    body: "Documentul se criptează local și pleacă pe relay. Aplicația generează un link de sesiune și un cod de securitate — le partajezi cu toți semnatarii pe canalele tale.",
  },
  {
    n: "03",
    title: "Fiecare semnează",
    body: "Linkul deschide aplicația (sau pagina de download dacă nu o are încă). Semnatarul introduce codul, semnează cu propriul CEI. Sesiunea se blochează pe rând, ca să nu se calce semnăturile.",
  },
  {
    n: "04",
    title: "Documentul se închide",
    body: "Când ultima semnătură intră, PDF-ul final e disponibil pentru toți participanții. eIDAS-conform, PAdES, valabil offline.",
  },
];

const padesFacts = [
  { label: "Format", value: "PDF · update incremental" },
  { label: "Standard", value: "PAdES Baseline B-B" },
  { label: "Algoritm", value: "ECDSA P-384 / SHA-384" },
  { label: "Certificat", value: "eDATA signing applet · DGEP CEI MAI" },
  { label: "Nivel eIDAS", value: "Semnătură electronică avansată (AdES)" },
];

const faq: FaqItem[] = [
  {
    question: "E gratuit?",
    answer: (
      <>
        Da, pentru semnare individuală - pentru totdeauna. Aplicația
        mobilă, autentificarea OIDC și SDK-urile native sunt gratuite,
        fără limite per dispozitiv, fără KYC, fără cont obligatoriu.{" "}
        <strong className="text-ink font-medium">
          Sesiunile de semnare în grup
        </strong>{" "}
        sunt parte din planul Echipe - un plan dedicat pentru
        organizații, cu pricing per echipă.{" "}
        <Link
          href="/preturi"
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
        >
          Vezi prețurile →
        </Link>
      </>
    ),
  },
  {
    question: "Funcționează cu CEI-ul meu?",
    answer: (
      <>
        Da, dacă ai cartea electronică de identitate emisă după 2025 (cu
        chip NFC).
      </>
    ),
  },
  {
    question: "Ce e CAN-ul și de unde îl iau?",
    answer: (
      <>
        CAN (Card Access Number) e codul de 6 cifre tipărit pe fața
        CEI-ului, în partea de jos. E necesar pentru handshake-ul PACE care
        deblochează chip-ul.
      </>
    ),
  },
  {
    question: "Are validitate juridică ce semnez aici?",
    answer: (
      <>
        Semnătura produsă e o{" "}
        <strong className="text-ink font-medium">
          semnătură electronică avansată
        </strong>{" "}
        (AdES) conform eIDAS - recunoscută legal în România și UE.
        Pentru contexte care cer{" "}
        <strong className="text-ink font-medium">semnătură calificată</strong>{" "}
        (QES - anumite acte notariale, contracte specifice), ai nevoie de
        un certificat emis de un Trust Service Provider eIDAS calificat
        (certSIGN, Trans Sped etc.). AmSemnat folosește certificatul de
        pe CEI-ul tău, care e AdES, nu QES.
      </>
    ),
  },
  {
    question: "Cum diferă de ROeID?",
    answer: (
      <>
        ROeID e aplicația oficială a statului - funcționează bine pentru
        cazul de bază: deschizi aplicația, alegi un PDF, îl semnezi.
        AmSemnat acoperă două lucruri pe care ROeID nu le face:{" "}
        <strong className="text-ink font-medium">
          sesiuni de semnare în grup
        </strong>{" "}
        (multi-semnatar, link-uri partajate per persoană) și{" "}
        <strong className="text-ink font-medium">
          intrare frictionless
        </strong>{" "}
        (fără pre-onboarding KYC cu face-scan și legare la portalul gov).
        Pentru integrări cu portalurile statului (CNAS, ANAF, ghiseul.ro)
        rămâne ROeID - noi nu ne bagăm.
      </>
    ),
  },
  {
    question: "Datele mele unde merg?",
    answer: (
      <>
        Pe device-ul tău. Aplicația citește chip-ul prin NFC, produce
        semnătura local cu cheia de pe applet-ul de signing, și salvează
        PDF-ul semnat unde îi spui. Pentru sesiuni de semnare în grup,
        documentul e transmis criptat printr-un canal de relay și
        decriptat doar la semnatarii autorizați. Nu păstrăm copii
        cleartext, nu logăm conținutul, nu construim profiluri.
      </>
    ),
  },
];

export default function AplicatiePage() {
  return (
    <>
      <section className="border-rule relative overflow-hidden border-b">
        <Container className="pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="A">Aplicație mobilă</Eyebrow>
              <h1 className="font-display text-ink mt-7 max-w-[18ch] text-[clamp(2.5rem,4.75vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em]">
                Citește, semnează,{" "}
                <em className="font-light italic">partajează</em>.
              </h1>
              <p className="text-ink-muted mt-7 max-w-[50ch] text-lg leading-relaxed md:text-xl">
                Aplicația AmSemnat - pentru iOS și Android. Gratuit
                pentru semnare individuală, pentru totdeauna. Sesiuni
                de semnare în grup în planul Echipe. Local-first, fără
                KYC.
              </p>
              <div className="mt-10">
                <AppDownloadCTA />
              </div>

              <dl className="mt-14 grid max-w-xl grid-cols-3 gap-x-6">
                <div className="border-ink/15 border-t pt-3">
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
                    Cont
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13px] font-medium">
                    Opțional · OIDC
                  </dd>
                </div>
                <div className="border-ink/15 border-t pt-3">
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
                    KYC
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13px] font-medium">
                    Niciun pas
                  </dd>
                </div>
                <div className="border-ink/15 border-t pt-3">
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
                    Date
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13px] font-medium">
                    Local-first
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <AppHeroVisual />
            </div>
          </div>
        </Container>
      </section>

      <Section
        index="01"
        label="Semnătură PAdES"
        title={
          <>
            Semnătură nativă pe chip,{" "}
            <em className="font-light italic">eIDAS-conform</em>.
          </>
        }
        intro="Cheia privată nu părăsește niciodată chip-ul. Semnătura se produce direct pe applet-ul de signing al CEI-ului, cu certificatul emis de DGEP CEI MAI. Rezultatul: un PDF cu PAdES Baseline B-B, citit de orice validator PAdES conform."
      >
        <dl className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y sm:grid-cols-2 md:grid-cols-5">
          {padesFacts.map((f) => (
            <div key={f.label} className="bg-paper p-6 md:p-7">
              <dt className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                {f.label}
              </dt>
              <dd className="text-ink mt-3 text-[14px] leading-snug font-medium">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        index="02"
        label="Citire CEI prin NFC"
        title={
          <>
            Apropii cardul,{" "}
            <em className="font-light italic">obții identitatea</em>.
          </>
        }
        intro="Introduci CAN-ul, apropii CEI-ul de spatele telefonului, aplicația face handshake PACE-CAN și citește chip-ul. Numele, prenumele, CNP-ul, data de naștere, emitentul - cu datele calendaristice normalizate la ISO yyyy-mm-dd, indiferent dacă vin din MRZ sau eDATA."
        bordered
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="text-ink-muted md:col-span-7 max-w-[60ch] text-[15px] leading-relaxed md:text-[16px]">
            <p>
              Sub capotă: protocol PACE conform ICAO 9303, citire eDATA
              (datele de identitate), passive authentication completă cu
              CSCA-ul publicat de DGP. Chip Authentication ca semnal de
              integritate.
            </p>
            <p className="mt-5">
              Aplicația nu salvează datele citite între sesiuni decât
              dacă alegi explicit să le păstrezi. Pentru cele mai multe
              fluxuri (semnare, partajare, autentificare OIDC), datele
              sunt în memorie cât timp e activă sesiunea, apoi dispar.
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Câmpuri citite
              </div>
              <ul className="text-ink-muted mt-5 space-y-2 font-mono text-[12px] tabular-nums">
                <li>· firstName · lastName</li>
                <li>· cnp · dateOfBirth</li>
                <li>· documentNumber · dateOfExpiry</li>
                <li>· issuingAuthority · issuingDate</li>
                <li>· sex · nationality</li>
                <li>· placeOfBirth · address</li>
                <li>· faceImage · signatureImage</li>
                <li>· chipAuthenticated</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        index="03"
        label="OIDC autentificare"
        title={
          <>
            Logare cu CEI-ul,{" "}
            <em className="font-light italic">direct</em> în aplicația
            ta.
          </>
        }
        intro="Pentru servicii care vor să verifice o identitate eID-confirmată fără să stocheze datele utilizatorului - AmSemnat poate funcționa ca provider OIDC. Utilizatorul citește o dată CEI-ul în aplicația noastră, apoi se autentifică în aplicația ta cu un click."
        bordered
      >
        <p className="text-ink-muted max-w-[60ch] text-[15px] leading-relaxed md:text-[16px]">
          Detalii de integrare în SDK-uri sau în documentația dedicată
          (planificată). Pentru proof-of-concept, contactează-ne pe{" "}
          <Link
            href="/contact"
            className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
          >
            pagina de contact
          </Link>
          .
        </p>
      </Section>

      <Section
        index="04"
        label="Pentru echipe · Planul Echipe"
        title={
          <>
            Mai mulți semnatari, un singur{" "}
            <em className="font-light italic">flux</em>.
          </>
        }
        intro="Singura aplicație din România care semnează PDF-uri cu CEI-ul în flux multi-semnatar. Setezi numărul de semnatari, distribui un link de sesiune plus un cod de securitate, fiecare semnează cu propriul CEI. Disponibil în planul Echipe."
        bordered
      >
        <ol className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-2 lg:grid-cols-4">
          {groupSteps.map((s) => (
            <li
              key={s.n}
              className="bg-paper hover:bg-paper-elevated p-7 transition-colors duration-200 md:p-8"
            >
              <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                Pas {s.n}
              </div>
              <h3 className="font-display text-ink mt-5 text-[1.35rem] leading-[1.15] tracking-tight md:text-[1.5rem]">
                {s.title}
              </h3>
              <p className="text-ink-muted mt-3 text-[14px] leading-relaxed">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="text-ink-faint mt-8 max-w-[60ch] font-mono text-[11px] tracking-[0.16em] uppercase">
          Notă · Sesiunile multi-semnatar cu dashboard administrat sosesc
          în versiunea web (planificat). Modul mobil-only cu link-uri
          partajate e disponibil de la lansare.
        </p>
        <div className="mt-10">
          <Button href="/preturi" arrow>
            Vezi planul Echipe
          </Button>
        </div>
      </Section>

      <Section
        index="05"
        label="Confidențialitate"
        title={
          <>
            Local-first,{" "}
            <em className="font-light italic">prin design</em>.
          </>
        }
        intro="Aplicația rulează autonom pe dispozitivul tău. Pentru fluxul de bază - citește, semnează, salvează - nu există server. Sesiunile multi-semnatar folosesc un canal de relay criptat end-to-end; payload-ul nu e citibil de noi."
        bordered
      >
        <ul className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {[
            {
              k: "Ce nu vedem",
              v: "Conținutul PDF-urilor. Datele citite din chip. Semnăturile produse. Cheile private - nu părăsesc CEI-ul.",
            },
            {
              k: "Ce nu colectăm",
              v: "Telemetrie. Crash logs cu PII. Adresa IP cu identificator persistent. Profile de utilizare.",
            },
            {
              k: "Ce nu cerem",
              v: "Face-scan. Liveness check. Legare la portaluri gov. Cont obligatoriu pentru fluxul de bază.",
            },
          ].map((b) => (
            <li
              key={b.k}
              className="bg-paper hover:bg-paper-elevated p-7 transition-colors duration-200 md:p-8"
            >
              <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase">
                {b.k}
              </div>
              <p className="text-ink mt-5 text-[15px] leading-relaxed">
                {b.v}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        index="06"
        label="Întrebări frecvente"
        title={<>Cinci întrebări care apar mereu.</>}
        bordered
      >
        <FAQ items={faq} />
        <div className="mt-12">
          <Button href="/contact" variant="secondary" arrow>
            Mai ai întrebări?
          </Button>
        </div>
      </Section>
    </>
  );
}
