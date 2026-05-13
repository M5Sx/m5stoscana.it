"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Chi Siamo", href: "/chi-siamo" },
  { label: "Programma", href: "/programma" },
  { label: "News", href: "/news" },
  { label: "Comunicati Stampa", href: "/tags/comunicati-stampa" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
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
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="px-3 py-2 rounded hover:bg-white/10 text-sm font-medium uppercase tracking-wide">
              {link.label}
            </Link>
          ))}
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
            <Link key={link.href} href={link.href} className="py-2 border-b border-white/20 text-sm" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
