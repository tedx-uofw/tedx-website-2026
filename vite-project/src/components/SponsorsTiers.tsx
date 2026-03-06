const sponsors = {
  innovator: [
    {
      name: "Davis Law Group",
      source: "dlg.webp",
    },
    {
      name: "Associated Students of UW",
      source: "asuw.webp",
    },
  ],
  thinker: [
    {
      name: "Graduate and Professional Student Senate (GPSS)",
      source: "gpss-logo-icon.webp",
    },
  ],
  friend: [
    {
      name: "University Marketing & Communications (UMAC)",
      source: "umac.webp",
    },
    {
      name: "Bombay Express",
      source: "bombay.webp",
    },
    {
      name: "Lune Cafe",
      source: "lune.webp",
    },
    {
      name: "Celsius",
      source: "celsius.webp",
    },
  ],
  raffle: [
    {
      name: "Seattle Bouldering Project",
      source: "bouldering project.webp",
    },
    {
      name: "Neko Cat Cafe",
      source: "neko.webp",
    },
    {
      name: "UW Intercollegiate Athletics (UW ICA)",
      source: "uwica.webp",
    },
  ],
};

import { useState } from "react";

const SponsorImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* SKELETON LOADER: Shows until image is fully ready */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 animate-pulse rounded-lg">
          <div className="w-1/2 h-1/4 bg-slate-200 rounded" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default function SponsorsSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 space-y-16">
      {/* INNOVATOR TIER */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sponsors.innovator.map((sponsor, idx) => (
          <div
            key={idx}
            className="aspect-video bg-white border-2 border-slate-50 rounded-3xl p-16 flex items-center justify-center shadow-xl transition-transform hover:-translate-y-1"
          >
            <SponsorImage
              src={`/sponsors-images/${sponsor.source}`}
              alt={sponsor.name}
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
        ))}
      </div>

      {/* THINKER TIER */}
      <div className="flex justify-center">
        <div className="w-[95%] md:w-3/5 aspect-video md:aspect-[21/9] bg-white rounded-2xl p-12 flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1">
          <SponsorImage
            src={`/sponsors-images/${sponsors.thinker[0].source}`}
            alt={sponsors.thinker[0].name}
            className="w-[85%] h-[85%] object-contain"
          />
        </div>
      </div>

      {/* FRIEND TIER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-[85%] mx-auto">
        {sponsors.friend.map((sponsor, idx) => (
          <div
            key={idx}
            className="aspect-square bg-white border border-slate-100 rounded-xl p-8 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1"
          >
            <SponsorImage
              src={`/sponsors-images/${sponsor.source}`}
              alt={sponsor.name}
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
        ))}
      </div>

      {/* RAFFLE TIER */}
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {sponsors.raffle.map((sponsor, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[25%] aspect-[3/2] bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-center transition-opacity hover:opacity-80"
          >
            <SponsorImage
              src={`/sponsors-images/${sponsor.source}`}
              alt={sponsor.name}
              className="w-[85%] h-[85%] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
