import React from "react";
// Assets - ensure these paths match your folder structure
import xBackground from "../assets/ximprinted.svg";
import blueUnderX from "../assets/saturatedblue.svg";
import blueStar from "../assets/blueicon.svg";

type SponsorProps = {
  name: string;
  description: string;
};

const SponsorCard = ({ name, description }: SponsorProps) => (
  <div className="flex flex-col md:flex-row gap-12 py-16 border-t border-neutral-200">
    {/* Image Placeholder */}
    <div className="w-full md:w-[500px] shrink-0 bg-black rounded-sm aspect-video shadow-sm" />

    <div className="flex flex-col justify-start">
      <h3 className="text-4xl font-medium text-neutral-900 mb-6 font-['Manrope']">
        {name}
      </h3>
      <p className="text-neutral-600 leading-relaxed text-base max-w-xl font-['Manrope']">
        {description}
      </p>
    </div>
  </div>
);

const Sponsors = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.";

  const tiers = [
    {
      title: "Innovator",
      sponsors: [
        { name: "Company Name", description: lorem },
        { name: "Company Name", description: lorem },
      ],
    },
    {
      title: "Thinker",
      sponsors: [
        { name: "Company Name", description: lorem },
        { name: "Company Name", description: lorem },
        { name: "Company Name", description: lorem },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-red-100 overflow-x-hidden relative">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none select-none z-0">
        {/* The Saturated Blue under the X */}
        <img
          src={blueUnderX}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] opacity-80 blur-3xl mix-blend-screen"
        />
        {/* The Main X Imprinted */}
        <img
          src={xBackground}
          alt=""
          className="absolute top-[-50px] right-[0px] w-[600px] md:w-[700px] lg:w-[400px] object-contain opacity-100"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-24">
        {/* Hero Section */}
        <header className="pt-40 pb-32">
          <div className="flex items-center gap-3 mb-8">
            <img src={blueStar} alt="" className="w-5 h-5" />
            <span className="text-sm font-medium text-neutral-800 font-['Manrope']">
              Our Sponsors
            </span>
          </div>

          {/* Serif font for the 'Thank you' per your design screenshot */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Andada_Pro'] text-neutral-900 tracking-tight leading-tight max-w-3xl">
            Thank you for supporting{" "}
            <span className="font-sans font-bold">TEDx</span>UofW
          </h1>
        </header>

        {/* --- VERTICAL SPACING --- */}
        {/* This creates the "inch of breathing room" between header and Innovator */}
        <div className="h-24 md:h-40" />

        {/* Tiers Sections */}
        {tiers.map((tier) => (
          <section key={tier.title} className="pb-20">
            <h2 className="text-6xl md:text-7xl font-bold text-neutral-900 mb-20 tracking-tighter font-['Manrope']">
              {tier.title}
            </h2>
            <div className="flex flex-col">
              {tier.sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={`${tier.title}-${index}`}
                  name={sponsor.name}
                  description={sponsor.description}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
