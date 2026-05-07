import { getPage } from "@/lib/posts";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Chi Siamo" };

const people = [
  {
    name: "Irene Galletti",
    role: "Consigliera Regionale",
    bio: "Nata a Pisa nel 1977, laureata in Giurisprudenza con specializzazione in diritti umani e gestione dei conflitti (Scuola Superiore Sant'Anna). Eletta al Consiglio Regionale nel 2015, 2020 e 2025. Presidente della Commissione Politiche Europee e Relazioni Internazionali. Segretario Questore dell'Ufficio di Presidenza.",
    photo: "/images/people/irene-galletti.jpg",
    email: "i.galletti@consiglio.regione.toscana.it",
    url: "https://linktr.ee/irenegalletti",
    urlLabel: "Linktr.ee",
    links: [
      { label: "Profilo", href: "https://www.consiglio.regione.toscana.it/consiglieri/scheda_consigliere?id=487" },
      { label: "Iniziative", href: "https://www.consiglio.regione.toscana.it/atticonsiglio/default?idcons=487" },
    ],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/IreneGallettiM5S", icon: "f" },
      { label: "Instagram", href: "https://www.instagram.com/irene_galletti_m5s/", icon: "ig" },
      { label: "X", href: "https://twitter.com/Irene_5s", icon: "x" },
    ],
  },
  {
    name: "Luca Rossi Romanelli",
    role: "Consigliere Regionale",
    bio: "Eletto nel collegio di Firenze 1 alle elezioni del 12-13 ottobre 2025. Presidente e Tesoriere del gruppo M5S in Consiglio Regionale. Membro della Commissione di Controllo e della Terza Commissione (Sanità e Politiche Sociali).",
    photo: "/images/people/luca-rossi-romanelli.jpg",
    email: "l.rossiromanelli@consiglio.regione.toscana.it",
    url: "https://linktr.ee/lucarossiromanelli",
    urlLabel: "Linktr.ee",
    links: [
      { label: "Profilo", href: "https://www.consiglio.regione.toscana.it/consiglieri/scheda_consigliere?id=594" },
      { label: "Iniziative", href: "https://www.consiglio.regione.toscana.it/atticonsiglio/default?idcons=594" },
    ],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61580911612289", icon: "f" },
      { label: "Instagram", href: "https://www.instagram.com/luca.rossiromanelli/", icon: "ig" },
    ],
  },
  {
    name: "David Barontini",
    links: [],
    social: [
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61587363921052", icon: "f" },
      { label: "Instagram", href: "https://www.instagram.com/david.barontini/", icon: "ig" },
    ],
    role: "Assessore Regionale",
    bio: "Assessore della Regione Toscana con delega alla transizione ecologica e sviluppo sostenibile: gestione dei rifiuti, economia circolare, efficienza energetica, adattamento ai cambiamenti climatici, tutela ambientale ed erosione costiera.",
    photo: "/images/people/david-barontini.jpg",
    email: "david.barontini@regione.toscana.it",
    url: "https://www.regione.toscana.it/regione/giunta/david-barontini",
    urlLabel: "Scheda ufficiale",
  },
];

export default async function ChiSiamoPage() {
  const page = await getPage("chi-siamo");
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-[#385D80] pb-2">
        {page?.title ?? "Chi Siamo"}
      </h1>
      {page ? (
        <div
          className="prose prose-lg prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: page.contentHtml }}
        />
      ) : (
        <p className="text-gray-500">Pagina non disponibile.</p>
      )}

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 border-b-2 border-[#385D80] pb-2">
        I nostri rappresentanti
      </h2>
      <div className="flex flex-col gap-12">
        {people.map((person) => (
          <div key={person.name} className="flex flex-col sm:flex-row gap-8">
            <div className="relative w-full sm:w-64 shrink-0 aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={person.photo}
                alt={`Foto di ${person.name}`}
                fill
                className="object-cover object-top"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
              <p className="text-sm font-medium text-[#385D80] mb-3">{person.role}</p>
              <p className="text-gray-600 mb-4">{person.bio}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <a href={person.url} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-[#385D80] hover:bg-[#2d4e6e] text-white text-sm font-semibold transition-colors">
                  {person.urlLabel} ↗
                </a>
                {person.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-1.5 rounded-full border border-[#385D80] text-[#385D80] hover:bg-[#385D80]/10 text-sm font-semibold transition-colors">
                    {l.label} ↗
                  </a>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a href={`mailto:${person.email}`} className="text-[#385D80] hover:underline">
                  {person.email}
                </a>
                {person.social.map((s) => (
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="w-8 h-8 rounded-full bg-[#385D80]/10 hover:bg-[#385D80]/20 flex items-center justify-center text-[#2d4e6e] font-bold text-xs transition-colors">
                    {s.icon === "f" && "f"}
                    {s.icon === "ig" && "ig"}
                    {s.icon === "x" && "𝕏"}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
