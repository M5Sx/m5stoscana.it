"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { infoPages } from "@/lib/informazioni";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Informazioni", href: "/informazioni" },
  // { label: "News", href: "/news" }, // nascosto per ora
  { label: "Comunicati Stampa", href: "/comunicati" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Contatti", href: "/contatti" },
];

// Altri percorsi che attivano la stessa voce di menu
const extraMatches: Record<string, string[]> = {
  "/newsletter": ["/tags/newsletter"],
  "/comunicati": ["/tags/comunicati-stampa"],
  "/informazioni": infoPages.map((p) => p.href),
};

function normalize(p: string): string {
  return p.replace(/\/+$/, "") || "/";
}

export default function Navbar({ newsletterPaths = [] }: { newsletterPaths?: string[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Singoli articoli con categoria "newsletter" (es. /news/2026-09-21-newsletter-12-...)
  const newsletterSet = new Set(newsletterPaths.map(normalize));

  function isActive(current: string, href: string): boolean {
    const path = normalize(current);
    if (href === "/") return path === "/";
    if (href === "/newsletter" && newsletterSet.has(path)) return true;
    return [href, ...(extraMatches[href] ?? [])].some(
      (base) => path === base || path.startsWith(base + "/")
    );
  }
  const isHome = pathname === "/";

  const headerClass = isHome
    ? "fixed top-0 left-0 right-0 z-50 text-white backdrop-blur-md bg-[#385D80]/70"
    : "sticky top-0 z-50 text-white backdrop-blur-md bg-[#385D80]/90 shadow-md";

  const socialBarClass = "bg-black/20";

  return (
    <header className={headerClass}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo-m5s-toscana.png" alt="Logo M5S Toscana" width={240} height={120} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const item = (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(pathname, link.href) ? "page" : undefined}
                className={`block px-3 py-2 rounded text-sm font-medium uppercase tracking-wide border-b-2 transition ${
                  isActive(pathname, link.href)
                    ? "bg-white/15 text-yellow-300 border-yellow-300"
                    : "border-transparent hover:bg-white/10"
                }`}
              >
                {link.label}
                {link.href === "/informazioni" && <span className="ml-1 text-xs">▾</span>}
              </Link>
            );
            if (link.href !== "/informazioni") return item;
            // Voce con sottomenu (hover / focus da tastiera)
            return (
              <div key={link.href} className="relative group">
                {item}
                <div className="absolute left-0 top-full pt-1 hidden group-hover:block group-focus-within:block">
                  <ul className="min-w-56 rounded-lg bg-[#2d4e6e] shadow-lg py-2">
                    {infoPages.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className={`block px-4 py-2 text-sm hover:bg-white/10 ${
                            normalize(pathname) === sub.href ? "text-yellow-300 font-semibold" : ""
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-[#2d4e6e] px-4 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(pathname, link.href) ? "page" : undefined}
              className={`py-2 border-b border-white/20 text-sm ${
                isActive(pathname, link.href) ? "text-yellow-300 font-bold" : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          )).flatMap((el, i) =>
            navLinks[i].href === "/informazioni"
              ? [
                  el,
                  ...infoPages.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`py-2 pl-4 border-b border-white/10 text-sm ${
                        normalize(pathname) === sub.href ? "text-yellow-300 font-bold" : "text-white/80"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      – {sub.label}
                    </Link>
                  )),
                ]
              : [el]
          )}
        </nav>
      )}
    </header>
  );
}
