import { getAllPressReleases } from "@/lib/pressreleases";
import PressReleaseRow from "@/components/PressReleaseRow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Comunicati Stampa" };

export default function PressReleasePage() {
  const posts = getAllPressReleases();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6 rounded-lg border border-[#385D80]/20 bg-[#385D80]/5 px-4 py-3 text-sm text-gray-700">
        Per iscriverti alla lista dei giornalisti e ricevere i comunicati stampa,{" "}
        <a
          href="https://4aa6d27f.sibforms.com/serve/MUIFALnxBf0Fai6CoM90ww5i9anlgNMu7Ns7g3Z8aHh24SJ-_pl4QpG_QegjuA5HzXJ8Y3RubEvpPVJdtQ2fOzn_qP2zFzQZp8vtCSeRfj2gPf5bRqUgh9SF38rt5YcxtCLy1vzB5FhPLwjKU9ZHELPgIB_bKEYbMej3TJqx-KRV7V7xAFiVW63aMa6hs8uqoh2A9RMYeBc5h4ze"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#385D80] hover:underline"
        >
          vai qui
        </a>
      </div>
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
