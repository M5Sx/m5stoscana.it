"use client";
import { useEffect, useState } from "react";

export type TocItem = { id: string; text: string; level: number };

// Pulsante fisso in alto a destra che apre l'indice dei capitoli della pagina
export default function TocPopup({ items }: { items: TocItem[] }) {
  // null = stato iniziale: aperto su desktop, chiuso su mobile (via CSS, senza sfarfallio)
  const [open, setOpen] = useState<boolean | null>(null);
  const [top, setTop] = useState(96);

  useEffect(() => {
    const header = document.querySelector("header");
    const update = () => setTop((header?.getBoundingClientRect().height ?? 80) + 12);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (items.length === 0) return null;

  return (
    <div className="fixed right-4 z-40" style={{ top }}>
      <button
        onClick={() => setOpen(open === null ? window.innerWidth < 768 : !open)}
        aria-expanded={open ?? undefined}
        aria-controls="toc-panel"
        className="ml-auto flex items-center gap-2 bg-[#385D80] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-[#2d4e6e] transition"
      >
        <span aria-hidden="true">☰</span>{" "}
        {open === null ? (
          <>
            <span className="md:hidden">Capitoli</span>
            <span className="hidden md:inline">Chiudi</span>
          </>
        ) : open ? "Chiudi" : "Capitoli"}
      </button>
      {open !== false && (
        <nav
          id="toc-panel"
          aria-label="Capitoli della pagina"
          className={`${open === null ? "hidden md:block" : ""} mt-2 w-72 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl bg-white shadow-xl border border-gray-200 py-2`}
          style={{ maxHeight: `calc(100vh - ${top + 64}px)` }}
        >
          <ul>
            {items.map((it) => (
              <li key={it.id}>
                <a
                  href={`#${it.id}`}
                  onClick={() => window.innerWidth < 768 && setOpen(false)}
                  className={`block px-4 py-1.5 text-sm hover:bg-[#385D80]/10 ${
                    it.level === 2
                      ? "font-bold text-gray-900"
                      : it.level === 3
                      ? "pl-6 text-gray-800"
                      : "pl-10 text-gray-600"
                  }`}
                >
                  {it.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
