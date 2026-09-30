import type { Metadata } from "next";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Iscriviti alla newsletter del Movimento 5 Stelle Toscana: notizie, iniziative e attività del gruppo consiliare in Regione Toscana.",
};

export default function NewsletterPage() {
  const posts = getPostsByCategory("newsletter");

  return (
    <>
    <div className="max-w-3xl mx-auto px-4 pt-12 pb-4">
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

    </div>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#385D80] pb-2">
          Numeri precedenti
        </h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">Nessuna newsletter pubblicata.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
