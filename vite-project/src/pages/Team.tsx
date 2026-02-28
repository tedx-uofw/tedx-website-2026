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
      title: "Web Dev",
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
    <div className="w-screen min-h-screen">
      {/* Page Top */}
      <div
        className="relative w-screen min-h-screen flex items-center justify-start 
        max-[900px]:flex-col max-[900px]:justify-center max-[900px]:p-5"
      >
        {/* Grainy Texture Effect */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none z-10"
          style={{
            backgroundColor: "rgba(0,0,0,0.002)",
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
      <div className="relative space-y-12 px-4 bg-linear-to-b from-white to-[#F7F9FB]">
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
            <h2 className="text-2xl font-semibold tracking-tight mb-8 pl-2.5">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.members.map((member, index) => (
                <div key={index} className="flex flex-col items-center" style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}>
                    <img
                      src={`/team-images/${kebabCase(member.name)}.webp`}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4 shrink-0 will-change-transform"
                    />

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
