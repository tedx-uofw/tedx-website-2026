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

    <div className="flex flex-col justify-start items-center text-center md:items-start md:text-left md:ml-auto md:mr-32 md:w-125">
      <h3 className="text-3xl font-bold font-['Manrope'] text-neutral-900 mb-6">
        {name}
      </h3>
      <p className="text-neutral-600 leading-relaxed text-base font-['Manrope']">
        {description}
      </p>
    </div>
  </div>
);

const Sponsors = () => {
  const tiers = [
    {
      title: "Innovator",
      sponsors: [
        {
          name: "Davis Law Group",
          description:
            "The award-winning team of Seattle personal injury attorneys at Davis Law Group Car Accident and Personal Injury Lawyers has helped injured victims and their loved ones get the justice they deserve after a life-changing injury. Our top-rated legal team is dedicated to helping you recover fair compensation and get your life back on track.",
          source: "dlg.webp",
        },
        {
          name: "Associated Students of UW",
          description:
            "The University of Washington is committed to providing access, equal opportunity and reasonable accommodation in its services, programs, activities, education and employment for individuals with disabilities. To request disability accommodation contact the Disability Services Office at least ten days in advance at: 206.543.6450/V, 206.543.6452/TTY, 206.685.7264 (FAX), or e-mail at dso@u.washington.edu.",
          source: "asuw.webp",
        },
      ],
    },
    {
      title: "Thinker",
      sponsors: [
        {
          name: "Graduate and Professional Student Senate (GPSS)",
          description:
            "The Graduate and Professional Student Senate (GPSS) represents over 15,000 graduate and professional students at the University of Washington. Our Senators represent academic departments as well as non-academic programs and communities. GPSS hosts events and programming, provides opportunities for engagement through internal committees and university-wide liaison positions, and offers funding for academic and professional development.",
          source: "gpss-logo-icon.webp",
        },
      ],
    },
    {
      title: "Friend",
      sponsors: [
        {
          name: "University Marketing & Communications (UMAC)",
          description:
            "University Marketing & Communications (UMAC) is the University of Washington’s central branding, marketing and communications office. Based within University Advancement, UMAC brings together talented staff from across a range of marketing and communications disciplines in support of the UW’s highest priorities. At the center of our work is the Boundless brand, reflecting the optimistic spirit and extensive positive impact of the University on our students’ lives and on communities near and far.",
          source: "umac.webp",
        },
        {
          name: "Bombay Express",
          description:
            "Bombay Express is the go to spot in the University District for quick, authentic Indian food at an affordable price. Voted the best Indian restaurant in the U-District, we serve food from all over India.",
          source: "bombay.webp",
        },
        {
          name: "Lune Cafe",
          description:
            "At Lune, we're more than food and coffee. We're creating a space where good vibes, meaningful connections, and feel good flavors come together. Our mission is to offer an uplifting experience for both our guests and our team  a place where everyone feels seen, inspired, and nourished inside and out.",
          source: "lune.webp",
        },
        {
          name: "Celsius",
          description:
            "We aim to inspire those who want to live fit by giving them a sustained energy source that's specially formulated to work with your body to help you reach your goals. We support those who work overtime at everything they do and never take shortcuts. We power through the extra set, we push through the last sprint, and we hustle through the workday.",
          source: "celsius.webp",
        },
      ],
    },
    {
      title: "Raffle",
      sponsors: [
        {
          name: "Seattle Bouldering Project",
          description:
            "SBP creates fun, inspiring and inclusive climbing, movement, and community spaces.",
          source: "bouldering project.webp",
        },
        {
          name: "Neko Cat Cafe",
          description:
            "NEKO is a haven for rescue cats and humans to relax and enjoy each other's company.",
          source: "neko.webp",
        },
        {
          name: "UW Intercollegiate Athletics (UW ICA)",
          description:
            "We strive to set the example for equitable and inclusive excellence in sport, and build on a legacy of success that reflects equity, advocacy and belonging.",
          source: "uwica.webp",
        },
      ],
    },
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
        {/* BACKGROUND DECORATION: Fingerprint */}
        <img
          src="/imprints-images/full_fingerprint_3.webp"
          alt=""
          className="absolute left-[-35vw] top-[30%] -translate-y-1/2 -rotate-19
            w-[90%] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 10%, transparent 70%)",
          }}
          loading="lazy"
          decoding="async"
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
              <img
                src="/imprints-images/blueStar.svg"
                alt="*"
                className="w-5 md:w-6 lg:w-8"
              />
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
        <img
          src="/imprints-images/saturatedblue.webp"
          alt="design"
          className="absolute rotate-[15.905deg] right-[-17vw] mt-[40%] max-[900px]:right-[-30vw]"
        />

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
      <div className="w-full flex justify-center relative bg-linear-to-b from-white to-[#F7F9FB]">
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
