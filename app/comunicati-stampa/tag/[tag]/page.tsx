import { getAllPressReleaseTags, getPressReleasesByTag, getPressReleaseTagLabel } from "@/lib/pressreleases";
import PressReleaseRow from "@/components/PressReleaseRow";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllPressReleaseTags().map(({ slug }) => ({ tag: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const label = getPressReleaseTagLabel(tag);
  return { title: `${label} — Comunicati Stampa` };
}

export default async function PressReleaseTagPage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const label = getPressReleaseTagLabel(tag);
  const posts = getPressReleasesByTag(tag);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-sm mb-2">
        <Link href="/comunicati-stampa" className="text-[#385D80] hover:underline">
          ← Tutti i comunicati
        </Link>
      </p>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{label}</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">Nessun comunicato trovato.</p>
      ) : (
        <div className="flex flex-col">
          {posts.map((post) => (
            <PressReleaseRow key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
