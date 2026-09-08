import { getAllSharedTags, getItemsByTag, getSharedTagLabel } from "@/lib/tags";
import PressReleaseRow from "@/components/PressReleaseRow";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllSharedTags().map(({ slug }) => ({ tag: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const label = getSharedTagLabel(tag);
  return { title: label };
}

export default async function SharedTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const label = getSharedTagLabel(tag);
  const items = getItemsByTag(tag);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-sm mb-2 flex gap-4">
        <Link href="/news" className="text-[#385D80] hover:underline">
          ← News
        </Link>
        <Link href="/comunicati" className="text-[#385D80] hover:underline">
          ← Comunicati Stampa
        </Link>
      </p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{label}</h1>
      {items.length === 0 ? (
        <p className="text-gray-500">Nessun contenuto trovato.</p>
      ) : (
        <div className="flex flex-col">
          {items.map((item) => (
            <PressReleaseRow
              key={`${item.kind}-${item.slug}`}
              post={item}
              basePath={item.kind === "post" ? "/news" : "/comunicati"}
              kindLabel={item.kind === "post" ? "News" : "Comunicato"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
