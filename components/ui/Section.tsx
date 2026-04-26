import { type ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "./Eyebrow";

type Props = {
  children: ReactNode;
  index?: string;
  label?: string;
  title?: ReactNode;
  intro?: ReactNode;
  className?: string;
  bordered?: boolean;
  containerClassName?: string;
  headerClassName?: string;
};

export function Section({
  children,
  index,
  label,
  title,
  intro,
  className = "",
  bordered = false,
  containerClassName = "",
  headerClassName = "",
}: Props) {
  return (
    <section
      className={`relative ${bordered ? "border-rule border-t" : ""} ${className}`}
    >
      <Container className={`py-20 md:py-28 ${containerClassName}`}>
        {(label || title || intro) && (
          <div className={`mb-14 max-w-3xl ${headerClassName}`}>
            {label && (
              <Eyebrow index={index} className="mb-7">
                {label}
              </Eyebrow>
            )}
            {title && (
              <h2 className="font-display text-ink text-[clamp(2rem,3vw+1rem,3.5rem)] leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {intro && (
              <p className="text-ink-muted mt-6 max-w-[55ch] text-lg leading-relaxed md:text-xl">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
