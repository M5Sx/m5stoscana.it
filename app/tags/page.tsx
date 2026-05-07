import Link from "next/link";
import { getAllCategories, getPostsByCategory } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tutti i Tag" };

export default function TagsPage() {
  const categories = getAllCategories();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Tutti i Tag
      </h1>
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => {
          const count = getPostsByCategory(cat.slug).length;
          return (
            <Link
              key={cat.slug}
              href={`/tags/${cat.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#385D80]/10 text-[#2d4e6e] hover:bg-[#385D80]/20 font-medium transition-colors"
            >
              {cat.label}
              <span className="text-xs bg-[#385D80] text-white rounded-full px-2 py-0.5">
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
