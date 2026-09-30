import { getPage, slugifyCategory } from "@/lib/posts";
import InfoTabs from "@/components/InfoTabs";
import FiveStars from "@/components/FiveStars";
import TocPopup, { type TocItem } from "@/components/TocPopup";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "I principi e valori" };

// Aggiunge un id ai titoli h2-h4 e ne costruisce l'indice
function addHeadingIds(html: string): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h([2-4])>([\s\S]*?)<\/h\1>/g, (_m, lvl: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/&[^;]+;/g, "").trim();
    let id = slugifyCategory(text) || "sezione";
    while (used.has(id)) id += "-";
    used.add(id);
    toc.push({ id, text, level: Number(lvl) });
    return `<h${lvl} id="${id}" class="scroll-mt-40">${inner}</h${lvl}>`;
  });
  return { html: out, toc };
}

export default async function PrincipiPage() {
  const page = await getPage("principi-e-valori");
  const { html, toc } = addHeadingIds(page?.contentHtml ?? "");

  // Le stelle vanno subito sotto il titolo "a. CINQUE STELLE"
  const m = html.match(/<h3 id="[^"]*cinque-stelle"[^>]*>[\s\S]*?<\/h3>/);
  const cut = m && m.index !== undefined ? m.index + m[0].length : -1;
  const before = cut >= 0 ? html.slice(0, cut) : html;
  const after = cut >= 0 ? html.slice(cut) : "";

  // Ancora di ciascuna stella (titoli "1. Beni comuni", ...)
  const starHref = (label: string) => {
    const found = toc.find((t) => t.level === 4 && t.text.toLowerCase().includes(label.toLowerCase()));
    return found ? `#${found.id}` : undefined;
  };

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <InfoTabs active="/principi-e-valori" />
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
          {page?.title ?? "I principi e valori"}
        </h1>
        {page ? (
          <>
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: before }} />
            {after && (
              <>
                <div className="my-8 py-8 bg-gray-50 rounded-xl">
                  <FiveStars hrefFor={starHref} />
                </div>
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: after }} />
              </>
            )}
          </>
        ) : (
          <p className="text-gray-500">Pagina non disponibile.</p>
        )}
      </div>

      <TocPopup items={toc} />
    </>
  );
}
