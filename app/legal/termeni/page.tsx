import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termeni",
  description:
    "Termenii de utilizare pentru site-ul amsemnat.ro, aplicația mobilă și SDK-urile open source.",
};

const sections = [
  {
    index: "01",
    title: "Despre acești termeni",
    body: (
      <>
        Acest document acoperă utilizarea site-ului{" "}
        <strong className="text-ink font-medium">amsemnat.ro</strong>, a{" "}
        <strong className="text-ink font-medium">aplicației mobile AmSemnat</strong>{" "}
        (când e disponibilă în App Store / Google Play) și a celor trei{" "}
        <strong className="text-ink font-medium">SDK-uri open source</strong>{" "}
        (Android, iOS, Expo). Folosirea oricăruia dintre ele înseamnă
        acceptarea termenilor de mai jos.
      </>
    ),
  },
  {
    index: "02",
    title: "SDK-urile - licență Apache 2.0",
    body: (
      <>
        SDK-urile Android, iOS și Expo sunt distribuite sub licența{" "}
        <strong className="text-ink font-medium">Apache 2.0</strong>. Asta
        înseamnă că le poți folosi liber în orice proiect - comercial sau
        nu - atât timp cât: păstrezi notițele de copyright, incluzi o
        copie a licenței, marchezi modificările pe care le faci. Apache
        2.0 acordă explicit drepturi de patent și permite redistribuția
        sub alte licențe a operelor derivate. Textul complet al licenței
        e în repository-urile GitHub corespunzătoare. SDK-urile au
        dependențe terțe sub LGPL (JMRTD/SCUBA pe Android) - verifică
        compatibilitatea cu produsul tău înainte de redistribuție
        comercială.
      </>
    ),
  },
  {
    index: "03",
    title: "Aplicația mobilă - utilizare",
    body: (
      <>
        Aplicația AmSemnat e oferită ca atare („as is”). Nu garantăm
        absența erorilor, nu garantăm compatibilitatea cu toate cardurile
        sau dispozitivele, nu suntem responsabili pentru pierderi
        rezultate din utilizarea aplicației. Folosește-o cu CEI-ul tău
        propriu, pentru documente proprii sau primite explicit pentru
        semnare.
      </>
    ),
  },
  {
    index: "04",
    title: "Nu suntem un Trust Service Provider eIDAS",
    body: (
      <>
        AmSemnat e un set de instrumente, nu un Trust Service Provider
        calificat în sensul Regulamentului UE 910/2014 (eIDAS). Producem
        semnături PAdES folosind certificatul de pe CEI-ul tău - nu
        emitem certificate, nu operăm o autoritate de certificare. Pentru
        flux QTSP complet (semnătură electronică calificată cu
        certificat emis de un TSP autorizat), folosește un emitent
        autorizat - certSIGN, Trans Sped, Alfasign etc. Suntem aval de
        ei, nu un substitut.
      </>
    ),
  },
  {
    index: "05",
    title: "Validitate juridică",
    body: (
      <>
        O semnătură PAdES produsă cu certificatul de pe CEI e - conform
        eIDAS și legii române - o{" "}
        <strong className="text-ink font-medium">
          semnătură electronică avansată
        </strong>{" "}
        (AdES). Acceptarea ei într-un context juridic specific (notarial,
        bancar, contractual) depinde de cerințele acelui context. Nu
        garantăm validitatea juridică universală a documentelor semnate
        prin AmSemnat. Verifică cu juristul tău dacă nivelul AdES e
        suficient pentru cazul tău.
      </>
    ),
  },
  {
    index: "06",
    title: "Modificări",
    body: (
      <>
        Termenii se pot schimba când lansăm funcționalități noi (de
        exemplu, dashboard-ul cu cont). Versiunea curentă: aprilie 2026.
      </>
    ),
  },
  {
    index: "07",
    title: "Contact",
    body: (
      <>
        Întrebări legate de acești termeni - la{" "}
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
];

export default function TermeniPage() {
  return (
    <Container className="py-24 md:py-32">
      <Eyebrow index="L2">Legal</Eyebrow>
      <h1 className="font-display text-ink mt-7 max-w-[20ch] text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.02] tracking-tight">
        Termeni de <em className="font-light italic">utilizare</em>.
      </h1>
      <p className="text-ink-muted mt-6 max-w-[55ch] text-lg leading-relaxed">
        Pe scurt: SDK-urile sunt Apache 2.0, aplicația e oferită ca
        atare, nu suntem un Trust Service Provider eIDAS. Detalii mai
        jos.
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
