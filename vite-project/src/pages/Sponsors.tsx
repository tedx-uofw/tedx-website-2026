type SponsorProps = {
  name: string;
  description: string;
  source?: string;
};

const SponsorCard = ({ name, description, source }: SponsorProps) => (
  <div className="flex flex-col md:flex-row gap-12 py-16 border-t border-neutral-200 items-center">
     <img 
       src={`/sponsors-images/${source}`} 
       alt={name} 
       className="w-[20%] h-auto md:ml-32" 
       loading="lazy"
       decoding="async"
     />
    
    <div className="flex flex-col justify-start items-center text-center md:items-start md:text-left md:ml-auto md:mr-32 md:w-[500px]">
      <h3 className="text-3xl font-bold font-['Manrope'] text-neutral-900 mb-6">{name}</h3>
      <p className="text-neutral-600 leading-relaxed text-base font-['Manrope']">
        {description}
      </p>
    </div>
  </div>
);

const Sponsors = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.";

  const tiers = [
    {
      title: "Innovator",
      sponsors: [
        { name: "Davis Law Group", description: lorem, source: "dlg.webp" },
        { name: "Associated Students of UW", description: "The University of Washington is committed to providing access, equal opportunity and reasonable accommodation in its services, programs, activities, education and employment for individuals with disabilities. To request disability accommodation contact the Disability Services Office at least ten days in advance at: 206.543.6450/V, 206.543.6452/TTY, 206.685.7264 (FAX), or e-mail at dso@u.washington.edu.", source: "asuw.webp" },
          { name: "University Marketing & Communications (UMAC)", description: "University Marketing & Communications (UMAC) is the University of Washington’s central branding, marketing and communications office. Based within University Advancement, UMAC brings together talented staff from across a range of marketing and communications disciplines in support of the UW’s highest priorities. At the center of our work is the Boundless brand, reflecting the optimistic spirit and extensive positive impact of the University on our students’ lives and on communities near and far.", source: "umac.webp" }
      ]
    },
    {
      title: "Thinker",
      sponsors: [
        { name: "Bombay Express", description: lorem, source: "bombay.webp" },
        { name: "Lune Cafe", description: lorem, source: "lune.webp" },
          { name: "Celsius", description: lorem, source: "celsius.webp" },
          { name: "Seattle Bouldering Project", description: lorem, source: "bouldering project.webp" },
          { name: "Neko Cat Cafe", description: lorem, source: "neko.webp" },
      ]
    }
  ];

  return (
    <>
      <div
          className="relative z-10 w-screen min-h-screen flex items-center justify-start
  max-[900px]:flex-col max-[900px]:justify-center max-[900px]:p-5"
      >
        {/* Noise texture overlay */}
        <div
            className="absolute inset-0 opacity-[0.015] pointer-events-none z-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
        />
        
        {/* MAIN CONTENT */}
        <div
            className="relative z-20 w-full pl-[8vw]
    max-[900px]:px-5 max-[900px]:mb-5 max-[900px]:flex max-[900px]:flex-col max-[900px]:items-center max-[900px]:text-center"
        >
          <div className="max-w-137.5">
            {/* Tag Line */}
            <div
                className="flex items-center gap-2 mb-6 tracking-[0.05em] text-black
            font-['Manrope'] text-[32px] font-normal leading-[140%] max-[900px]:justify-center"
            >
              <img src="/imprints-images/blueStar.svg" alt="*" className="w-5 md:w-6 lg:w-8" />
              Our Sponsors
            </div>

            {/* Hero Text */}
            <h1
                className="text-black font-['Andada_Pro'] text-[44px] font-normal leading-[140%]
            w-[160%] max-[900px]:w-full"
            >
              Thank you for supporting TedXUofW
            </h1>
          </div>
        </div>

        {/* Orb */}
          <img src="/imprints-images/saturatedblue.webp" alt="design" className="absolute rotate-[15.905deg] right-[-17vw] mt-[40%] max-[900px]:right-[-30vw]" />

        {/* RIGHT IMAGE: The X */}
        <img
            src="/imprints-images/x_imprinted_1.svg"
            alt="X Graphic"
            className="absolute right-[-1vw] top-1/2 -translate-y-1/2 h-[90vh] w-auto z-10 pointer-events-none
          max-[900px]:absolute max-[900px]:right-[-15vw] max-[900px]:top-1/2 max-[900px]:-translate-y-1/2
          max-[900px]:h-[60vh] max-[900px]:w-auto max-[900px]:z-0 max-[900px]:opacity-20"
            loading="lazy"
            decoding="async"
        />
      </div>
      <div className="w-full flex justify-center pb-20 relative bg-linear-to-b from-white to-[#F7F9FB]">
        {/* BACKGROUND DECORATION: Fingerprint */}
        <img
            src="/aboutpage-images/full_fingerprint_3.webp"
            alt=""
            className="absolute left-[-35vw] top-[30%] -translate-y-1/2 -rotate-19
            w-[90%] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
            style={{
              // This creates the fade effect:
              // Center (black) = Visible
              // Edges (transparent) = Invisible
              maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
              WebkitMaskImage:
                  "radial-gradient(circle, black 10%, transparent 70%)",
            }}
            loading="lazy"
            decoding="async"
        />

        <div className="w-[95%] px-6 flex flex-col gap-24 z-10">
          {tiers.map((tier, idx) => (
            <div key={idx} className="w-full">
              <h2 className="text-4xl font-bold md:text-5xl font-['Manrope'] mb-12 text-black pl-[4vw]">
                {tier.title}
              </h2>
              <div className="flex flex-col">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <SponsorCard 
                    key={sIdx} 
                    name={sponsor.name} 
                    description={sponsor.description}
                    source={sponsor.source}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;