import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-5xl font-display text-5xl font-semibold leading-tight sm:text-7xl">{title}</h1>
        <div className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}