import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/page-intro";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: [
    { title: "Kontakt — Adam Paul" },
    { name: "description", content: "Ozvěte se Adamovi Paulovi kvůli AI automatizaci účetních a firemních procesů." },
    { property: "og:title", content: "Kontakt — Adam Paul" },
    { property: "og:description", content: "Proberme rutinní proces, který chcete zjednodušit." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});

function ContactPage() { return <>
  <PageIntro eyebrow="Kontakt" title="Popište mi práci, která vás zdržuje.">Nemusíte mít připravené technické zadání. Stačí stručně napsat, co dnes děláte ručně, jak často a s jakými podklady.</PageIntro>
  <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-6 md:grid-cols-2"><article className="border border-border bg-card p-7 sm:p-10"><Mail className="size-8 text-primary"/><p className="mt-10 text-sm text-muted-foreground">E-mail</p><a href="mailto:xpauladam@gmail.com" className="mt-2 block break-all font-display text-2xl font-semibold hover:text-primary sm:text-3xl">xpauladam@gmail.com</a><Button asChild className="mt-8"><a href="mailto:xpauladam@gmail.com?subject=AI%20automatizace">Napsat e-mail <ArrowUpRight /></a></Button></article><article className="border border-border bg-card p-7 sm:p-10"><Phone className="size-8 text-primary"/><p className="mt-10 text-sm text-muted-foreground">Telefon</p><a href="tel:+420736198669" className="mt-2 block font-display text-2xl font-semibold hover:text-primary sm:text-3xl">+420 736 198 669</a><Button asChild className="mt-8" variant="outline"><a href="tel:+420736198669">Zavolat <ArrowUpRight /></a></Button></article></div><div className="mt-14 max-w-2xl"><p className="eyebrow">Co poslat</p><ul className="mt-6 space-y-3 text-muted-foreground"><li>— Jaký úkol nebo proces se opakuje</li><li>— Kolik času přibližně zabírá</li><li>— V jakých dokumentech nebo aplikacích probíhá</li></ul></div></section>
  </>; }