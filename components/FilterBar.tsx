import Link from "next/link";
import { getAllCategories } from "@/lib/posts";

export default function FilterBar({ activeTag }: { activeTag?: string } = {}) {
  const categories = getAllCategories();

  return (
    <div className="flex flex-wrap items-center gap-2 py-3 border-b border-gray-200 mb-8">
      <Link
        href="/news"
        className={`text-sm px-3 py-1 rounded-full transition ${
          !activeTag
            ? "bg-[#385D80] text-white"
            : "bg-[#385D80]/10 text-[#2d4e6e] hover:bg-[#385D80]/20"
        }`}
      >
        Tutte
      </Link>
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/tags/${cat.slug}`}
          className={`text-sm px-3 py-1 rounded-full transition ${
            activeTag === cat.slug
              ? "bg-[#385D80] text-white"
              : "bg-[#385D80]/10 text-[#2d4e6e] hover:bg-[#385D80]/20"
          }`}
        >
          {cat.label}
        </Link>
      ))}
      <Link
        href="/tags/comunicati-stampa"
        className={`text-sm px-3 py-1 rounded-full transition ${
          activeTag === "comunicati-stampa"
            ? "bg-[#385D80] text-white"
            : "bg-[#385D80]/10 text-[#2d4e6e] hover:bg-[#385D80]/20"
        }`}
      >
        Comunicati Stampa
      </Link>
      <a
        href="https://m5stoscana.substack.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm bg-yellow-400 text-[#1e3650] font-bold px-3 py-1 rounded-full hover:bg-yellow-300 transition ml-auto"
      >
        Newsletter →
      </a>
    </div>
  );
}
