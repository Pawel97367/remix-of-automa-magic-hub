import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Lightbulb } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/page-intro";

export const Route = createFileRoute("/o-mne")({
  head: () => ({ meta: [
    { title: "O mně — Adam Paul" },
    { name: "description", content: "Student ekonomie s praxí v účetní kanceláři, který s pomocí AI staví praktické firemní nástroje." },
    { property: "og:title", content: "O mně — Adam Paul" },
    { property: "og:description", content: "Propojuji znalost účetní praxe s možnostmi dnešní AI." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

function AboutPage() { return <>
  <PageIntro eyebrow="O mně" title="Technologie je prostředek. Výchozím bodem je pro mě praxe.">Studuji ekonomii, prošel jsem účetní kanceláří a viděl, kolik odborného času mizí v úkolech, které jsou nutné — ale opakují se stále stejně.</PageIntro>
  <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24"><div className="space-y-5 text-lg leading-relaxed text-muted-foreground"><p>Právě proto stavím AI nástroje. Ne jako klasický programátor, který hledá využití pro technologii, ale jako člověk, který nejdřív zná pracovní problém.</p><p>Rozumím tomu, co je faktura, jak se párují platby, proč musí být výstup zkontrolovatelný a proč nástroj musí zapadnout do práce firmy — ne naopak.</p><p>AI mi umožňuje rychle převést tuto znalost do funkčních řešení. Spojuji doménový kontext, zvědavost a schopnost dotahovat prototypy do použitelné podoby.</p></div><div className="divide-y divide-border border-y border-border">{[{i:GraduationCap,t:"Ekonomické vzdělání",d:"Kontext pro pochopení čísel, firem a rozhodování."},{i:BriefcaseBusiness,t:"Praxe v účetní kanceláři",d:"Zkušenost s procesy, ve kterých se opravdu ztrácí čas."},{i:Lightbulb,t:"Tvorba s pomocí AI",d:"Rychlá cesta od konkrétní potřeby k ověřitelnému nástroji."}].map(x=>{const Icon=x.i; return <div key={x.t} className="grid grid-cols-[auto_1fr] gap-5 py-7"><Icon className="mt-1 text-primary"/><div><h2 className="font-display text-xl font-semibold">{x.t}</h2><p className="mt-2 text-sm text-muted-foreground">{x.d}</p></div></div>})}</div></div><div className="mt-20 border-l-4 border-signal bg-secondary p-7 sm:p-10"><p className="max-w-4xl font-display text-2xl font-semibold leading-relaxed sm:text-3xl">„Nejlepší automatizace není ta nejsložitější. Je to ta, která člověku každý den odstraní jednu zbytečnou povinnost.“</p></div><Button asChild className="mt-10" size="lg"><Link to="/kontakt">Pojďme se spojit <ArrowRight /></Link></Button></section>
  </>; }