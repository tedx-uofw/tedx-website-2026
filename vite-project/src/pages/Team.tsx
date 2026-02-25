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
      members: [{ name: "Name" }, { name: "Name" }, { name: "Name" }],
    },
    {
      title: "Design",
      members: [
        { name: "Name", role: "Director" },
        { name: "Name", role: "Director" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
      ],
    },
    {
      title: "Web Dev",
      members: [
        { name: "Name", role: "Director" },
        { name: "Name", role: "Director" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
      ],
    },
    {
      title: "Speaker Selection",
      members: [
        { name: "Name", role: "Director" },
        { name: "Name", role: "Director" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
      ],
    },
    {
      title: "Logistics",
      members: [
        { name: "Name", role: "Director" },
        { name: "Name", role: "Director" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
      ],
    },
    {
      title: "Marketing",
      members: [
        { name: "Name", role: "Director" },
        { name: "Name", role: "Director" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
      ],
    },
    {
      title: "Finance",
      members: [
        { name: "Name", role: "Director" },
        { name: "Name", role: "Director" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
        { name: "Name" },
      ],
    },
  ];

  return (
    <section className="relative w-screen font-[Manrope] -mx-4 sm:-mx-4 md:-mx-6 lg:-mx-6">
      {/* Page Top */}
      <div className="mb-12">
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:h-screen px-4">
          <div className="h-auto md:h-screen flex-1 flex flex-col justify-center relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <img src="/blueStar.svg" alt="*" className="w-5 md:w-6 lg:w-8" />
              <h1 className="text-3xl leading-12 text-black font-normal">
                Our Team
              </h1>
            </div>

            <p className="text-xl leading-snug sm:text-2xl sm:leading-normal md:text-3xl md:leading-normal lg:text-4xl lg:leading-12 text-black font-[Andada Pro] font-normal text-left">
              We bring bold ideas and lived experiences together to spark
              curiosity and inspire meaningful change on campus and beyond.
            </p>
          </div>

          <div className="hidden md:flex relative w-full md:w-1/3 items-center justify-end z-10">
            <img
              src="/Imprinted.svg"
              alt="Imprinted"
              className="w-full h-auto object-cover relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Team Sections */}
      <div className="space-y-12 px-4">
        {teamSections.map((section) => (
          <div key={section.title}>
            {/* Team Labels */}
            <h2 className="text-2xl font-semibold tracking-tight mb-8">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* REPLACE WITH PICTURES */}
                  <div className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gray-300 mb-4 shrink-0" />

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
    </section>
  );
}

export default Team;
