import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllPressReleases } from "@/lib/pressreleases";
import PostCard from "@/components/PostCard";
import PressReleaseRow from "@/components/PressReleaseRow";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);
  const pressReleases = getAllPressReleases().slice(0, 15);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#385D80] text-white pt-48 pb-20 px-4 text-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          M5S <span className="text-yellow-300">TOSCANA</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Pagina ufficiale del gruppo consiliare del Movimento 5 Stelle in Regione Toscana
        </p>
      </section>

      {/* Latest news */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
          Ultime Notizie
        </h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">Nessun articolo disponibile.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <Link
            href="/newsletter"
            className="inline-block bg-[#385D80] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d4e6e] transition"
          >
            Vai alla newsletter
          </Link>
        </div>
      </section>

      {/* Latest press releases */}
      <section className="max-w-3xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
          Ultimi Comunicati Stampa
        </h2>
        {pressReleases.length === 0 ? (
          <p className="text-gray-500">Nessun comunicato disponibile.</p>
        ) : (
          <div className="flex flex-col">
            {pressReleases.map((post) => (
              <PressReleaseRow key={post.slug} post={post} />
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <Link
            href="/comunicati"
            className="inline-block bg-[#385D80] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d4e6e] transition"
          >
            Tutti i comunicati
          </Link>
        </div>
      </section>

      {/* Newsletter + Linktree */}
      <section className="bg-[#385D80] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Per rimanere aggiornati:</h2>
          <p className="text-white/70 mb-8">Iscrivetevi alla nostra newsletter mensile o seguiteci sui canali social:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/newsletter"
              className="bg-yellow-400 text-[#1e3650] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Newsletter →
            </Link>
            <a
              href="https://linktr.ee/m5stoscana"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Canali Social →
            </a>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Le nostre 5 Stelle</h2>
          <p className="text-gray-600">I punti cardinali dell&apos;azione politica del Movimento 5 Stelle</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 mt-8">
            {[
              "Beni comuni",
              "Ecologia integrale",
              "Giustizia sociale",
              "Innovazione tecnologica",
              "Economia eco-sociale di mercato",
            ].map((label) => (
              <div key={label} className="flex flex-col items-center gap-2 w-36">
                <span className="text-4xl text-yellow-400" aria-hidden="true">★</span>
                <span className="font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
