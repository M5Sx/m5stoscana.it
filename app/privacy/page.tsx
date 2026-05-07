import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Informativa Privacy
      </h1>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p>
          Questo sito web del Movimento 5 Stelle Toscana raccoglie dati personali
          esclusivamente per finalità di navigazione tecnica e non cede dati a terzi.
        </p>
        <h2>Titolare del trattamento</h2>
        <p>Gruppo Consiliare M5S – Regione Toscana</p>
        <h2>Dati raccolti</h2>
        <p>
          Il sito è statico e non utilizza cookie di profilazione né sistemi di
          tracciamento. Possono essere raccolti dati tecnici di navigazione dai
          server di hosting (GitHub Pages) secondo le loro policy.
        </p>
        <h2>Diritti degli utenti</h2>
        <p>
          Gli utenti possono esercitare i propri diritti ai sensi del GDPR
          contattando il gruppo consiliare tramite i canali ufficiali.
        </p>
      </div>
    </div>
  );
}
