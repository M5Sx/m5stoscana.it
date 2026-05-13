import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contatti" };

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/Movimento5StelleToscana/", icon: "f" },
  { label: "Instagram", href: "https://www.instagram.com/toscana5stelle/", icon: "IG" },
  { label: "YouTube", href: "https://www.youtube.com/@M5SToscana", icon: "▶" },
  { label: "X", href: "https://x.com/Toscana5Stelle", icon: "𝕏" },
  { label: "Linktr.ee", href: "https://linktr.ee/m5stoscana", icon: "⬡" },
];

export default function ContattiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Contatti
      </h1>

      {/* Sede */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Sede</h2>
        <p className="font-medium text-gray-800">Gruppo Consiliare M5S Toscana</p>
        <p className="text-gray-700">Consiglio Regionale della Toscana</p>
        <p className="text-gray-700">Via Cavour, 4 – 50129 Firenze</p>
        <a
          href="https://www.google.it/maps/place/Palazzo+Panciatichi,+Florence/@43.7742712,11.2509964,1732m/data=!3m1!1e3!4m6!3m5!1s0x132a57cd010e550b:0x8f91f825e1f20f4!8m2!3d43.7750179!4d11.2561955!16s%2Fg%2F11b6zp4337"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#385D80] hover:underline text-sm mt-1 inline-block"
        >
          Vedi su Google Maps ↗
        </a>
      </section>

      {/* Social e canali */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Social e canali</h2>
        <div className="flex flex-wrap gap-3">
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#385D80]/10 text-[#2d4e6e] font-medium px-4 py-2 rounded-lg hover:bg-[#385D80]/20 transition"
            >
              <span className="text-sm font-bold w-5 text-center">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Newsletter</h2>
        <p className="text-gray-700 mb-4">Iscriviti alla nostra newsletter mensile per restare aggiornato su notizie e iniziative.</p>
        <a
          href="https://m5stoscana.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-[#1e3650] font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
        >
          Iscriviti alla Newsletter →
        </a>
      </section>

      {/* Scrivici */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 mb-3 border-b border-gray-200 pb-2">Scrivici</h2>
        <p className="text-gray-700 mb-4">Hai domande o vuoi metterti in contatto con il gruppo consiliare?</p>
        <a
          href="https://forms.gle/bn41t6baeHvTXPAe6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#385D80] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2d4e6e] transition"
        >
          Compila il modulo di contatto →
        </a>
      </section>
    </div>
  );
}
