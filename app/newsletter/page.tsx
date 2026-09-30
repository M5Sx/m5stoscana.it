import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Iscriviti alla newsletter del Movimento 5 Stelle Toscana: notizie, iniziative e attività del gruppo consiliare in Regione Toscana.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Newsletter
      </h1>

      <section className="mb-10 text-gray-700 space-y-4 text-lg">
        <p>
          Vuoi sapere cosa facciamo in Consiglio regionale e quali sono le attività e gli appuntamenti più importanti del Movimento 5 Stelle in Toscana?<br />
          <strong>Iscriviti alla nostra newsletter</strong>. Arriva direttamente nella tua casella email e puoi disiscriverti in qualsiasi momento con un clic.
        </p>
      </section>

      <section className="mb-10 bg-[#005277] rounded-xl p-6 flex flex-col items-center text-center">
        <iframe
          src="https://m5stoscana.substack.com/embed?transparent=1&light=1"
          title="Iscrizione alla newsletter M5S Toscana"
          width="480"
          height="320"
          style={{ border: 0, background: "transparent" }}
          className="w-full max-w-[480px]"
          scrolling="no"
          loading="lazy"
        />
        <p className="text-sm text-white mt-4">
          Il modulo non si carica?{" "}
          <a
            href="https://m5stoscana.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Iscriviti direttamente su Substack ↗
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">
          Numeri precedenti
        </h2>
        <p className="text-gray-700 mb-4">
          Leggi le newsletter già pubblicate.
        </p>
        <Link
          href="/tags/newsletter"
          className="inline-block bg-[#385D80] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2d4e6e] transition"
        >
          Archivio newsletter →
        </Link>
      </section>
    </div>
  );
}
