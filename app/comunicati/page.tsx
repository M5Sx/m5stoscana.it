import { getAllPressReleases } from "@/lib/pressreleases";
import PressReleaseRow from "@/components/PressReleaseRow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Comunicati Stampa" };

export default function PressReleasePage() {
  const posts = getAllPressReleases();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Comunicati Stampa</h1>
      {posts.length === 0 ? (
        <p className="text-gray-500">Nessun comunicato disponibile.</p>
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
