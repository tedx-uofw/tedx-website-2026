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
    <>
      {/* Team Sections */}
      <div className="relative space-y-12 px-[63px] max-[900px]:px-5 mx-auto py-16 md:py-20">
        {teamSections.map((section) => (
            <div key={section.title} className="relative">

              {/* Team Labels */}
              <h2 className="text-2xl font-semibold tracking-tight mb-8 pl-[6vw]">
                {section.title}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {section.members.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="mb-4 h-36 w-36 md:h-40 md:w-40 lg:h-48 lg:w-48">
                        <img
                            src={`/team-images/${kebabCase(member.name)}.webp`}
                            alt={member.name}
                            loading="eager"
                            className="h-full w-full object-cover"
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
    </>
  );
}

export default Team;
