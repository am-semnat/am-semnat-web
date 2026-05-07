import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politică de confidențialitate",
  description:
    "Ce date colectează site-ul amsemnat.ro și aplicația mobilă, când părăsesc dispozitivul tău, și pe ce bază GDPR le prelucrăm.",
};

const sections = [
  {
    index: "01",
    id: "cine-suntem",
    title: "Cine suntem",
    body: (
      <>
        AmSemnat este operat de{" "}
        <strong className="text-ink font-medium">
          Crăcănău C. A. Andrei Persoană Fizică Autorizată
        </strong>
        , înregistrat la ONRC, CUI{" "}
        <strong className="text-ink font-medium">5731660</strong>, cu sediul
        în Bucureşti Sectorul 1, Strada Virgil Madgearu, Nr. 25-27, Bl.
        Corp B, Etaj 1, Ap. 215. În sensul Regulamentului UE 2016/679
        (GDPR), aceasta este entitatea care acționează ca operator de
        date pentru fluxurile descrise mai jos. Oferim o aplicație
        mobilă și trei SDK-uri open source (Android, iOS, Expo) pentru
        citirea și semnarea cu cartea electronică de identitate (CEI),
        plus serviciile online de la{" "}
        <code className="text-[0.9em]">notar.amsemnat.ro</code>.
        <br />
        <br />
        Pentru toate fluxurile descrise mai jos suntem{" "}
        <strong className="text-ink font-medium">
          operator de date
        </strong>{" "}
        în sensul GDPR — noi decidem ce și de ce prelucrăm. Pentru
        întrebări legate de această politică sau pentru exercitarea
        drepturilor tale GDPR, scrie-ne la{" "}
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
    id: "site",
    title: "Site-ul amsemnat.ro",
    body: (
      <>
        <strong className="text-ink font-medium">
          Statistici agregate prin Vercel Web Analytics
        </strong>{" "}
        — număr de vizualizări, surse ale traficului, țară aproximativă,
        tip de dispozitiv. Vercel folosește un hash zilnic al IP-ului
        + User-Agent pentru a distinge vizitatori unici, fără cookie-uri
        și fără identificatori persistenți. Nu construim profiluri
        individuale, nu corelăm vizitele cu date personale.{" "}
        <strong className="text-ink font-medium">
          Adresa de email pe care o trimiți voluntar
        </strong>{" "}
        la{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        , dacă alegi să ne contactezi. Atât. Nu există cont, nu există
        formulare, nu există tracking de marketing. Bază legală: Art.
        6(1)(f) GDPR (interes legitim — măsurarea traficului) pentru
        Vercel Web Analytics, Art. 6(1)(a) (consimțământ) pentru
        emailul de contact.
      </>
    ),
  },
  {
    index: "03",
    id: "aplicatie-local",
    title: "Aplicația mobilă - ce rămâne pe dispozitivul tău",
    body: (
      <>
        În mod implicit, tot ce face aplicația rulează local. Datele
        citite de pe chip-ul CEI (nume, CNP, fotografie, adresă etc.),
        PIN-urile pe care le introduci, semnăturile produse și
        fișierele PDF{" "}
        <strong className="text-ink font-medium">
          nu trec prin serverele noastre
        </strong>
        . Pentru semnarea în grup folosim criptare end-to-end
        (AES-256-GCM): documentul e cifrat pe dispozitivul tău cu o
        cheie pe care doar semnatarii o cunosc, iar serverul stochează
        doar blob-ul cifrat - nu poate citi conținutul. CAN-ul (codul
        de pe fața cardului) e salvat opțional în zona securizată a
        sistemului de operare (Keychain pe iOS, Keystore pe Android)
        ca să nu trebuiască să-l reintroduci.
      </>
    ),
  },
  {
    index: "04",
    id: "multi-sign",
    title: "Multi-sign — semnare în grup cu criptare end-to-end",
    body: (
      <>
        Pentru semnarea în grup, documentul tău este cifrat pe
        dispozitiv cu AES-256-GCM înainte de încărcare. Cheia e
        derivată (PBKDF2, 100.000 iterații) dintr-un{" "}
        <strong className="text-ink font-medium">
          cod de securitate de 8 caractere
        </strong>{" "}
        pe care îl partajezi cu semnatarii — serverul nu primește
        codul, deci nu poate citi conținutul.
        <br />
        <br />
        Documentul cifrat e stocat pe un{" "}
        <strong className="text-ink font-medium">
          bucket de obiecte cu jurisdicție EU
        </strong>{" "}
        — nici numele fișierului, nici conținutul lui nu sunt vizibile
        pentru noi. Separat, într-o bază de date PostgreSQL, stocăm
        strict materialul criptografic necesar protocolului (salt
        PBKDF2, cheia de document împachetată, proof HMAC pentru codul
        de securitate) și metadate operaționale ale sesiunii (număr de
        semnatari, câți au semnat, timpi, stare). Detaliile despre
        furnizori sunt în §09. Toate se șterg automat după{" "}
        <strong className="text-ink font-medium">72 de ore</strong> —
        același interval e și fereastra în care semnatarii descarcă
        documentul finalizat. Creatorul poate șterge sesiunea
        anticipat direct din aplicație, cât timp are dispozitivul pe
        care a creat-o (token-ul care autorizează ștergerea e stocat
        local pe acel dispozitiv); dacă a pierdut acel acces — de
        exemplu prin reinstalarea aplicației — sesiunea se șterge la
        expirarea automată.
        <br />
        <br />
        Bază legală: Art. 6(1)(b) GDPR (executarea contractului — ai
        cerut serviciul de semnare în grup).
      </>
    ),
  },
  {
    index: "05",
    id: "verificare",
    title: "Verificare opțională a autenticității cardului",
    body: (
      <>
        După ce citești cardul, aplicația îți oferă opțiunea de a
        verifica că datele de pe el sunt într-adevăr emise de statul
        român și nu au fost modificate. Această verificare necesită
        certificatele autorităților de stat (CSCA), care se schimbă în
        timp și nu pot fi incluse în aplicație fără actualizări la
        magazinele de aplicații - de aceea o facem pe serverul nostru.
        <br />
        <br />
        <strong className="text-ink font-medium">Este opt-in:</strong>{" "}
        nu se întâmplă decât după ce apeși butonul „Verifică
        autenticitatea” pe ecranul cu rezultate.{" "}
        Trimitem fișierele strict cât e nevoie pentru a recalcula
        hash-urile și a verifica semnătura statului — semnătura
        digitală (SOD) plus fișierele DG1 (datele MRZ: nume, dată
        naștere, sex, număr document, dată expirare), DG2 (fotografia)
        și DG14 (parametri criptografici).{" "}
        <strong className="text-ink font-medium">
          CNP-ul și adresa nu se trimit
        </strong>{" "}
        — sunt stocate într-un fișier separat (eData) pe care nu îl
        includem în cerere. Transmiterea se face prin HTTPS. Pe server
        datele se procesează în memorie, nu sunt stocate, iar
        cererile către endpoint-ul de verificare nu sunt logate cu
        corpul lor (fără SOD, fără DG-uri în log-uri). Răspunsul e
        binar: semnătura e validă / nu e validă. Operator: AmSemnat.
        Bază legală: Art. 6(1)(a) GDPR (consimțământul tău explicit
        prin apăsarea butonului) și Art. 9(2)(a) pentru fotografia
        din DG2 (transmisă doar pentru a-i calcula hash-ul — serverul
        nu o decodează ca imagine).
      </>
    ),
  },
  {
    index: "06",
    id: "biometrice",
    title: "Date biometrice și CNP (Art. 9 GDPR, Legea 190/2018)",
    body: (
      <>
        Fotografia stocată pe chip (DG2) e considerată dată biometrică
        sub Art. 9 GDPR, iar CNP-ul are protecții suplimentare în
        Legea 190/2018. Le tratăm ca atare:{" "}
        <strong className="text-ink font-medium">
          niciuna dintre operațiunile noastre online (verificare
          opțională a cardului) nu se întâmplă fără un gest deliberat
          al tău
        </strong>{" "}
        - apăsarea butonului „Verifică”. Acel gest e baza legală sub
        Art. 9(2)(a)
        (consimțământ explicit). Poți retrage consimțământul oricând
        scriindu-ne la {CONTACT_EMAIL}; pentru fluxurile descrise
        mai sus, retragerea înseamnă efectiv să nu inițiezi fluxul -
        nu păstrăm date biometrice „la rece” pe care să le ștergem
        ulterior.
      </>
    ),
  },
  {
    index: "07",
    id: "sdk",
    title: "SDK-urile open source",
    body: (
      <>
        Bibliotecile open source (Android, iOS, Expo) nu colectează
        telemetrie de niciun fel. Toată prelucrarea NFC + criptografică
        rulează pe dispozitivul utilizatorului final al aplicației
        care integrează SDK-ul. Dacă tu construiești o aplicație
        folosind SDK-urile, propria ta politică de confidențialitate
        trebuie să acopere ce date colectezi de la utilizatorii tăi.
      </>
    ),
  },
  {
    index: "08",
    id: "cookies",
    title: "Cookie-uri",
    body: (
      <>
        Site-ul nu folosește cookie-uri pentru tracking sau
        publicitate. Vercel poate seta cookie-uri tehnice pentru
        rutarea cererilor și prevenția abuzurilor. Aplicația mobilă nu
        folosește cookie-uri - nu e un browser.
      </>
    ),
  },
  {
    index: "09",
    id: "subprocesatori",
    title: "Subprocesatori",
    body: (
      <>
        Pentru a oferi serviciile de mai sus, ne bazăm pe câțiva
        furnizori de infrastructură care procesează date în numele
        nostru (subprocesatori în sensul Art. 28 GDPR):
        <br />
        <br />
        — <strong className="text-ink font-medium">Railway Corp.</strong>{" "}
        (SUA) — hostează serviciile online de la{" "}
        <code className="text-[0.9em]">notar.amsemnat.ro</code>:
        endpoint-urile pentru verificarea opțională a cardului și
        sesiunile de semnare în grup, plus baza de date PostgreSQL
        care stochează metadatele sesiunilor și materialul
        criptografic asociat (salt PBKDF2, cheia de document
        împachetată, proof HMAC).
        <br />— <strong className="text-ink font-medium">Cloudflare, Inc.</strong>{" "}
        (SUA) — stochează blob-urile cifrate ale documentelor din
        sesiunile de semnare în grup prin serviciul R2 Object Storage.
        Bucket-ul e configurat cu{" "}
        <strong className="text-ink font-medium">jurisdicție EU</strong>,
        deci documentele cifrate rămân fizic pe servere din Uniunea
        Europeană.
        <br />— <strong className="text-ink font-medium">Vercel Inc.</strong>{" "}
        (SUA) — hostează site-ul amsemnat.ro și deservește paginile lui
        statice. Furnizează și Vercel Web Analytics (statistici
        cookieless de trafic). Poate seta cookie-uri tehnice (rutare,
        prevenție abuz).
        <br />
        <br />
        Pentru transferurile către SUA (Railway, Cloudflare, Vercel),
        aceștia operează sub clauze contractuale standard (SCC) și/sau
        cadrul EU-US Data Privacy Framework, conform Art. 46 GDPR. Vom
        actualiza această listă când schimbăm furnizori sau adăugăm
        alții.
      </>
    ),
  },
  {
    index: "10",
    id: "drepturi",
    title: "Drepturile tale (GDPR)",
    body: (
      <>
        Conform Regulamentului UE 2016/679, ai următoarele drepturi:
        acces la datele pe care le avem despre tine (Art. 15),
        rectificare (Art. 16), ștergere (Art. 17), restricționarea
        prelucrării (Art. 18), portabilitate (Art. 20), opoziție
        (Art. 21), retragerea consimțământului în orice moment
        (Art. 7(3)). Nu luăm decizii automate cu efecte juridice
        asupra ta și nu facem profilare în sensul Art. 22 GDPR. Cere
        oricare dintre drepturile de mai sus la {CONTACT_EMAIL}.
        Răspundem în termen de o lună (cu posibilă prelungire pentru
        cereri complexe, conform GDPR). În practică, pentru fluxurile
        descrise mai sus datele identificabile sunt minime sau
        temporare:
        <br />
        <br />
        — <strong className="text-ink font-medium">§03</strong> (local):
        nu părăsesc dispozitivul, deci nu avem nimic de arătat sau
        șters.
        <br />— <strong className="text-ink font-medium">§04</strong>{" "}
        (multi-sign): blob cifrat + material criptografic + metadate
        ale sesiunii (fără nume de fișier, fără conținut vizibil),
        șterse automat după 72 de ore; creatorul poate șterge
        anticipat din aplicație, dacă mai are dispozitivul pe care a
        creat sesiunea.
        <br />— <strong className="text-ink font-medium">§05</strong>{" "}
        (verificare): nu păstrăm nimic, cererile nu sunt logate cu corp.
      </>
    ),
  },
  {
    index: "11",
    id: "minori",
    title: "Minori",
    body: (
      <>
        Serviciile AmSemnat nu sunt destinate copiilor sub 16 ani.
        Nu colectăm intenționat date personale de la minori sub
        această vârstă fără consimțământul titularului răspunderii
        părintești, conform Art. 8 GDPR. Cartea electronică de
        identitate se emite în România începând cu vârsta de 14 ani;
        pentru utilizatori între 14 și 16 ani recomandăm folosirea
        aplicației sub supravegherea părintelui sau tutorelui legal.
        Dacă afli că un minor sub 16 ani ne-a furnizat date fără
        consimțământul părintesc necesar, scrie-ne la{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>{" "}
        și vom șterge informațiile cât mai repede posibil.
      </>
    ),
  },
  {
    index: "12",
    id: "contact",
    title: "Contact și ANSPDCP",
    body: (
      <>
        Pentru orice întrebare sau cerere GDPR, scrie-ne la{" "}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        . Dacă crezi că am încălcat drepturile tale, ai dreptul să
        depui plângere la Autoritatea Națională de Supraveghere a
        Prelucrării Datelor cu Caracter Personal (ANSPDCP) -{" "}
        <a
          href="https://www.dataprotection.ro"
          className="text-ink hover:text-cobalt-600 underline decoration-1 underline-offset-4 transition-colors"
          target="_blank"
          rel="noopener"
        >
          dataprotection.ro
        </a>
        .
      </>
    ),
  },
  {
    index: "13",
    id: "modificari",
    title: "Modificări",
    body: (
      <>
        Vom actualiza această politică când lansăm funcționalități
        noi sau când se schimbă infrastructura. Pentru schimbări
        substanțiale care afectează modul în care prelucrăm datele
        tale - subprocesatori noi, baze legale modificate, fluxuri
        noi care părăsesc dispozitivul - te anunțăm prin
        re-prezentarea ecranului de acceptare la următoarea
        deschidere a aplicației. Versiunea curentă: aprilie 2026.
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
        Pe scurt: site-ul nu te urmărește, SDK-urile nu trimit
        telemetrie, aplicația rulează local pentru fluxurile
        principale. Pentru verificarea opțională a cardului trimitem
        date la serverul nostru - fiecare flux e descris în detaliu
        mai jos.
      </p>

      <div className="border-rule-strong divide-rule mt-16 divide-y border-t md:mt-20">
        {sections.map((s) => (
          <section
            key={s.index}
            id={s.id}
            className="grid scroll-mt-24 grid-cols-1 gap-x-10 gap-y-3 py-8 md:grid-cols-12 md:py-10"
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
