import {
  BanknoteArrowDown,
  Bot,
  Braces,
  Clock3,
  FileSearch,
  Globe2,
  MailCheck,
  RefreshCw,
  Sheet,
  TableProperties,
} from "lucide-react";

export const projects = [
  {
    number: "01",
    title: "Vytěžování faktur pomocí AI",
    description:
      "Z PDF nebo fotografie přečte dodavatele, částky, data i variabilní symbol a připraví čistá data do tabulky.",
    result: "Zhruba 6 minut ruční práce nahrazeno automatickým zpracováním.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Párování faktur s bankou",
    description:
      "Porovná faktury s bankovním výpisem podle částky, symbolu a data. Nejasné položky nechá ke kontrole.",
    result: "Méně hledání v řádcích, rychlejší kontrola plateb.",
    icon: BanknoteArrowDown,
  },
  {
    number: "03",
    title: "Evidence času do Sheets",
    description:
      "Klávesová zkratka spustí nebo ukončí měření a automaticky zapíše přehled práce do Google Sheets.",
    result: "Jednoduchá evidence bez přerušování práce.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Scraper obchodních kontaktů",
    description:
      "Vyhledá veřejné firemní kontakty podle zvoleného oboru a regionu a připraví je pro další práci.",
    result: "Strukturovaná data místo ručního procházení webů.",
    icon: Globe2,
  },
];

export const capabilities = [
  { title: "Vytěžování dokumentů", text: "Faktury, objednávky, smlouvy nebo formuláře do strukturovaných dat.", icon: FileSearch },
  { title: "Kontroly a párování dat", text: "Hledání rozdílů, duplicit a chyb napříč tabulkami a systémy.", icon: RefreshCw },
  { title: "Automatické reporty", text: "Pravidelné přehledy bez ručního kopírování a úprav tabulek.", icon: TableProperties },
  { title: "AI asistenti", text: "Odpovědi a orientace nad interními dokumenty vaší firmy.", icon: Bot },
  { title: "Zpracování e-mailů", text: "Třídění zpráv, získání údajů a příprava dalších kroků.", icon: MailCheck },
  { title: "Sběr dat z webu", text: "Pravidelné získávání veřejných informací do použitelné podoby.", icon: Sheet },
  { title: "Propojení aplikací", text: "Přenos informací mezi nástroji přes API bez opakovaného přepisování.", icon: Braces },
];