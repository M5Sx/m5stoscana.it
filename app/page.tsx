import Link from "next/link";
import { getAllPosts, getNewspressPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);
  const newspressPosts = getNewspressPosts().slice(0, 8);

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
            href="/news"
            className="inline-block bg-[#385D80] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2d4e6e] transition"
          >
            Tutte le notizie
          </Link>
        </div>
      </section>

      {/* Comunicati stampa */}
      {newspressPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-[#385D80] pb-2">
            Comunicati Stampa
          </h2>
          <ul className="divide-y divide-gray-100">
            {newspressPosts.map((post) => {
              const dateStr = post.date
                ? new Date(post.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" })
                : "";
              return (
                <li key={post.slug}>
                  <Link
                    href={`/news/${post.slug}`}
                    className="flex items-baseline gap-4 py-3 hover:text-[#385D80] group"
                  >
                    {dateStr && (
                      <span className="text-xs text-gray-400 shrink-0 w-32">{dateStr}</span>
                    )}
                    <span className="text-sm font-medium text-gray-800 group-hover:text-[#385D80] leading-snug">
                      {post.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Newsletter + Linktree */}
      <section className="bg-[#385D80] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Per rimanere aggiornati:</h2>
          <p className="text-white/70 mb-8">Iscrivetevi alla nostra newsletter mensile o seguiteci sui canali social:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://m5stoscana.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-[#1e3650] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
            >
              Newsletter →
            </a>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">I nostri valori</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { icon: "🌿", label: "Ambiente" },
              { icon: "🏥", label: "Sanità" },
              { icon: "🔍", label: "Trasparenza" },
              { icon: "🚌", label: "Mobilità" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <span className="text-4xl">{icon}</span>
                <span className="font-semibold text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
