import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <Container className="py-32 md:py-40">
      <div className="max-w-xl">
        <Eyebrow index="404">Nu există această adresă</Eyebrow>
        <h1 className="font-display text-ink mt-7 text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[1.02] tracking-tight">
          Linkul poate fi vechi sau{" "}
          <em className="font-light italic">a fost mutat</em>.
        </h1>
        <p className="text-ink-muted mt-6 text-lg leading-relaxed">
          Întoarce-te la pagina principală sau caută ce te interesează în
          meniul de sus.
        </p>
        <div className="mt-10">
          <Button href="/" size="lg" arrow>
            Acasă
          </Button>
        </div>
      </div>
    </Container>
  );
}
