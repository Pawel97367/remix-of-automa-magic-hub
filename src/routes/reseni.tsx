import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Workflow, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/page-intro";
import { capabilities } from "@/lib/site-content";

export const Route = createFileRoute("/reseni")({
  head: () => ({ meta: [
    { title: "Řešení na míru — Adam Paul" },
    { name: "description", content: "AI automatizace dokumentů, dat, reportů, e-mailů a firemních procesů navržená podle reálné práce." },
    { property: "og:title", content: "AI řešení na míru — Adam Paul" },
    { property: "og:description", content: "Automatizace rutinní práce od prvního rozboru po funkční nástroj." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: SolutionsPage,
});

function SolutionsPage() { return <>
  <PageIntro eyebrow="Řešení na míru" title="Když se úkol opakuje, pravděpodobně jde zjednodušit.">Největší přínos bývá v procesech, kde lidé přepisují údaje, porovnávají tabulky nebo hledají informace v dokumentech a e-mailech.</PageIntro>
  <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{capabilities.map((item, index) => { const Icon=item.icon; return <article key={item.title} className={`border border-border bg-card p-6 ${index === capabilities.length - 1 ? "lg:col-start-2" : ""}`}><Icon className="size-6 text-primary"/><h2 className="mt-8 font-display text-xl font-semibold">{item.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></article>; })}</div>
  </section>
  <section className="bg-foreground text-background"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="eyebrow text-signal">Postup spolupráce</p><div className="mt-10 grid gap-px bg-background/15 md:grid-cols-3">{[{n:"01",t:"Pochopit proces",d:"Projdeme, co se dnes dělá ručně, odkud data přicházejí a kde vznikají chyby.",i:Search},{n:"02",t:"Navrhnout zjednodušení",d:"Vyberu nejmenší smysluplné řešení, které přinese měřitelnou úsporu.",i:Workflow},{n:"03",t:"Postavit a ověřit",d:"Nástroj otestujeme na reálných případech a doladíme pro každodenní použití.",i:Wrench}].map(x=>{const Icon=x.i; return <div key={x.n} className="bg-foreground p-7"><span className="font-mono text-xs text-background/40">{x.n}</span><Icon className="mt-10 text-signal"/><h3 className="mt-5 font-display text-2xl font-semibold">{x.t}</h3><p className="mt-3 text-sm leading-relaxed text-background/60">{x.d}</p></div>})}</div><Button asChild variant="hero" size="lg" className="mt-10"><Link to="/kontakt">Probrat váš proces <ArrowRight /></Link></Button></div></section>
  </>; }