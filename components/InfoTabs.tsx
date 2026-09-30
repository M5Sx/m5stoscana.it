import Link from "next/link";
import { infoPages } from "@/lib/informazioni";

export default function InfoTabs({ active }: { active: string }) {
  return (
    <nav aria-label="Informazioni" className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/informazioni"
        className="text-sm px-3 py-1 rounded-full bg-[#385D80]/10 text-[#2d4e6e] hover:bg-[#385D80]/20 transition"
      >
        ← Informazioni
      </Link>
      {infoPages.map((p) => (
        <Link
          key={p.href}
          href={p.href}
          aria-current={p.href === active ? "page" : undefined}
          className={`text-sm px-3 py-1 rounded-full transition ${
            p.href === active
              ? "bg-[#385D80] text-white"
              : "bg-[#385D80]/10 text-[#2d4e6e] hover:bg-[#385D80]/20"
          }`}
        >
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
