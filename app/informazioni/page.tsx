import type { Metadata } from "next";
import Link from "next/link";
import { infoPages } from "@/lib/informazioni";

export const metadata: Metadata = { title: "Informazioni" };

export default function InformazioniPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Informazioni
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoPages.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="block rounded-xl border border-gray-200 p-6 hover:border-[#385D80] hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">{p.label}</h2>
            <p className="text-gray-600 text-sm mb-4">{p.description}</p>
            <span className="text-[#385D80] font-semibold text-sm">Leggi →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
