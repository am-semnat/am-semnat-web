import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PdfVerifier } from "./PdfVerifier";

export const metadata: Metadata = {
  title: "Verificare semnătură PDF",
  description:
    "Verifici un PDF semnat cu CEI direct în browser. Verificare PAdES B-B on-device împotriva ancorelor DGEP - fișierul nu părăsește browser-ul.",
};

const explainer = [
  {
    index: "01 / 03",
    title: "Ce verificăm",
    body: "Semnătura CMS, lanțul până la DGEP (RO CEI MAI Root-CA + Sub-CA), legătura signingCertificateV2 și hash-ul pe ByteRange. Un atac care înlocuiește certificatul semnatarului e respins.",
  },
  {
    index: "02 / 03",
    title: "Ce nu verificăm încă",
    body: "Timestamp-uri (PAdES B-T), revocare prin CRL / OCSP / LTV. signedAt vine din atributul signingTime, nu dintr-un Timestamp Token. Aliniat cu @amsemnat/verifier 0.1.x.",
  },
  {
    index: "03 / 03",
    title: "On-device",
    body: "Fișierul tău nu pleacă din browser. Tot codul de verificare e în @amsemnat/verifier, deschis pe npm - poți face audit, fork, sau muta verificarea pe server-ul tău.",
  },
];

const anchors = [
  {
    file: "ro-cei-mai-root-ca.cer",
    cn: "RO CEI MAI Root-CA",
    sha256:
      "b7:a7:66:f5:22:18:c8:08:3e:93:6f:9a:b0:85:e9:7c:67:67:1e:cd:4f:d3:06:9b:64:1c:63:80:72:e4:4b:1d",
  },
  {
    file: "ro-cei-mai-sub-ca.cer",
    cn: "RO CEI MAI Sub-CA",
    sha256:
      "b5:12:f9:2a:6d:15:60:08:d9:3a:b5:ff:96:90:be:87:4a:fc:34:01:ce:03:06:f4:77:f1:87:79:95:93:da:80",
  },
];

const ANCHORS_LAST_REFRESHED = "27 aprilie 2026";

export default function VerificarePdfPage() {
  return (
    <>
      <section className="border-rule relative overflow-hidden border-b">
        <Container className="pt-12 pb-14 md:pt-20 md:pb-20">
          <div className="max-w-3xl">
            <Eyebrow index="U">Unelte · Verificare PDF</Eyebrow>
            <h1 className="font-display text-ink mt-7 text-[clamp(2.5rem,4.75vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em]">
              Verifică semnăturile{" "}
              <em className="font-light italic">direct în browser</em>.
            </h1>
            <p className="text-ink-muted mt-7 max-w-[55ch] text-lg leading-relaxed md:text-xl">
              Trage un PDF semnat cu CEI și primești înapoi cine a semnat, când
              și dacă semnătura ține până la DGEP. Verificarea rulează local -
              fișierul nu părăsește browser-ul.
            </p>
          </div>
        </Container>
      </section>

      <Section
        index="01"
        label="Verificare"
        title={
          <>
            Trage un <em className="font-light italic">PDF semnat</em> aici.
          </>
        }
        intro="Format suportat: PAdES B-B - produs de aplicațiile AmSemnat și de orice flux eIDAS-compatibil. Pentru semnături multi-semnatar primești câte un rezultat per semnătură."
      >
        <PdfVerifier />
      </Section>

      <Section
        index="02"
        label="Cum funcționează"
        title={
          <>
            Ce presupune <em className="font-light italic">verificarea</em>.
          </>
        }
        bordered
      >
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          {explainer.map((c) => (
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
        index="03"
        label="Ancore de încredere"
        title={
          <>
            Verificarea închide lanțul la{" "}
            <em className="font-light italic">DGEP</em>.
          </>
        }
        bordered
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="text-ink-muted text-[15px] leading-relaxed md:col-span-7 md:text-[16px]">
            <p>
              Semnăturile produse cu CEI au la bază un certificat emis de{" "}
              <strong className="text-ink font-medium">
                RO CEI MAI Sub-CA
              </strong>
              , care la rândul lui e semnat de{" "}
              <strong className="text-ink font-medium">
                RO CEI MAI Root-CA
              </strong>{" "}
              - ambele publicate de DGEP / MAI. Pentru ca verificarea să aibă
              sens, certificatul semnatarului trebuie să se închidă într-una din
              aceste ancore.
            </p>
            <p className="mt-5">
              Le-am împachetat în site - sunt fișiere DER publice, nu material
              sensibil - ca să nu trebuiască să le descarci tu de pe{" "}
              <a
                href="https://hub.mai.gov.ro/cei/info/descarca-cert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-cobalt-600 underline decoration-dotted underline-offset-4 transition-colors"
              >
                hub.mai.gov.ro/cei
              </a>
              . Dacă MAI rotește o autoritate, reactualizăm fișierele și
              facem redeploy.
            </p>
            <p className="text-ink-faint mt-5 font-mono text-[11px] tracking-[0.18em] uppercase">
              Ultima reîmprospătare · {ANCHORS_LAST_REFRESHED}
            </p>
          </div>
          <aside className="md:col-span-5">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Fișiere împachetate
              </div>
              <dl className="mt-5 space-y-6">
                {anchors.map((a) => (
                  <div key={a.file}>
                    <dt className="font-mono text-[12px]">
                      <span className="text-ink font-medium">{a.cn}</span>
                      <span className="text-ink-faint ml-2">· {a.file}</span>
                    </dt>
                    <dd className="text-ink-muted mt-2 break-all font-mono text-[11px] leading-[1.55] tabular-nums">
                      <span className="text-ink-faint mr-1.5 tracking-[0.18em] uppercase">
                        sha256
                      </span>
                      {a.sha256}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        index="04"
        label="Pentru dezvoltatori"
        title={
          <>
            Aceeași verificare,{" "}
            <em className="font-light italic">în codul tău</em>.
          </>
        }
        bordered
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="text-ink-muted max-w-[60ch] text-[15px] leading-relaxed md:col-span-8 md:text-[16px]">
            <p>
              Pagina asta folosește{" "}
              <a
                href="https://www.npmjs.com/package/@amsemnat/verifier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-cobalt-600 underline decoration-dotted underline-offset-4 transition-colors"
              >
                @amsemnat/verifier
              </a>{" "}
              direct în browser. Același pachet rulează în Node 20+, Cloudflare
              Workers, Deno și Bun - îl poți pune pe server, într-o funcție
              edge, sau alături de bridge-ul Expo / iOS / Android.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/dezvoltatori" arrow>
                Vezi SDK-urile
              </Button>
              <Button
                href="https://www.npmjs.com/package/@amsemnat/verifier"
                variant="secondary"
                external
              >
                npm · @amsemnat/verifier
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
