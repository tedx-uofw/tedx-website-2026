const SponsorCard = ({ name, description }) => (
  <div className="flex flex-col md:flex-row gap-8 py-12 border-t border-neutral-200">
    {/* Placeholder for Sponsor Image */}
    <div className="w-full md:w-1/2 bg-black rounded-lg aspect-video shadow-lg"></div>
    
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h3 className="text-3xl font-medium text-neutral-900 mb-4">{name}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  </div>
);

function Sponsors() {
  const sponsorsData = [
    {
      name: "Company Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
    },
    {
      name: "Company Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans selection:bg-red-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-6 lg:px-24">
        {/* Abstract Background 'X' Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none select-none">
           <span className="text-[40rem] font-bold leading-none absolute -top-20 right-[-5rem] text-neutral-400">X</span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-400 text-xl">✦</span>
            <span className="uppercase tracking-widest text-sm font-medium text-neutral-600">Our Sponsors</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-neutral-800 tracking-tight">
            Thank you for supporting <span className="font-semibold">TEDxUofW</span>
          </h1>
        </div>
      </section>

      {/* Innovator Category */}
      <section className="max-w-7xl mx-auto px-6 lg:px-24 pb-20">
        <h2 className="text-5xl font-bold text-neutral-900 mb-12">Innovator</h2>
        
        <div className="space-y-4">
          {sponsorsData.map((sponsor, index) => (
            <SponsorCard key={index} {...sponsor} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Sponsors;