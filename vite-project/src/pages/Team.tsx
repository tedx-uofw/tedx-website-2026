import { kebabCase } from "lodash"

interface TeamMember {
  name: string;
  role?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

function Team() {

  const teamSections: TeamSection[] = [
    {
      title: "Co-President",
      members: [
        { name: "Diya Patel" },
        { name: "Hirsh Garhwal" },
        { name: "Shubham Garg" },
      ],
    },
    {
      title: "Design",
      members: [
        { name: "Vivian Lu", role: "Director" },
        { name: "Avi Rajesh", role: "Director" },
        { name: "Vinh Nguyen" },
        { name: "Hajeong Hwang" },
        { name: "Bryan Nie" },
        { name: "Ashley Lee" },
      ],
    },
    {
      title: "Web Development",
      members: [
        { name: "Timothy Hoang", role: "Director" },
        { name: "Shashvath Senthilkumar", role: "Director" },
        { name: "Hannah Star Lee" },
        { name: "Tracy Sheng" },
        { name: "Sarah Hanafy" },
        { name: "Taneesha Sharmin" },
        { name: "Arvin Bansal" },
        { name: "Jean Choe" },
      ],
    },
    {
      title: "Speaker Selection",
      members: [
        { name: "Radhika Kamran", role: "Director" },
        { name: "Sidhant Rauniyar", role: "Director" },
        { name: "Annissa Tan", role: "Director" },
        { name: "Arwaad Rahman" },
        { name: "Molly Maves" },
        { name: "Srisha Prasanna" },
        { name: "Cemalcan Uslu" },
        { name: "Srimedha Thummala" },
        { name: "Quang Nguyen" },
        { name: "Safiya Warsame" },
      ],
    },
    {
      title: "Logistics",
      members: [
        { name: "Hailey Yuan", role: "Director" },
        { name: "Mia McDunnah", role: "Director" },
        { name: "Jeffrey Basilio" },
        { name: "Sam Chan" },
        { name: "Patricia Abby A." },
        { name: "Aryan Sharma" },
        { name: "Saya Mehta" },
      ],
    },
    {
      title: "Marketing",
      members: [
        { name: "Vatsala Choudhary", role: "Director" },
        { name: "Meher Chadha", role: "Director" },
        { name: "Raina Talwar" },
        { name: "Sophia Li" },
        { name: "Kiara Lam" },
        { name: "Alessia Adams" },
        { name: "Cheryl Nguyen" },
      ],
    },
    {
      title: "Finance",
      members: [
        { name: "Lillian Tran", role: "Director" },
        { name: "Sora Tolley", role: "Director" },
        { name: "Daniel Wen" },
        { name: "Zach Murphy" },
        { name: "Samaha Morshed" },
        { name: "Andrew Lin" },
      ],
    },
  ];

  return (
    <div className = "" >
      <div
        className="relative w-screen min-h-screen flex items-center justify-start 
  max-[900px]:flex-col max-[900px]:justify-center max-[900px]:p-5 "
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
            // This creates the fade effect:
            // Center (black) = Visible
            // Edges (transparent) = Invisible
            maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 10%, transparent 70%)",
          }}
        />

        <div
          className="relative z-20 w-full pl-[8vw] max-[900px]:px-5 max-[900px]:mb-5
          max-[900px]:flex max-[900px]:flex-col max-[900px]:items-center max-[900px]:text-center"
        >
          <div className="max-w-137.5">
            <div
              className="flex items-center gap-2 mb-6 tracking-[0.05em] text-black 
            font-['Manrope'] text-[32px] font-normal leading-[140%] max-[900px]:justify-center"
            >
              <img src="/imprints-images/blueStar.svg" alt="*" className="w-5 md:w-6 lg:w-8" />
              TEDxUofW
            </div>

            <h1
              className="text-black font-['Andada_Pro'] text-[44px] font-normal leading-[140%] 
            w-[160%] max-[900px]:w-full"
            >
              Meet the team behind the conference
            </h1>
          </div>
        </div>

        {/* Rotation of Gradient */}
        <img src="/imprints-images/saturatedblue.webp" alt="design" className="absolute rotate-[15.905deg] right-[-17vw] mt-[40%] max-[900px]:right-[-30vw] z-10" />

        <img
          src="/imprints-images/x_imprinted_1.svg"
          alt="Imprinted"
          className="absolute right-[-1vw] top-1/2 -translate-y-1/2 h-[90vh] w-auto z-10 pointer-events-none
          max-[900px]:absolute max-[900px]:right-[-15vw] max-[900px]:top-1/2 max-[900px]:-translate-y-1/2 
          max-[900px]:h-[60vh] max-[900px]:w-auto max-[900px]:z-0 max-[900px]:opacity-20"
        />
      </div>

      {/* Team Sections */}
      <div className="relative space-y-12 px-[63px] max-[900px]:px-5 max-w-[1493px] mx-auto py-16 md:py-20">
        {teamSections.map((section, sectionIndex) => (
          <div key={section.title} className="relative">
            {/* Grainy Orb between Design and Web Dev on the left */}
            {sectionIndex === 1 && (
                <img src="/imprints-images/saturatedblue.webp" alt="design" className="absolute rotate-[195.905deg] left-[-17vw] top-[80%] max-[900px]:left-[-35vw] z-0 pointer-events-none" />
            )}

            {/* Grainy Orb in Speaker Selection on the right */}
            {sectionIndex === 3 && (
              <img src="/imprints-images/saturatedblue.webp" alt="design" className="absolute rotate-[15.905deg] right-[-17vw] top-[50%] max-[900px]:right-[-35vw] z-0 pointer-events-none" />

            )}

            {/* Team Labels */}
            <h2 className="text-2xl font-semibold tracking-tight mb-8 pl-[6vw]">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.members.map((member, index) => (
                <div key={index} className="flex flex-col items-center" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
                  <div className="mb-4 h-36 w-36 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full overflow-hidden shrink-0">
                    <img
                      src={`/team-images/${kebabCase(member.name)}.webp`}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover will-change-transform"
                      style={{
                        objectPosition:
                          member.name === "Bryan Nie"
                            ? "center calc(50% + 18px)"
                            : member.name === "Timothy Hoang"
                            ? "center calc(50% - 10px)"
                            : "center",
                        transform: member.name === "Timothy Hoang" ? "scale(1.1)" : undefined,
                      }}
                    />
                  </div>

                  {/* Name Label */}
                  <p className="text-sm font-medium text-center">
                    {member.name}
                  </p>

                  {/* Director Role Label */}
                  {member.role && (
                    <div className="mt-2 px-4 py-2 bg-gray-100 rounded-full shadow-sm">
                      <p className="text-xs text-neutral-600 text-center font-medium">
                        {member.role}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
