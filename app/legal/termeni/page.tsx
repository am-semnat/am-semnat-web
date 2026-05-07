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
    index: "04",
    title: "Aplicația și serviciile în early access (beta)",
    body: (
      <>
        Aplicația mobilă AmSemnat și serviciile asociate (sesiuni de semnare
        în grup) se află în{" "}
        <strong className="text-ink font-medium">early access</strong>.
        Funcționalitățile pot avea defecte, comportamentul se poate schimba
        fără preaviz, iar disponibilitatea serviciilor de backend nu este
        garantată. În această perioadă toate funcționalitățile - inclusiv
        sesiunile de semnare în grup - sunt oferite gratuit; ne rezervăm
        dreptul de a introduce planuri cu plată pentru anumite funcționalități
        după ieșirea din beta, cu notificare prealabilă rezonabilă.
        <br />
        <br />
        Folosește aplicația pentru testare și pentru documente unde poți
        tolera o eventuală pierdere sau eroare. Documentele critice -
        contracte semnificative, acte notariale, înscrisuri cu termen legal -
        semnează-le, în această perioadă, printr-un canal stabilit (notar,
        QTSP autorizat eIDAS).
      </>
    ),
  },
  {
    index: "05",
    title: "Sesiuni de semnare în grup - termenul de 72 de ore",
    body: (
      <>
        Indiferent de statutul beta de mai sus, sesiunile de semnare în grup
        au prin design o durată maximă de{" "}
        <strong className="text-ink font-medium">72 de ore</strong> de la
        creare. La expirare, sesiunea, blob-ul cifrat al documentului și
        materialul criptografic asociat sunt șterse automat de pe server și
        nu mai pot fi recuperate, indiferent de câte semnături au intrat
        până în acel moment.
        <br />
        <br />
        E o proprietate deliberată a designului - minimizare de date,
        end-to-end encryption - nu un defect. Responsabilitatea de a
        coordona semnatarii astfel încât toți să finalizeze în acest interval
        revine creatorului sesiunii; pentru documente cu termen strict,
        planifică sesiunea cu o marjă față de termenele tale și verifică
        progresul. Pierderea unei sesiuni prin expirare nu constituie defect
        al serviciului și nu dă naștere la răspundere conform §06.
      </>
    ),
  },
  {
    index: "06",
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
        luate împreună, este limitată la suma plătită de tine pentru serviciu
        în ultimele 12 luni. În prezent toate funcționalitățile sunt
        gratuite, deci limita este zero.
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
    index: "07",
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
    index: "08",
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
    index: "09",
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
        <br />
        <br />
        Aplicația nu e destinată minorilor sub 16 ani. Folosirea de către
        minori cu vârsta între 14 și 18 ani se face sub supravegherea și
        responsabilitatea titularului autorității părintești, care răspunde
        pentru respectarea acestor termeni.
      </>
    ),
  },
  {
    index: "10",
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
    index: "11",
    title: "Modificări",
    body: (
      <>
        Termenii se pot schimba când lansăm funcționalități noi (de exemplu,
        dashboard-ul cu cont, planurile cu plată) sau când contextul legal o
        cere. Vom anunța modificările prin actualizarea acestei pagini și,
        pentru utilizatorii aplicației, prin re-prezentarea ecranului de
        acceptare la următoarea deschidere. Versiunea curentă: mai 2026.
      </>
    ),
  },
  {
    index: "12",
    title: "Clauze diverse",
    body: (
      <>
        Dacă oricare dintre clauzele acestor termeni este declarată nulă sau
        inaplicabilă de o instanță competentă, restul clauzelor rămân în
        vigoare și produc efecte între părți. Acești termeni, împreună cu
        Politica de confidențialitate, constituie acordul integral între tine
        și AmSemnat cu privire la utilizarea aplicației, a serviciilor
        asociate și a SDK-urilor, și înlocuiesc orice înțelegeri anterioare
        având același obiect. Drepturile și obligațiile tale rezultate din
        acest acord nu pot fi cesionate fără acordul nostru scris prealabil.
        Toleranța noastră față de o eventuală nerespectare a termenilor nu
        echivalează cu renunțarea la drepturile noastre pentru încălcări
        ulterioare.
      </>
    ),
  },
  {
    index: "13",
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
        Pe scurt: SDK-urile sunt Apache 2.0, aplicația e în early access și e
        oferită ca atare, nu suntem un Trust Service Provider eIDAS. Detalii mai
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
