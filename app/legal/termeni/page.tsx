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
    title: "Cine operează AmSemnat",
    body: (
      <>
        AmSemnat este operat de{" "}
        <strong className="text-ink font-medium">
          Crăcănău C. A. Andrei Persoană Fizică Autorizată
        </strong>
        , înregistrat la ONRC, CUI{" "}
        <strong className="text-ink font-medium">5731660</strong>, cu sediul în
        Bucureşti Sectorul 1, Strada Virgil Madgearu, Nr. 25-27, Bl. Corp B,
        Etaj 1, Ap. 215. Pentru orice corespondență legată de aplicație,
        servicii sau acești termeni:{" "}
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
    title: "Despre acești termeni",
    body: (
      <>
        Acest document acoperă utilizarea site-ului{" "}
        <strong className="text-ink font-medium">amsemnat.ro</strong>, a{" "}
        <strong className="text-ink font-medium">
          aplicației mobile AmSemnat
        </strong>{" "}
        (când e disponibilă în App Store / Google Play) și a celor trei{" "}
        <strong className="text-ink font-medium">SDK-uri open source</strong>{" "}
        (Android, iOS, Expo). Folosirea oricăruia dintre ele înseamnă acceptarea
        termenilor de mai jos.
      </>
    ),
  },
  {
    index: "03",
    title: "SDK-urile - licență Apache 2.0",
    body: (
      <>
        SDK-urile Android, iOS și Expo sunt distribuite sub licența{" "}
        <strong className="text-ink font-medium">Apache 2.0</strong>. Asta
        înseamnă că le poți folosi liber în orice proiect - comercial sau nu -
        atât timp cât: păstrezi notițele de copyright, incluzi o copie a
        licenței, marchezi modificările pe care le faci. Apache 2.0 acordă
        explicit drepturi de patent și permite redistribuția sub alte licențe a
        operelor derivate. Textul complet al licenței e în repository-urile
        GitHub corespunzătoare. SDK-urile au dependențe terțe sub LGPL
        (JMRTD/SCUBA pe Android) - verifică compatibilitatea cu produsul tău
        înainte de redistribuție comercială.
      </>
    ),
  },
  {
    // TEMPORARY — remove this section once paid tier launches under SRL.
    // Numbered with "—" so removal doesn't force a renumber of everything after.
    index: "—",
    title: "Aplicația în early access (beta)",
    body: (
      <>
        Aplicația mobilă AmSemnat se află în{" "}
        <strong className="text-ink font-medium">early access</strong>.
        Funcționalitățile pot avea defecte, comportamentul se poate schimba fără
        preaviz, iar disponibilitatea serviciilor de backend (sesiuni de semnare
        în grup, link-uri partajate) nu este garantată. Folosește aplicația
        pentru testare și pentru documente unde poți tolera o eventuală pierdere
        sau eroare. Documentele critice - contracte semnificative, acte
        notariale, înscrisuri cu termen legal - semnează-le, în această
        perioadă, printr-un canal stabilit (notar, QTSP autorizat eIDAS).
      </>
    ),
  },
  {
    index: "04",
    title: "Garanții și răspundere",
    body: (
      <>
        Aplicația și serviciile asociate sunt oferite „ca atare” și „așa cum
        sunt disponibile”. Nu oferim nicio garanție expresă sau implicită
        privind: absența erorilor, compatibilitatea cu toate cardurile sau
        dispozitivele, disponibilitatea neîntreruptă a serviciilor de backend,
        sau adecvarea pentru un scop particular.
        <br />
        <br />
        În măsura permisă de legea română, nu răspundem pentru: pierderi
        indirecte, pierderi de profit, întreruperea activității, pierderea de
        date, costuri de înlocuire a serviciului, sau orice alte daune
        consecvențiale rezultate din utilizarea sau imposibilitatea utilizării
        aplicației. Răspunderea noastră agregată cumulată, pentru toate cauzele
        luate împreună, este limitată la suma plătită de tine pentru serviciu în
        ultimele 12 luni - care, pentru utilizatorii planului gratuit, este
        zero.
        <br />
        <br />
        Excepție: limitările de mai sus nu se aplică în cazurile în care legea
        română nu permite limitarea răspunderii - intenție, neglijență gravă,
        vătămări corporale, sau alte situații prevăzute imperativ de lege. Dacă
        ești consumator în sensul OG 21/1992 sau OUG 34/2014, drepturile tale
        legale rămân neatinse de aceste limitări.
      </>
    ),
  },
  {
    index: "05",
    title: "Nu suntem un Trust Service Provider eIDAS",
    body: (
      <>
        AmSemnat e un set de instrumente, nu un Trust Service Provider calificat
        în sensul Regulamentului UE 910/2014 (eIDAS). Producem semnături PAdES
        folosind certificatul de pe CEI-ul tău - nu emitem certificate, nu
        operăm o autoritate de certificare. Pentru flux QTSP complet (semnătură
        electronică calificată cu certificat emis de un TSP autorizat),
        folosește un emitent autorizat - certSIGN, Trans Sped, Alfasign etc.
        Suntem aval de ei, nu un substitut.
      </>
    ),
  },
  {
    index: "06",
    title: "Validitate juridică",
    body: (
      <>
        O semnătură PAdES produsă cu certificatul de pe CEI e - conform eIDAS și
        legii române - o{" "}
        <strong className="text-ink font-medium">
          semnătură electronică avansată
        </strong>{" "}
        (AdES). Acceptarea ei într-un context juridic specific (notarial,
        bancar, contractual) depinde de cerințele acelui context. Nu garantăm
        validitatea juridică universală a documentelor semnate prin AmSemnat și
        nu oferim consultanță juridică, fiscală sau notarială prin intermediul
        aplicației sau al acestui site - verifică cu juristul tău dacă nivelul
        AdES e suficient pentru cazul tău.
      </>
    ),
  },
  {
    index: "07",
    title: "Obligațiile utilizatorului",
    body: (
      <>
        Folosind AmSemnat, te angajezi să: (a) folosești exclusiv propriul tău
        CEI și certificatul aferent; (b) nu semnezi în numele altei persoane
        fără mandat valid; (c) nu folosești aplicația în scopuri ilegale,
        frauduloase sau pentru a induce în eroare o terță parte; (d) păstrezi în
        siguranță codul de securitate al sesiunilor de semnare în grup -
        pierderea lui face documentul nerecuperabil prin design, această
        proprietate fiind o caracteristică deliberată de end-to-end encryption,
        nu un defect al serviciului.
        <br />
        <br />
        Ești de acord să ne despăgubești pentru orice pretenție formulată de
        terți, inclusiv costurile rezonabile de apărare juridică, rezultată din
        utilizarea aplicației de către tine cu încălcarea acestor termeni sau a
        legii aplicabile.
      </>
    ),
  },
  {
    index: "08",
    title: "Lege aplicabilă și jurisdicție",
    body: (
      <>
        Acești termeni sunt guvernați de{" "}
        <strong className="text-ink font-medium">legea română</strong>. Orice
        dispute rezultate din utilizarea AmSemnat se vor soluționa amiabil, iar
        dacă nu se ajunge la un acord, vor fi de competența instanțelor române
        de la sediul operatorului. Dacă ești consumator cu reședința în alt stat
        membru UE, această clauză nu te privează de drepturile imperative de
        protecție a consumatorului prevăzute de legea statului tău de reședință.
      </>
    ),
  },
  {
    index: "09",
    title: "Modificări",
    body: (
      <>
        Termenii se pot schimba când lansăm funcționalități noi (de exemplu,
        dashboard-ul cu cont, planurile cu plată) sau când contextul legal o
        cere. Vom anunța modificările prin actualizarea acestei pagini și,
        pentru utilizatorii aplicației, prin re-prezentarea ecranului de
        acceptare la următoarea deschidere. Versiunea curentă: aprilie 2026.
      </>
    ),
  },
  {
    index: "10",
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
        Pe scurt: SDK-urile sunt Apache 2.0, aplicația e în acces anticipat și e
        oferită ca atare, nu suntem un Trust Service Provider eIDAS. Detalii mai
        jos.
      </p>

      <div className="border-rule-strong divide-rule mt-16 divide-y border-t md:mt-20">
        {sections.map((s) => (
          <section
            key={s.index === "—" ? `dash-${s.title}` : s.index}
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
