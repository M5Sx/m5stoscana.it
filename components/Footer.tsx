import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1e3650] text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-yellow-300 font-bold mb-3 uppercase text-sm">M5S Toscana</h3>
          <p className="text-sm text-gray-300">
            Pagina ufficiale del gruppo consiliare del Movimento 5 Stelle in
            Regione Toscana.
          </p>
        </div>

        <div>
          <h3 className="text-yellow-300 font-bold mb-3 uppercase text-sm">Link utili</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Homepage</Link></li>
            <li><Link href="/chi-siamo" className="hover:text-white">Chi Siamo</Link></li>
            <li><Link href="/i-nostri-atti" className="hover:text-white">I Nostri Atti</Link></li>
            <li><Link href="/news" className="hover:text-white">News</Link></li>
            <li><Link href="/contatti" className="hover:text-white">Contatti</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-yellow-300 font-bold mb-3 uppercase text-sm">Social</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="https://www.facebook.com/Movimento5StelleToscana/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/toscana5stelle/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Toscana5Stelle" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                X
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@M5SToscana" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-gray-400 py-4 flex flex-wrap justify-center gap-4">
        <span>© {new Date().getFullYear()} Movimento 5 Stelle Toscana. Tutti i diritti riservati.</span>
        <Link href="/privacy" className="hover:text-white underline">Privacy Policy</Link>
        <Link href="/credits" className="hover:text-white underline">Credits</Link>
      </div>
    </footer>
  );
}
