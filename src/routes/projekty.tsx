import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/lib/site-content";

export const Route = createFileRoute("/projekty")({
  head: () => ({ meta: [
    { title: "Projekty — Adam Paul" },
    { name: "description", content: "Ukázky AI nástrojů pro vytěžování faktur, párování plateb, evidenci času a sběr obchodních kontaktů." },
    { property: "og:title", content: "AI projekty — Adam Paul" },
    { property: "og:description", content: "Praktické nástroje postavené pro účetnictví a každodenní firemní práci." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ProjectsPage,
});

function ProjectsPage() {
  return <>
    <PageIntro eyebrow="Vybrané projekty" title="Od rutinního úkolu k nástroji, který pracuje za vás.">Každý nástroj vznikl z konkrétního problému. Cílem není nahradit kontrolu člověka, ale odstranit přepisování, hledání a opakované klikání.</PageIntro>
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
        {projects.map((project) => { const Icon = project.icon; return <article key={project.number} className="group min-h-80 bg-card p-7 sm:p-10">
          <div className="flex items-center justify-between"><span className="font-mono text-xs text-muted-foreground">PROJEKT {project.number}</span><Icon className="size-7 text-primary" /></div>
          <h2 className="mt-12 max-w-md font-display text-3xl font-semibold">{project.title}</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">{project.description}</p>
          <div className="mt-8 flex items-start gap-2 border-t border-border pt-5 text-sm font-medium"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-signal" />{project.result}</div>
        </article>; })}
      </div>
      <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center"><div><h2 className="font-display text-2xl font-semibold">Podobný proces řešíte i vy?</h2><p className="mt-2 text-muted-foreground">Popište mi ho. Navrhnu, kde má automatizace smysl.</p></div><Button asChild size="lg"><Link to="/kontakt">Ozvat se <ArrowRight /></Link></Button></div>
    </section>
  </>;
}