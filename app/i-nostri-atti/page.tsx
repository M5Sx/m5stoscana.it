import type { Metadata } from "next";

export const metadata: Metadata = { title: "I Nostri Atti" };

export default function AttiPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        I Nostri Atti – XI^ Legislatura
      </h1>
      <p className="text-gray-600 mb-8">
        Di seguito sono riportati i principali atti consiliari presentati dal gruppo M5S Toscana durante la XI^ Legislatura (2020–2025).
      </p>
      <div className="bg-[#385D80]/5 border border-[#385D80]/30 rounded-lg p-6">
        <p className="text-[#1e3650] font-medium">
          🔗 Per consultare tutti gli atti ufficiali, visita il portale del{" "}
          <a
            href="https://www.consiglio.regione.toscana.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#385D80]"
          >
            Consiglio Regionale della Toscana
          </a>
          .
        </p>
      </div>
    </div>
  );
}
