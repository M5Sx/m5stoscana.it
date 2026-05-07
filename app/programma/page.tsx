import { getPage } from "@/lib/posts";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Programma" };

export default async function ProgrammaPage() {
  const page = await getPage("programma");
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        {page?.title ?? "Programma"}
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
