import type { Metadata } from "next";

export const metadata: Metadata = { title: "Credits" };

export default function CreditsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Credits
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          Questo sito è <strong>open source</strong> e realizzato con tecnologie
          libere. Chiunque può consultare il codice sorgente, proporre
          miglioramenti o riutilizzarlo per scopi analoghi.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Tecnologie utilizzate</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">Next.js</a> — framework React per siti statici</li>
          <li><a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">Tailwind CSS</a> — stili</li>
          <li>Contenuti in Markdown con frontmatter YAML</li>
          <li>Distribuzione su <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">GitHub Pages</a> tramite GitHub Actions</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Autore</h2>
        <p>
          Il sito è stato progettato e sviluppato da{" "}
          <a
            href="https://github.com/stefanocecere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#385D80] font-semibold hover:underline"
          >
            Stefano Cecere
          </a>
          , attivista e sviluppatore open source.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-2">Vuoi un sito simile per il tuo gruppo M5S?</h2>
        <p>
          Il codice sorgente è disponibile liberamente su GitHub. Se fai parte
          di un gruppo territoriale o consiliare del Movimento 5 Stelle e vuoi
          un sito simile o contribuire al progetto, puoi:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Consultare il codice su{" "}
            <a
              href="https://github.com/M5Sx/m5stoscana.it"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#385D80] hover:underline"
            >
              github.com/M5Sx/m5stoscana.it
            </a>
          </li>
          <li>Aprire una issue o una pull request per proporre miglioramenti</li>
        </ul>

        <p className="text-sm text-gray-500 mt-10 border-t pt-6">
          Il sito non utilizza cookie di tracciamento, non raccoglie dati
          personali e non dipende da servizi di terze parti a pagamento.
        </p>

<p><a href="https://drive.google.com/drive/folders/1LsurR2xKZdVAunDKVEPOl_BILbgLPjUO" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">GDR</a></p>

      </div>
    </div>
  );
}
