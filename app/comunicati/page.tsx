import { getAllPressReleases } from "@/lib/pressreleases";
import PressReleaseRow from "@/components/PressReleaseRow";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Comunicati Stampa" };

export default function PressReleasePage() {
  const posts = getAllPressReleases();
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-6 rounded-lg border border-[#385D80]/20 bg-[#385D80]/5 px-4 py-3 text-sm text-gray-700">
        Per ricevere i comunicati potete anche iscrivervi al nostro {" "}
        <a
          href="https://whatsapp.com/channel/0029VbCa8rS1iUxWBNfPmc1X"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#385D80] hover:underline"
        >
          Canale WhatsApp
        </a>{" "}
        o {" "}
        <a
          href="https://t.me/m5s_toscana"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#385D80] hover:underline"
        >
          Canale Telegram
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
