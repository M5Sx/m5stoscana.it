import { getPage } from "@/lib/posts";
import InfoTabs from "@/components/InfoTabs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "I principi e valori" };

export default async function PrincipiPage() {
  const page = await getPage("principi-e-valori");
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <InfoTabs active="/principi-e-valori" />
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        {page?.title ?? "I principi e valori"}
      </h1>
      {page ? (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: page.contentHtml }}
        />
      ) : (
        <p className="text-gray-500">Pagina non disponibile.</p>
      )}
    </div>
  );
}
