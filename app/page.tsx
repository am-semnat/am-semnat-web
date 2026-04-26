import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/Card";
import { HeroVisual } from "@/components/marketing/HeroVisual";
import { InstallSnippet } from "@/components/marketing/InstallSnippet";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { GITHUB_ORG_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="border-rule relative overflow-hidden border-b">
        <Container className="pt-12 pb-20 md:pt-20 md:pb-32">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow index="00">
                Carte electronică de identitate · CEI
              </Eyebrow>

              <h1 className="font-display text-ink mt-8 text-[clamp(2.5rem,4.75vw+1rem,5rem)] leading-[0.98] tracking-[-0.02em]">
                Semnează <em className="font-light italic">PDF&#8209;uri</em> cu
                cartea ta electronică de identitate.
              </h1>

              <p className="text-ink-muted mt-8 max-w-[46ch] text-lg leading-relaxed md:text-xl">
                Aplicație gratuită pentru semnare individuală, SDK-uri Apache
                2.0 pentru dezvoltatori, plan dedicat pentru echipe. Codul e
                open. Semnătura e a ta.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/aplicatie" size="lg" arrow>
                  Vezi aplicația
                </Button>
                <Button href="/dezvoltatori" variant="secondary" size="lg">
                  Pentru dezvoltatori
                </Button>
              </div>

              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-x-6">
                <div className="border-ink/15 border-t pt-3">
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
                    Licență
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13px] font-medium">
                    Apache 2.0
                  </dd>
                </div>
                <div className="border-ink/15 border-t pt-3">
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
                    Pachete
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13px] font-medium">
                    Maven · Pods · npm
                  </dd>
                </div>
                <div className="border-ink/15 border-t pt-3">
                  <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
                    Standarde
                  </dt>
                  <dd className="text-ink mt-1.5 text-[13px] font-medium">
                    PAdES · ICAO 9303
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </Container>
      </section>

      <Section
        index="01"
        label="Diferențiatori"
        title={
          <>
            Trei lucruri pe care <em className="font-light italic">doar</em>{" "}
            AmSemnat le face.
          </>
        }
        intro="Open source pentru toți, gratuit pentru tine, plan dedicat pentru echipe. Citire, verificare, semnare - pe Android, iOS și Expo, fără chei de licență, fără factură anuală."
      >
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-3">
          <FeatureCard
            index="01 / 03"
            title={
              <>
                Gratuit pentru tine, <em className="italic">open source</em>{" "}
                pentru toți.
              </>
            }
            body="Aplicația mobilă pentru semnare individuală e gratuită pentru totdeauna. SDK-urile sunt Apache 2.0 - fără chei de licență, fără factură anuală, fără KYC."
          />
          <FeatureCard
            index="02 / 03"
            title={
              <>
                Semnături <em className="italic">PAdES native</em> pe CEI.
              </>
            }
            body="Citește chipul prin NFC, semnează PDF-ul cu certificatul tău, eIDAS-conform. Fără server, fără intermediari. SDK-uri pentru Android, iOS și Expo."
          />
          <FeatureCard
            index="03 / 03"
            title={
              <>
                Pentru echipe: sesiuni <em className="italic">în grup</em>.
              </>
            }
            body="Trimite un link clientului. Fiecare semnatar își aduce propriul CEI. Documentul se închide automat când toți au semnat. Disponibil în planul Echipe."
          />
        </div>
      </Section>

      <Section
        index="02"
        label="De ce open source"
        title={
          <>
            Identitatea merită{" "}
            <em className="font-light italic">să fie auditabilă</em>.
          </>
        }
        bordered
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="text-ink-muted max-w-[60ch] text-[16px] leading-relaxed md:col-span-7 md:text-[17px]">
            <p>
              Codul care îți citește buletinul electronic, verifică
              autenticitatea statului și produce semnături în numele tău merită
              să fie deschis. Nu pentru că deschiderea e o virtute abstractă -
              ci pentru că în 2026 nimeni nu mai are motive să accepte un sistem
              opac în lanțul de încredere care îi certifică identitatea.
            </p>
            <p className="mt-5">
              Apache 2.0 înseamnă: poți face un fork. Poți citi fiecare linie.
              Poți integra în produsul tău fără chei de licență. Poți audita,
              modifica și publica un fork sub propriul brand, dacă ai nevoie.
              Asta e angajamentul.
            </p>
            <div className="mt-8">
              <Button href={GITHUB_ORG_URL} variant="secondary" external arrow>
                <GitHubIcon className="h-4 w-4" />
                <span className="ml-1">Vezi codul pe GitHub</span>
              </Button>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="border-rule-strong border-t pt-6">
              <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
                Transparent governance
              </div>
              <ul className="mt-5 space-y-4">
                <li>
                  <div className="text-ink text-[14px] font-medium">
                    Public CHANGELOG
                  </div>
                  <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                    Per platform. Tags 0.x semantice, lockstep când suprafața
                    API se schimbă.
                  </p>
                </li>
                <li>
                  <div className="text-ink text-[14px] font-medium">
                    Frozen public API
                  </div>
                  <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                    Pentru toate versiunile 0.x. Type names, signatures și error
                    codes nu se schimbă fără major bump.
                  </p>
                </li>
                <li>
                  <div className="text-ink text-[14px] font-medium">
                    Local dev loopback
                  </div>
                  <p className="text-ink-muted mt-1 text-[13px] leading-relaxed">
                    Workflow public pentru testarea unei modificări nepublicate
                    înainte de release. Nu există magie privată.
                  </p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section
        index="03"
        label="Pentru dezvoltatori"
        title={
          <>
            Construiești ceva ce citește buletine sau{" "}
            <em className="font-light italic">semnează PDF-uri</em>?
          </>
        }
        intro="SDK-urile noastre sunt gratuite și open source. Un API comun în trei limbaje - Kotlin, Swift, TypeScript. Maven Central, CocoaPods, npm. Zero chei de licență."
        bordered
      >
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <InstallSnippet defaultId="expo" />
            <p className="text-ink-faint mt-3 font-mono text-[10px] tracking-[0.18em] uppercase">
              Selectează platforma · Apache 2.0
            </p>
          </div>
          <div className="lg:col-span-5">
            <ul className="space-y-5">
              <li className="border-rule-strong border-t pt-4">
                <div className="text-cobalt-600 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Citire
                </div>
                <p className="text-ink mt-1.5 text-[14px] leading-relaxed">
                  MRZ scan, PACE-CAN, eDATA. Strict tipizat, normalizat la ISO
                  yyyy-mm-dd.
                </p>
              </li>
              <li className="border-rule-strong border-t pt-4">
                <div className="text-cobalt-600 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Verificare
                </div>
                <p className="text-ink mt-1.5 text-[14px] leading-relaxed">
                  Passive authentication completă. CSCA furnizat de tine.
                </p>
              </li>
              <li className="border-rule-strong border-t pt-4">
                <div className="text-cobalt-600 font-mono text-[10px] tracking-[0.2em] uppercase">
                  Semnare
                </div>
                <p className="text-ink mt-1.5 text-[14px] leading-relaxed">
                  Semnătură PAdES nativă cu certificatul de pe CEI. eIDAS AdES.
                </p>
              </li>
            </ul>
            <div className="mt-7">
              <Button href="/dezvoltatori" arrow>
                Vezi documentația
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        index="04"
        label="Comparație rapidă"
        title={
          <>
            Față de SDK-urile comercial,{" "}
            <em className="font-light italic">economia se vede</em>.
          </>
        }
        bordered
      >
        <div className="bg-rule-strong border-rule-strong grid grid-cols-1 gap-px border-y md:grid-cols-2">
          <article className="bg-paper p-8 md:p-10">
            <div className="text-cobalt-600 font-mono text-[11px] tracking-[0.2em] uppercase">
              AmSemnat
            </div>
            <h3 className="font-display text-ink mt-5 text-[1.6rem] leading-[1.1] tracking-tight md:text-[1.85rem]">
              Open source · Apache 2.0
            </h3>
            <ul className="text-ink-muted mt-6 space-y-3 text-[14px] leading-relaxed md:text-[15px]">
              <li>· Cod sursă pe GitHub, audit deplin</li>
              <li>· Citire + verificare + semnare PAdES</li>
              <li>· Android, iOS, Expo / RN</li>
              <li>· Gratuit. Punct.</li>
            </ul>
          </article>
          <article className="bg-paper p-8 md:p-10">
            <div className="text-ink-faint font-mono text-[11px] tracking-[0.2em] uppercase">
              eID Romania (UP2DATE)
            </div>
            <h3 className="font-display text-ink-muted mt-5 text-[1.6rem] leading-[1.1] tracking-tight md:text-[1.85rem]">
              Proprietary · închis
            </h3>
            <ul className="text-ink-muted mt-6 space-y-3 text-[14px] leading-relaxed md:text-[15px]">
              <li>· Sursă închisă, access controlat prin chei de licență</li>
              <li>· Doar citire (fără semnare)</li>
              <li>· Android, iOS, Flutter, RN, .NET, Java</li>
              <li>· 12.000 €/an pentru SDK-uri</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button href="/comparatie/eidromania" variant="secondary" arrow>
            Vezi comparația completă
          </Button>
          <Link
            href="/preturi"
            className="text-ink-muted hover:text-ink inline-flex items-center gap-2 text-[14px] underline decoration-1 underline-offset-4 transition-colors"
          >
            Sau vezi prețurile
          </Link>
        </div>
      </Section>

      <Section bordered className="!py-16 md:!py-20">
        <div className="border-rule-strong border-t pt-8 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-[52ch]">
            <div className="text-ink-faint font-mono text-[10px] tracking-[0.2em] uppercase">
              Cum construim
            </div>
            <p className="font-display text-ink mt-3 text-[clamp(1.4rem,2vw+0.5rem,2rem)] leading-[1.15] tracking-tight">
              Construit cu AI ca partener de cod și{" "}
              <em className="font-light italic">factor uman</em> pe deciziile de
              securitate.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/cum-construim"
              className="text-ink hover:text-cobalt-600 inline-flex items-center gap-2 text-[14px] font-medium underline decoration-1 underline-offset-4 transition-colors"
            >
              Citește cum construim AmSemnat
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
