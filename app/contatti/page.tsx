import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contatti" };

export default function ContattiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        Contatti
      </h1>

      <div className="grid sm:grid-cols-2 gap-8 mb-12 text-gray-700">
        <div>
          <h2 className="font-semibold text-lg mb-2">Sede</h2>
          <p className="font-medium">Gruppo Consiliare M5S Toscana</p>
          <p>Consiglio Regionale della Toscana</p>
          <p>Via Cavour, 4 – 50129 Firenze</p>
          <a
            href="https://www.google.it/maps/place/Palazzo+Panciatichi,+Florence/@43.7742712,11.2509964,1732m/data=!3m1!1e3!4m6!3m5!1s0x132a57cd010e550b:0x8f91f825e1f20f4!8m2!3d43.7750179!4d11.2561955!16s%2Fg%2F11b6zp4337"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#385D80] hover:underline text-sm mt-1 inline-block"
          >
            Vedi su Google Maps ↗
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2">Social e canali</h2>
          <ul className="space-y-1">
            <li><a href="https://linktr.ee/m5stoscana" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">Linktr.ee →</a></li>
            <li><a href="https://www.facebook.com/Movimento5StelleToscana/" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">Facebook</a></li>
            <li><a href="https://www.instagram.com/toscana5stelle/" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">Instagram</a></li>
            <li><a href="https://www.youtube.com/@M5SToscana" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">YouTube</a></li>
            <li><a href="https://x.com/Toscana5Stelle" target="_blank" rel="noopener noreferrer" className="text-[#385D80] hover:underline">X</a></li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">Scrivici</h2>
      <a
        href="https://forms.gle/bn41t6baeHvTXPAe6"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#385D80] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#2d4e6e] transition"
      >
        Compila il modulo di contatto →
      </a>
    </div>
  );
}
