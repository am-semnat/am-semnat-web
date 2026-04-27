import type { Metadata } from "next";
import { type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Cum construim",
  description:
    "Cum construim AmSemnat - AI ca partener de cod, factor uman pe deciziile de securitate. Procesul concret prin care livrăm SDK-uri pentru cartea electronică de identitate.",
};

type Block = {
  index: string;
  title: string;
  body: ReactNode;
};

const blocks: Block[] = [
  {
    index: "01",
    title: "De ce scriem despre asta",
    body: (
      <>
        AmSemnat are de a face cu identitatea și semnătura - două dintre componentele
        critice pentru încredere într-un produs digital. Codul care le
        manipulează merită să fie auditabil. De aceea suntem deschiși despre
        cod, dar și despre{" "}
        <em className="text-ink font-display italic">cum producem codul</em>. Nu
        ascundem AI-ul, nu îl etichetăm ca selling point. Îl prezentăm ca pe
        oricare alt instrument de coding - documentat, cu limitele lui, cu loc
        clar pentru factorul uman.
      </>
    ),
  },
  {
    index: "02",
    title: "Ce face AI-ul",
    body: (
      <>
        Implementare, refactoring, scaffolding pentru teste, draft-uri de
        documentație, paritate cross-platform între SDK-urile Android, iOS și
        Expo. Concret - Claude Code ca partener de pair programming, scriind cod
        sub direcția unui developer și cu fiecare modificare verificată înainte
        să intre pe ramura principală. Pentru un proiect care trebuie să livreze
        același API în trei limbaje (Kotlin, Swift, TypeScript), automatizarea e
        esențială pentru menținerea unui API consistent în timp.
      </>
    ),
  },
  {
    index: "03",
    title: "Ce stă pe umerii unui om",
    body: (
      <>
        Aceasta e secțiunea cea mai importantă a paginii.
        <ul className="mt-5 space-y-3 [&>li]:relative [&>li]:pl-6">
          <li className="before:bg-cobalt-500 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-3">
            <strong className="text-ink font-medium">
              Decizii de arhitectură și suprafață API publică.
            </strong>{" "}
            Cum arată tipurile, ce câmpuri se expun, cum se structurează
            erorile, ce e public versus internal - toate sunt decizii umane.
          </li>
          <li className="before:bg-cobalt-500 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-3">
            <strong className="text-ink font-medium">
              Verificarea corectitudinii față de specificații.
            </strong>{" "}
            ICAO 9303 (pentru passive auth, PACE, BAC), eIDAS (pentru niveluri
            de semnătură), formatele PAdES - toate sunt citite cap-coadă de un
            om și verificate cu testele dedicate.
          </li>
          <li className="before:bg-cobalt-500 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-3">
            <strong className="text-ink font-medium">
              Comportamentul applet-urilor de semnare.
            </strong>{" "}
            CEI-ul are două applet-uri principale (eDATA pentru identitate,
            signing pentru semnătura PAdES). Comportamentul lor real față de
            specificația documentată - verificat manual contra unui CEI fizic la
            fiecare release. Niciun model AI nu testează un card real.
          </li>
          <li className="before:bg-cobalt-500 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-3">
            <strong className="text-ink font-medium">
              Review-ul de securitate.
            </strong>{" "}
            Înainte de fiecare release. Codul criptografic critic (PACE, Chip
            Authentication, semnare) e citit linie cu linie, comparat cu
            specificația, executat contra vectorilor de test cunoscuți.
          </li>
          <li className="before:bg-cobalt-500 before:absolute before:top-2.5 before:left-0 before:h-1 before:w-3">
            <strong className="text-ink font-medium">
              Decizii de release și versiuni.
            </strong>{" "}
            Ce intră în 0.1.x versus ce așteaptă 0.2, când se face lockstep
            release pentru schimbări de API, ce se merge în CHANGELOG - sunt
            decizii umane care țin angajamentul „frozen public API for 0.x”
            credibil.
          </li>
        </ul>
      </>
    ),
  },
  {
    index: "04",
    title: "Cum verificăm",
    body: (
      <>
        Procesul concret, în patru etape:
        <ol className="text-ink-muted mt-5 space-y-3 [&>li]:relative [&>li]:pl-8">
          <li className="text-cobalt-600 before:absolute before:top-0.5 before:left-0 before:font-mono before:text-[11px] before:tracking-[0.18em] before:tabular-nums before:content-['01.']">
            <span className="text-ink-muted">
              <strong className="text-ink font-medium">
                Testare contra CEI fizice.
              </strong>{" "}
              Fiecare release e testat manual cu carduri reale înainte să fie
              publicat. Citire, verificare, semnare - întregul flux end-to-end.
            </span>
          </li>
          <li className="text-cobalt-600 before:absolute before:top-0.5 before:left-0 before:font-mono before:text-[11px] before:tracking-[0.18em] before:tabular-nums before:content-['02.']">
            <span className="text-ink-muted">
              <strong className="text-ink font-medium">
                Verificare PAdES contra validatoare terțe.
              </strong>{" "}
              Semnăturile produse sunt deschise în Adobe Acrobat, verificate
              contra CSCA-ului DGP. Validatori independenți, nu doar testele
              noastre.
            </span>
          </li>
          <li className="text-cobalt-600 before:absolute before:top-0.5 before:left-0 before:font-mono before:text-[11px] before:tracking-[0.18em] before:tabular-nums before:content-['03.']">
            <span className="text-ink-muted">
              <strong className="text-ink font-medium">
                Local-dev loopback contra aplicației consumatoare.
              </strong>{" "}
              Înainte de orice publicare pe Maven / Pods / npm, SDK-ul e linked
              local în aplicația mobilă AmSemnat și testat împotriva fluxului
              real de semnare.
            </span>
          </li>
          <li className="text-cobalt-600 before:absolute before:top-0.5 before:left-0 before:font-mono before:text-[11px] before:tracking-[0.18em] before:tabular-nums before:content-['04.']">
            <span className="text-ink-muted">
              <strong className="text-ink font-medium">
                Pre-publish smoke test.
              </strong>{" "}
              Ultimul pas înainte de tag-uri și publicare. Aplicația
              consumatoare e compilată și rulată cu artifact-ul exact care va
              merge în registru. Acest pas a prins regresiuni reale care altfel
              ar fi ajuns la utilizatori.
            </span>
          </li>
        </ol>
      </>
    ),
  },
  {
    index: "05",
    title: "Limitări pe care le recunoaștem",
    body: (
      <>
        Codul produs cu asistență AI poate avea erori subtile, mai ales în
        criptografie. De exemplu - o constantă ușor greșită într-o derivare de
        cheie, un parametru de padding inversat, o ordonare a hash-urilor
        mutată. Sunt erorile pe care un compilator nu le prinde și care apar
        doar la teste reale.
        <p className="mt-4">
          De aceea zonele critice criptografic - PACE, Chip Authentication,
          semnătura PAdES - au teste dedicate cu vectori cunoscuți și review
          uman pentru fiecare modificare. Nu ne ascundem după AI dacă apare un
          bug. Dacă găsești unul, deschide un issue pe GitHub și îl rezolvăm pe
          ramura principală cât de repede putem.
        </p>
      </>
    ),
  },
  {
    index: "06",
    title: "De ce nu suntem certificați eIDAS QTSP",
    body: (
      <>
        Suntem un set de instrumente. Semnăturile PAdES sunt generate cu cheia
        ta. Nu emitem certificate și nu operăm o autoritate de certificare.
        Statutul de QTSP (Qualified Trust Service Provider) cerut de eIDAS
        pentru semnături electronice calificate (QES) presupune audit,
        asigurări, infrastructură supravegheată - un set de obligații care n-au
        sens pentru un toolkit open-source.
        <p className="mt-4">
          Pentru flux complet QES, ai nevoie de un emitent autorizat - certSIGN,
          Trans Sped, Alfasign etc. Suntem aval de ei, nu un substitut. Pentru
          AdES (semnătură electronică avansată, recunoscută legal pentru
          majoritatea cazurilor), AmSemnat împreună cu certificatul de pe CEI-ul
          tău e suficient.
        </p>
      </>
    ),
  },
];

export default function CumConstruimPage() {
  return (
    <>
      <Container className="pt-12 md:pt-20">
        <Eyebrow index="H">Cum construim</Eyebrow>
        <h1 className="font-display text-ink mt-7 max-w-[20ch] text-[clamp(2.5rem,4.5vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em]">
          AI ca partener de cod,{" "}
          <em className="font-light italic">factor uman</em> pe deciziile de
          securitate.
        </h1>
        <p className="text-ink-muted mt-7 max-w-[58ch] text-lg leading-relaxed md:text-xl">
          AmSemnat e construit cu Claude Code ca partener de pair programming.
          Asta înseamnă cod scris mai rapid și paritate cross-platform între
          SDK-uri. Nu înseamnă că lăsăm deciziile critice pe seama AI-ului. Uite mai exact unde intervine
          AI-ul în proces și unde rămâne factorul uman:
        </p>
      </Container>

      <Section className="mt-16 md:mt-24" containerClassName="!pt-0">
        <div className="border-rule-strong divide-rule divide-y border-t">
          {blocks.map((b) => (
            <section
              key={b.index}
              className="grid grid-cols-1 gap-x-10 gap-y-4 py-10 md:grid-cols-12 md:py-12"
            >
              <div className="md:col-span-4">
                <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase tabular-nums">
                  §{b.index}
                </div>
                <h2 className="font-display text-ink mt-3 text-[1.5rem] leading-[1.15] tracking-tight md:text-[1.7rem]">
                  {b.title}
                </h2>
              </div>
              <div className="text-ink-muted max-w-[64ch] text-[15.5px] leading-relaxed md:col-span-8 md:text-[16.5px]">
                {b.body}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <Section bordered className="text-center md:text-left">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <Eyebrow index="↗">Vezi codul</Eyebrow>
            <h2 className="font-display text-ink mt-6 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.05] tracking-tight">
              Tot ce am descris <em className="font-light italic">e public</em>.
            </h2>
            <p className="text-ink-muted mt-6 max-w-[55ch] text-base leading-relaxed md:text-lg">
              Cele trei SDK-uri Android, iOS și Expo. CHANGELOG cu fiecare
              release. Tagurile semantice 0.x. Fiecare se poate verifica direct.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button href="/dezvoltatori" arrow>
                Vezi SDK-urile
              </Button>
              <Button href="/contact" variant="secondary">
                Întrebări?
              </Button>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Disclaimer
              </div>
              <p className="text-ink-muted mt-4 max-w-[44ch] text-[14px] leading-relaxed">
                AmSemnat nu e o aplicație generată automat. În spate e un autor,
                care își asumă commit-urile, ia deciziile și răspunde de bug-uri.
                AI-ul e doar un instrument care accelerează scrierea codului.
                Arhitectura, securitatea și release-urile rămân ceea ce au fost
                mereu în software bun: muncă umană atentă.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
