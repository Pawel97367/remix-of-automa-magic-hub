import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, FileText, Landmark, Sparkles, Table2 } from "lucide-react";

import heroImage from "@/assets/invoice-workflow.jpg";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Adam Paul — AI automatizace pro účetnictví a firmy" },
    { name: "description", content: "Stavím praktické AI nástroje pro účetnictví a malé a střední firmy. Automatizace dokumentů, dat, reportů a rutinní práce." },
    { property: "og:title", content: "Adam Paul — AI automatizace pro praxi" },
    { property: "og:description", content: "Praktické AI nástroje, které šetří čas v účetnictví a firmách." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img src={heroImage} alt="Automatické zpracování faktury do přehledné tabulky" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-3xl animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur"><Sparkles className="size-3.5 text-primary" /> AI nástroje pro reálnou práci</div>
            <h1 className="font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-8xl">Účetnictví znám z praxe.<br /><span className="text-primary">Rutinu z něj odstraňuji pomocí AI.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">Jsem student ekonomie s praxí z účetní kanceláře. Stavím nástroje, které převádějí dokumenty na data, párují záznamy a automatizují práci, která se jinak dělá ručně.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/projekty">Prohlédnout projekty <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/kontakt">Probrat automatizaci</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-px bg-background/15 sm:grid-cols-3">
          {[{v:"6 min",l:"ruční práce na jedné faktuře"},{v:"4",l:"hotové nástroje z praxe"},{v:"1 cíl",l:"méně rutiny, více kontroly"}].map((stat) => <div key={stat.v} className="bg-foreground px-6 py-8 lg:px-8"><strong className="font-display text-3xl text-signal">{stat.v}</strong><p className="mt-1 text-sm text-background/60">{stat.l}</p></div>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Co už funguje</p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Nástroje postavené kolem skutečných problémů.</h2>
            <p className="mt-5 text-muted-foreground">Nejdřív rozumět procesu. Potom vybrat správné místo pro automatizaci.</p>
            <Button asChild variant="link" className="mt-5 px-0"><Link to="/projekty">Všechny projekty <ArrowRight /></Link></Button>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {projects.slice(0,3).map((project) => { const Icon = project.icon; return <article key={project.number} className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-6"><span className="font-mono text-xs text-muted-foreground">{project.number}</span><div><h3 className="font-display text-xl font-semibold">{project.title}</h3><p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p></div><Icon className="size-5 text-primary transition-transform group-hover:scale-110" /></article>; })}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-card p-5 shadow-2xl shadow-foreground/10">
              <div className="absolute inset-0 data-grid opacity-50" />
              <div className="relative mx-auto mt-8 max-w-md space-y-4">
                <div className="flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-sm"><FileText className="text-primary" /><div className="h-2 flex-1 rounded-full bg-muted"><div className="h-full w-2/3 rounded-full bg-primary" /></div><Check className="text-signal" /></div>
                <div className="ml-10 flex items-center gap-3 rounded-md border border-border bg-card p-4 shadow-sm"><Landmark className="text-primary" /><div className="h-2 flex-1 rounded-full bg-muted"><div className="h-full w-4/5 rounded-full bg-primary" /></div><Check className="text-signal" /></div>
                <div className="ml-20 flex items-center gap-3 rounded-md border border-border bg-foreground p-4 text-background shadow-sm"><Table2 className="text-signal" /><span className="text-sm font-medium">Data připravena ke kontrole</span></div>
              </div>
            </div>
            <div>
              <p className="eyebrow">Jak přemýšlím</p>
              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">Neautomatizuji pro efekt. Automatizuji to, co zdržuje.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Nejsem klasický programátor. Moje výhoda je jinde: rozumím účetnictví, znám každodenní provoz a dokážu s pomocí AI rychle převést problém do funkčního nástroje.</p>
              <Button asChild className="mt-8" variant="outline"><Link to="/o-mne">Více o mně <ArrowRight /></Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
