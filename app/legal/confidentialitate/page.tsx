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
        AmSemnat e un proiect open source operat din București. Oferim
        o aplicație mobilă și trei SDK-uri (Android, iOS, Expo) pentru
        citirea și semnarea cu cartea electronică de identitate (CEI).
        Site-ul amsemnat.ro și serviciile online (notar.amsemnat.ro)
        sunt operate de echipa AmSemnat. În anumite fluxuri suntem{" "}
        <strong className="text-ink font-medium">
          operator de date
        </strong>{" "}
        (decidem ce și de ce prelucrăm), în altele suntem{" "}
        <strong className="text-ink font-medium">
          persoană împuternicită
        </strong>{" "}
        (intermediem datele tale către aplicația care a inițiat
        fluxul). Detaliile pentru fiecare flux sunt mai jos. Pentru
        întrebări legate de această politică, scrie-ne la{" "}
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
          Statistici agregate prin Plausible Analytics
        </strong>{" "}
        - număr de vizualizări, sursa traficului, țara aproximativă.
        Plausible nu folosește cookie-uri, nu urmărește utilizatori
        individuali și nu construiește profiluri.{" "}
        <strong className="text-ink font-medium">
          Adresa de email pe care o trimiți voluntar
        </strong>{" "}
        la {CONTACT_EMAIL}, dacă alegi să ne contactezi. Atât. Nu
        există cont, nu există formulare, nu există tracking de
        marketing. Bază legală: Art. 6(1)(f) GDPR (interes legitim -
        măsurarea traficului) pentru Plausible, Art. 6(1)(a)
        (consimțământ) pentru emailul pe care alegi să ni-l trimiți.
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
        Pe server păstrăm: blob-ul cifrat, numele fișierului (în text
        clar, ca să-l recunoască semnatarii), materialul de derivare a
        cheii și metadate ale sesiunii (număr de semnatari, timpi,
        stare). Toate se șterg automat după{" "}
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
    id: "autentificare-oidc",
    title: "Autentificare OIDC pentru aplicații terțe",
    body: (
      <>
        Când o altă aplicație îți cere să te autentifici cu CEI prin
        AmSemnat (protocol OpenID Connect), rolurile sunt diferite:
        aplicația terță este{" "}
        <strong className="text-ink font-medium">
          operatorul de date
        </strong>{" "}
        (a inițiat fluxul, a definit ce afirmații îi trebuie despre
        tine), iar AmSemnat este{" "}
        <strong className="text-ink font-medium">
          persoană împuternicită
        </strong>{" "}
        (intermediem citirea cardului și transmiterea datelor către
        ea).
        <br />
        <br />
        Pentru OIDC trimitem la serverul nostru{" "}
        <strong className="text-ink font-medium">
          materialul criptografic plus datele de identitate
        </strong>{" "}
        (nume, prenume, CNP, data nașterii, cetățenie, sex,
        fotografie, după caz) pentru ca aplicația terță să primească
        afirmațiile pe care le-a cerut. Datele personale rămân în
        cache-ul serverului maxim{" "}
        <strong className="text-ink font-medium">10 minute</strong>{" "}
        (durata unei interacțiuni OIDC), apoi sunt șterse automat;
        după acest interval, dacă aplicația terță îți cere din nou
        datele, va trebui să te reautentifici cu cardul. Artefactele
        OIDC mai lungi (sesiunea, grant-urile, refresh tokens - TTL
        maxim 30 de zile, conform protocolului) conțin doar
        identificatorul{" "}
        <code className="text-[0.9em]">sub</code>, nu și PII-ul.
        <br />
        <br />
        Nu menținem o bază de date de utilizatori -{" "}
        <code className="text-[0.9em]">sub</code> e calculat
        determinist din CNP-ul tău printr-o funcție criptografică cu
        cheie secretă (HMAC-SHA256), nu e stocat ca atare nicăieri.
        La o reautentificare cu aceeași carte,{" "}
        <code className="text-[0.9em]">sub</code> se recalculează și
        e identic cu cel anterior, ceea ce permite aplicației terțe
        să te recunoască.
        <br />
        <br />
        Introducerea PIN-ului 1 pe ecranul de autentificare constituie
        consimțământ explicit pentru transmiterea datelor către
        aplicația care a inițiat fluxul. Bază legală: Art. 6(1)(b)
        GDPR (executarea contractului dintre tine și aplicația terță)
        și Art. 9(2)(a) (consimțământ explicit prin PIN) pentru
        datele biometrice. Dacă vrei să afli ce face aplicația terță
        cu datele după ce le primește, citește-i propria politică de
        confidențialitate - pentru acea fază rolul nostru se încheie.
      </>
    ),
  },
  {
    index: "07",
    id: "biometrice",
    title: "Date biometrice și CNP (Art. 9 GDPR, Legea 190/2018)",
    body: (
      <>
        Fotografia stocată pe chip (DG2) e considerată dată biometrică
        sub Art. 9 GDPR, iar CNP-ul are protecții suplimentare în
        Legea 190/2018. Le tratăm ca atare:{" "}
        <strong className="text-ink font-medium">
          niciuna dintre operațiunile noastre online (verificare
          opțională, OIDC) nu se întâmplă fără un gest deliberat al
          tău
        </strong>{" "}
        - apăsarea butonului „Verifică”, respectiv introducerea
        PIN-ului. Acel gest e baza legală sub Art. 9(2)(a)
        (consimțământ explicit). Poți retrage consimțământul oricând
        scriindu-ne la {CONTACT_EMAIL}; pentru fluxurile descrise
        mai sus, retragerea înseamnă efectiv să nu inițiezi fluxul -
        nu păstrăm date biometrice „la rece” pe care să le ștergem
        ulterior.
      </>
    ),
  },
  {
    index: "08",
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
    index: "09",
    id: "cookies",
    title: "Cookie-uri",
    body: (
      <>
        Site-ul nu folosește cookie-uri pentru tracking sau
        publicitate. Plausible Analytics rulează cookieless, iar
        Vercel poate seta cookie-uri tehnice pentru rutarea cererilor
        și prevenția abuzurilor. Aplicația mobilă nu folosește
        cookie-uri - nu e un browser.
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
        (Art. 7(3)). Cere oricare dintre acestea la {CONTACT_EMAIL}.
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
        (multi-sign): blob cifrat + nume de fișier + metadate ale
        sesiunii, șterse automat după 72 de ore; creatorul poate
        șterge anticipat din aplicație, dacă mai are dispozitivul pe
        care a creat sesiunea.
        <br />— <strong className="text-ink font-medium">§05</strong>{" "}
        (verificare): nu păstrăm nimic, cererile nu sunt logate cu corp.
        <br />— <strong className="text-ink font-medium">§06</strong>{" "}
        (OIDC): PII în memorie maxim 10 minute, apoi șters automat. Nu
        menținem un tabel CNP→<code className="text-[0.9em]">sub</code>{" "}
        — <code className="text-[0.9em]">sub</code>-ul e o valoare
        reproductibilă din același card, nu o evidență a unei vizite
        anterioare.
      </>
    ),
  },
  {
    index: "11",
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
    index: "12",
    id: "modificari",
    title: "Modificări",
    body: (
      <>
        Vom actualiza această politică când lansăm funcționalități
        noi sau când se schimbă infrastructura. Versiunea curentă:
        aprilie 2026.
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
        principale. Pentru verificarea opțională a cardului și pentru
        autentificarea OIDC trimitem date la serverul nostru - fiecare
        flux e descris în detaliu mai jos.
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
