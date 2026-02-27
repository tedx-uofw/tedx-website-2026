// Assets - ensure these paths match your folder structure
import {GrainySVG} from "../components/SVGExports.tsx";

type SponsorProps = {
  name: string;
  description: string;
};

const SponsorCard = ({ name, description }: SponsorProps) => (
  <div className="flex flex-col md:flex-row gap-12 py-16 border-t border-neutral-200">
    {/* Image Placeholder */}
    <div className="w-full md:w-[500px] shrink-0 bg-black rounded-sm aspect-video shadow-sm" />
    
    <div className="flex flex-col justify-start items-center text-center md:items-start md:text-left md:ml-auto md:mr-24">
      <h3 className="text-3xl font-['Manrope'] font-bold text-neutral-900 mb-6">{name}</h3>
      <p className="text-neutral-600 leading-relaxed text-base max-w-sm font-['Manrope']">
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
        { name: "Company Name", description: lorem },
        { name: "Company Name", description: lorem }
      ]
    },
    {
      title: "Thinker",
      sponsors: [
        { name: "Company Name", description: lorem },
        { name: "Company Name", description: lorem },
        { name: "Company Name", description: lorem }
      ]
    }
  ];

  return (
    <>
      <div
          className="relative w-screen min-h-screen flex items-center justify-start
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
              <img src="/blueStar.svg" alt="*" className="w-5 md:w-6 lg:w-8" />
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
        <GrainySVG className="absolute rotate-[15.905deg] right-[-17vw] mt-[40%] max-[900px]:right-[-35vw]" />

        {/* RIGHT IMAGE: The X */}
        <img
            src="/aboutpage-images/x_imprinted_1.svg"
            alt="X Graphic"
            className="absolute right-[-1vw] top-1/2 -translate-y-1/2 h-[90vh] w-auto z-10 pointer-events-none
          max-[900px]:absolute max-[900px]:right-[-15vw] max-[900px]:top-1/2 max-[900px]:-translate-y-1/2
          max-[900px]:h-[60vh] max-[900px]:w-auto max-[900px]:z-0 max-[900px]:opacity-20"
        />
      </div>
      <div className="w-full flex justify-center pb-20 relative">
        {/* BACKGROUND DECORATION: Fingerprint */}
        <img
            src="/aboutpage-images/full_fingerprint_3.png"
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
        />

        <div className="w-[95%] px-6 flex flex-col gap-24 z-10">
          {tiers.map((tier, idx) => (
            <div key={idx} className="w-full">
              <h2 className="text-4xl font-bold md:text-5xl font-['Manrope'] mb-12 text-black">
                {tier.title}
              </h2>
              <div className="flex flex-col">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <SponsorCard 
                    key={sIdx} 
                    name={sponsor.name} 
                    description={sponsor.description} 
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