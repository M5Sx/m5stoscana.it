const stars = [
  "Beni comuni",
  "Ecologia integrale",
  "Giustizia sociale",
  "Innovazione tecnologica",
  "Economia eco-sociale di mercato",
];

// Le 5 stelle; se `hrefFor` è passato, ogni stella diventa un link (es. ancora nella pagina)
export default function FiveStars({ hrefFor }: { hrefFor?: (label: string) => string | undefined }) {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-center gap-x-4 gap-y-8 px-2">
      {stars.map((label) => {
        const inner = (
          <>
            <span className="text-4xl text-yellow-400" aria-hidden="true">★</span>
            <span className="font-semibold text-gray-700 text-sm md:text-base leading-tight">{label}</span>
          </>
        );
        const href = hrefFor?.(label);
        return href ? (
          <a key={label} href={href} className="flex flex-col items-center gap-2 w-32 sm:w-auto sm:flex-1 sm:min-w-0 text-center hover:opacity-80 transition">
            {inner}
          </a>
        ) : (
          <div key={label} className="flex flex-col items-center gap-2 w-32 sm:w-auto sm:flex-1 sm:min-w-0 text-center">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
