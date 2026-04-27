"use client";

import { useCallback, useRef, useState } from "react";
import {
  verifyPadesSignatures,
  type PadesVerificationResult,
} from "@amsemnat/verifier";
import { CornerBrackets } from "@/components/marketing/CornerBrackets";

type State =
  | { kind: "idle" }
  | { kind: "loading"; fileName: string }
  | {
      kind: "done";
      fileName: string;
      results: PadesVerificationResult[];
    }
  | { kind: "error"; fileName: string; message: string };

const dateFmt = new Intl.DateTimeFormat("ro-RO", {
  dateStyle: "long",
  timeStyle: "short",
});

export function PdfVerifier() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const verify = useCallback(async (file: File) => {
    setState({ kind: "loading", fileName: file.name });
    try {
      const [pdf, root, sub] = await Promise.all([
        file.arrayBuffer().then((b) => new Uint8Array(b)),
        fetch("/anchors/ro-cei-mai-root-ca.cer").then((r) => {
          if (!r.ok) throw new Error("Nu s-au putut încărca ancorele de încredere.");
          return r.arrayBuffer();
        }),
        fetch("/anchors/ro-cei-mai-sub-ca.cer").then((r) => {
          if (!r.ok) throw new Error("Nu s-au putut încărca ancorele de încredere.");
          return r.arrayBuffer();
        }),
      ]);
      const results = await verifyPadesSignatures({
        pdf,
        trustAnchors: [new Uint8Array(root), new Uint8Array(sub)],
      });
      setState({ kind: "done", fileName: file.name, results });
    } catch (e) {
      setState({
        kind: "error",
        fileName: file.name,
        message: e instanceof Error ? e.message : "Eroare necunoscută.",
      });
    }
  }, []);

  const onPick = (file: File | null | undefined) => {
    if (!file) return;
    if (file.type && file.type !== "application/pdf") {
      setState({
        kind: "error",
        fileName: file.name,
        message: "Fișierul trebuie să fie un PDF.",
      });
      return;
    }
    verify(file);
  };

  const onDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragOver(false);
    onPick(e.dataTransfer.files?.[0]);
  };

  const reset = () => {
    setState({ kind: "idle" });
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="min-h-[20rem] md:min-h-[24rem]">
      {state.kind === "idle" ? (
        <label
          htmlFor="pdf-verifier-input"
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          className={`border-rule-strong relative flex cursor-pointer flex-col items-center justify-center border px-6 py-16 text-center transition-colors md:py-20 ${
            dragOver
              ? "bg-cobalt-50 text-ink"
              : "bg-paper-elevated hover:bg-paper-muted text-ink-muted"
          }`}
        >
          <CornerBrackets
            size={18}
            inset={6}
            color={
              dragOver
                ? "var(--color-cobalt-500)"
                : "var(--color-rule-strong)"
            }
          />
          <input
            ref={inputRef}
            id="pdf-verifier-input"
            type="file"
            accept="application/pdf"
            className="sr-only"
            onChange={(e) => onPick(e.target.files?.[0])}
          />
          <div className="text-ink-faint font-mono text-[10px] tracking-[0.22em] uppercase">
            PDF · PAdES B-B
          </div>
          <div className="font-display text-ink mt-5 text-[1.6rem] leading-[1.15] tracking-tight md:text-[1.9rem]">
            Trage un fișier aici
          </div>
          <div className="text-ink-muted mt-3 text-[14px]">
            sau{" "}
            <span className="text-ink underline decoration-dotted underline-offset-4">
              alege un PDF
            </span>{" "}
            de pe dispozitiv
          </div>
          <div className="text-ink-faint mt-8 max-w-[40ch] font-mono text-[10px] tracking-[0.18em] uppercase">
            Verificarea rulează local · fișierul nu părăsește browser-ul
          </div>
        </label>
      ) : (
        <div className="border-rule-strong bg-paper-elevated flex flex-wrap items-center justify-between gap-4 border px-6 py-5 md:px-8">
          <div className="min-w-0 flex-1">
            <div className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
              Fișier
            </div>
            <div className="text-ink mt-1 truncate font-mono text-[13px]">
              {state.fileName}
            </div>
          </div>
          <button
            type="button"
            onClick={reset}
            className="text-ink-muted hover:text-ink shrink-0 font-mono text-[11px] tracking-[0.16em] uppercase underline decoration-dotted underline-offset-4 transition-colors"
          >
            Schimbă fișierul
          </button>
        </div>
      )}

      {state.kind === "loading" && (
        <div className="text-ink-muted mt-6 flex items-center gap-3 font-mono text-[12px] tracking-[0.16em] uppercase">
          <span
            aria-hidden
            className="border-ink-muted inline-block h-3 w-3 animate-spin border border-r-transparent"
          />
          Se verifică…
        </div>
      )}

      {state.kind === "error" && (
        <div className="border-ink mt-6 border-l-2 bg-paper-muted px-5 py-4">
          <div className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
            Eroare
          </div>
          <div className="text-ink mt-2 text-[14px] leading-relaxed">
            {state.message}
          </div>
        </div>
      )}

      {state.kind === "done" && state.results.length === 0 && (
        <div className="border-rule-strong mt-6 border bg-paper-muted px-6 py-8">
          <div className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
            Niciun rezultat
          </div>
          <div className="font-display text-ink mt-3 text-[1.25rem] leading-tight">
            Acest PDF nu conține semnături PAdES.
          </div>
          <p className="text-ink-muted mt-3 max-w-[55ch] text-[14px] leading-relaxed">
            Pagina detectează semnături PAdES B-B - formatul produs de
            aplicațiile AmSemnat și de orice instrument compatibil eIDAS.
            Semnăturile vechi cu /SubFilter <code>adbe.x509.rsa_sha1</code>{" "}
            (fără PAdES) nu sunt suportate.
          </p>
        </div>
      )}

      {state.kind === "done" && state.results.length > 0 && (
        <ol className="mt-6 space-y-4">
          {state.results.map((r) => (
            <ResultCard key={r.signatureIndex} result={r} />
          ))}
        </ol>
      )}
    </div>
  );
}

function ResultCard({ result }: { result: PadesVerificationResult }) {
  const status = !result.valid
    ? "invalid"
    : result.coversWholeDocument
      ? "valid"
      : "partial";

  return (
    <li
      role="status"
      className="border-rule-strong border bg-paper-elevated p-6 md:p-8"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-cobalt-600 font-mono text-[11px] tracking-[0.18em] tabular-nums uppercase">
            §{String(result.signatureIndex + 1).padStart(2, "0")}
          </span>
          <span className="bg-rule-strong h-px w-6" aria-hidden />
          <span className="text-ink-muted font-mono text-[11px] tracking-[0.18em] uppercase">
            {result.fieldName ?? "Semnătură"}
          </span>
        </div>
        <StatusBadge status={status} />
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
        <div>
          <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
            Semnatar
          </dt>
          <dd className="text-ink mt-1.5 text-[15px]">
            {result.signerCommonName ?? "—"}
          </dd>
        </div>
        <div>
          <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
            Semnat la
          </dt>
          <dd className="text-ink mt-1.5 text-[15px] tabular-nums">
            {result.signedAt ? dateFmt.format(result.signedAt) : "—"}
          </dd>
        </div>
        <div>
          <dt className="text-ink-faint font-mono text-[10px] tracking-[0.18em] uppercase">
            Acoperă întregul document
          </dt>
          <dd className="text-ink mt-1.5 text-[15px]">
            {result.coversWholeDocument ? "Da" : "Nu - documentul a fost actualizat după"}
          </dd>
        </div>
      </dl>

      {status === "partial" && result.valid && (
        <p className="text-ink-muted border-rule mt-6 border-t pt-5 max-w-[60ch] text-[13px] leading-relaxed">
          Semnătura e valabilă, dar documentul a primit modificări incrementale
          după ea. E normal pentru semnături intermediare în fluxuri
          multi-semnatar - verifică dacă semnătura finală acoperă întregul
          document.
        </p>
      )}

      {result.errors.length > 0 && (
        <details className="border-rule mt-6 border-t pt-5">
          <summary className="text-ink-muted hover:text-ink cursor-pointer font-mono text-[11px] tracking-[0.16em] uppercase">
            Detalii eroare ({result.errors.length})
          </summary>
          <ul className="text-ink-muted mt-4 space-y-2 text-[13px] leading-relaxed">
            {result.errors.map((err, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-ink-faint font-mono text-[10px] tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </details>
      )}
    </li>
  );
}

function StatusBadge({ status }: { status: "valid" | "partial" | "invalid" }) {
  const base =
    "inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 font-mono text-[10px] tracking-[0.18em] uppercase";
  if (status === "valid") {
    return (
      <span className={`${base} bg-cobalt-50 text-cobalt-700`}>
        <span aria-hidden>✓</span>
        Verificat
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className={`${base} border-rule-strong text-ink-muted border bg-transparent`}>
        <span aria-hidden>⚠</span>
        Valabil · actualizat după
      </span>
    );
  }
  return (
    <span className={`${base} bg-ink text-paper`}>
      <span aria-hidden>✕</span>
      Invalid
    </span>
  );
}
