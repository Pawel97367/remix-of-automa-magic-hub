import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

const nav = [
  { label: "Projekty", to: "/projekty" as const },
  { label: "Řešení", to: "/reseni" as const },
  { label: "O mně", to: "/o-mne" as const },
  { label: "Kontakt", to: "/kontakt" as const },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="group flex items-center gap-3" aria-label="Adam Paul — domů">
            <span className="flex size-8 items-center justify-center rounded-sm bg-foreground font-display text-sm font-bold text-background transition-transform group-hover:-rotate-3">AP</span>
            <span className="font-display text-sm font-semibold">Adam Paul</span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Hlavní navigace">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} activeProps={{ className: "text-foreground" }} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild size="sm">
              <a href="mailto:xpauladam@gmail.com">Napsat mi <ArrowUpRight /></a>
            </Button>
          </div>
          <details className="relative md:hidden">
            <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md border border-border" aria-label="Otevřít menu"><Menu className="size-4" /></summary>
            <nav className="absolute right-0 top-12 w-52 rounded-md border border-border bg-popover p-2 shadow-xl">
              {nav.map((item) => <Link key={item.to} to={item.to} className="block rounded-sm px-3 py-2.5 text-sm font-medium hover:bg-accent">{item.label}</Link>)}
            </nav>
          </details>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div>
            <p className="font-display text-2xl font-semibold">Máte proces, který bere zbytečně moc času?</p>
            <p className="mt-3 max-w-xl text-sm text-background/65">Pojďme se podívat, jestli ho lze zjednodušit pomocí chytré automatizace.</p>
          </div>
          <div className="space-y-2 text-sm">
            <a className="flex items-center gap-2 transition-opacity hover:opacity-70" href="mailto:xpauladam@gmail.com"><Mail className="size-4" /> xpauladam@gmail.com</a>
            <a className="flex items-center gap-2 transition-opacity hover:opacity-70" href="tel:+420736198669"><Phone className="size-4" /> +420 736 198 669</a>
          </div>
        </div>
        <div className="border-t border-background/10 px-5 py-5 text-center text-xs text-background/45">© 2026 Adam Paul · AI automatizace pro praxi</div>
      </footer>
    </div>
  );
}