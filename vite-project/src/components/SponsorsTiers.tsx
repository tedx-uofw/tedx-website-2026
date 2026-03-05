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

export default function SponsorTiers() {
  return (
    <section className="max-w-7xl mx-auto px-4 space-y-16">
      {/* INNOVATOR TIER: 2 Massive Cards */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sponsors.innovator.map((sponsor, idx) => (
            <div
              key={idx}
              className="aspect-video bg-white border-2 border-slate-50 rounded-3xl p-16 flex items-center justify-center shadow-xl transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl font-bold text-white w-full h-full flex items-center justify-center">
                <img
                  src={`/sponsors-images/${sponsor.source}`}
                  alt={sponsor.name}
                  className="w-[85%] h-[85%] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* THINKER TIER: 1 Centered, Medium-Large Card */}
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="w-full md:w-3/5 aspect-video md:aspect-[21/9] bg-amber-50/30 shadow-sm rounded-2xl p-12 flex items-center justify-center shadow-md transition-transform hover:-translate-y-1">
            <span className="text-2xl font-bold text-white w-full h-full flex items-center justify-center">
              <img
                src={`/sponsors-images/${sponsors.thinker[0].source}`}
                alt={sponsors.thinker[0].name}
                className="w-[85%] h-[85%] object-contain"
                loading="lazy"
                decoding="async"
              />
            </span>
          </div>
        </div>
      </div>

      {/* FRIEND TIER: 4 Standard Grid Cards */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sponsors.friend.map((sponsor, idx) => (
            <div
              key={idx}
              className="aspect-square bg-white border border-slate-100 rounded-xl p-8 flex items-center justify-center shadow-sm transition-transform hover:-translate-y-1"
            >
              <span className="text-xl font-semibold text-slate-800 text-center w-full h-full flex items-center justify-center">
                <img
                  src={`/sponsors-images/${sponsor.source}`}
                  alt={sponsor.name}
                  className="w-[85%] h-[85%] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RAFFLE TIER: 3 Small, Condensed Cards */}
      <div className="space-y-6">
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {sponsors.raffle.map((sponsor, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[30%] aspect-[3/2] bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center justify-center transition-opacity hover:opacity-80"
            >
              <span className="text-base font-medium text-slate-600 w-full h-full flex items-center justify-center">
                <img
                  src={`/sponsors-images/${sponsor.source}`}
                  alt={sponsor.name}
                  className="w-[85%] h-[85%] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
