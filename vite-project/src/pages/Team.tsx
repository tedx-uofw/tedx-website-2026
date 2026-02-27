import { useState, useCallback, useMemo } from "react";
import { GrainySVG, GrainySVGGray } from "../components/SVGExports";

interface TeamMember {
  name: string;
  role?: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

function Team() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Map of team member names to their actual image filenames
  const imageMap: Record<string, string> = useMemo(
    () => ({
      "alessia-adams": "alessia-adams.jpg",
      "andrew-lin": "andrew-lin.jpeg",
      "annissa-tan": "annissa-tan.JPG",
      "arvin-bansal": "arvin-bansal.jpeg",
      "arwaad-rahman": "arwaad-rahman.jpg",
      "ashley-lee": "ashley-lee.jpeg",
      "avi-rajesh": "avi-rajesh.JPG",
      "bryan-nie": "bryan-nie.jpg",
      "cemalcan-uslu": "cemalcan-uslu.jpeg",
      "cheryl-nguyen": "cheryl-nguyen.jpeg",
      "daniel-wen": "daniel-wen.jpg",
      "diya-patel": "diya-patel.jpeg",
      "hailey-yuan": "hailey-yuan.JPG",
      "hajeong-hwang": "hajeong-hwang.jpg",
      "hannah-star-lee": "hannah-star-lee.JPG",
      "hirsh-garhwal": "hirsh-garhwal.jpg",
      "jean-choe": "jean-choe.jpeg",
      "jeffrey-basilio": "jeffrey-basilio.jpg",
      "kiara-lam": "kiara-lam.jpg",
      "lillian-tran": "lillian-tran.jpeg",
      "meher-chadha": "meher-chadha.jpeg",
      "mia-mcdunnah": "mia-mcdunnah.jpg",
      "molly-maves": "molly-maves.JPG",
      "patricia-abby-a.": "patricia-abby-a..jpg",
      "quang-nguyen": "quang-nguyen.jpeg",
      "radhika-kamran": "radhika-kamran.JPG",
      "raina-talwar": "raina-talwar.jpeg",
      "safiya-warsame": "safiya-warsame.jpeg",
      "sam-chan": "sam-chan.png",
      "samaha-morshed": "samaha-morshed.jpeg",
      "sarah-hanafy": "sarah-hanafy.jpeg",
      "saya-mehta": "saya-mehta.jpeg",
      "shashvath-senthilkumar": "shashvath-senthilkumar.JPEG",
      "shubham-garg": "shubham-garg.jpg",
      "sidhant-rauniyar": "sidhant-rauniyar.jpeg",
      "sophia-li": "sophia-li.jpg",
      "sora-tolley": "sora-tolley.JPG",
      "srimedha-thummala": "srimedha-thummala.jpeg",
      "srisha-prasanna": "srisha-prasanna.jpeg",
      "taneesha-sharmin": "taneesha-sharmin.jpeg",
      "timothy-hoang": "timothy-hoang.jpg",
      "tracy-sheng": "tracy-sheng.jpeg",
      "vatsala-choudhary": "vatsala-choudhary.jpg",
      "vinh-nguyen": "vinh-nguyen.jpeg",
      "vivian-lu": "vivian-lu.JPG",
      "zach-murphy": "zach-murphy.jpeg",
    }),
    [],
  );

  const handleImageError = useCallback((name: string) => {
    setFailedImages((prev) => new Set(prev).add(name));
  }, []);

  const getTeamImagePath = useCallback(
    (name: string): string => {
      const key = name.toLowerCase().replace(/\s+/g, "-");
      return `/team-images/${imageMap[key] || `${key}.jpg`}`;
    },
    [imageMap],
  );

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
    <div className="w-screen min-h-screen bg-linear-to-b from-white to-[#F7F9FB]">
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
              <img src="/blueStar.svg" alt="*" className="w-5 md:w-6 lg:w-8" />
              TEDxUofW
            </div>

            <h1
              className="text-black font-['Andada_Pro'] text-[44px] font-normal leading-[140%] 
            w-[160%] max-[900px]:w-full"
            >
              We bring bold ideas and lived experiences together to spark
              curiosity and inspire meaningful change on campus and beyond.
            </h1>
          </div>
        </div>

        {/* Rotation of Gradient */}
        <GrainySVG className="absolute rotate-[15.905deg] right-[-17vw] mt-[40%] max-[900px]:right-[-35vw]" />

        <img
          src="/Imprinted.svg"
          alt="Imprinted"
          className="absolute right-[-1vw] top-1/2 -translate-y-1/2 h-[90vh] w-auto z-10 pointer-events-none
          max-[900px]:absolute max-[900px]:right-[-15vw] max-[900px]:top-1/2 max-[900px]:-translate-y-1/2 
          max-[900px]:h-[60vh] max-[900px]:w-auto max-[900px]:z-0 max-[900px]:opacity-20"
        />
      </div>

      {/* Team Sections */}
      <div className="relative space-y-12 px-4">
        {teamSections.map((section, sectionIndex) => (
          <div key={section.title} className="relative">
            {/* Grainy Orb between Design and Web Dev on the left */}
            {sectionIndex === 1 && (
              <GrainySVGGray className="absolute rotate-[195.905deg] left-[-17vw] top-[80%] max-[900px]:left-[-35vw] z-0 pointer-events-none" />
            )}

            {/* Grainy Orb in Speaker Selection on the right */}
            {sectionIndex === 3 && (
              <GrainySVG className="absolute rotate-[15.905deg] right-[-17vw] top-[50%] max-[900px]:right-[-35vw] z-0 pointer-events-none" />
            )}

            {/* Team Labels */}
            <h2 className="text-2xl font-semibold tracking-tight mb-8 pl-2.5">
              {section.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {section.members.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Team Member Picture - shows image or gray circle fallback */}
                  {failedImages.has(member.name) ? (
                    <div className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gray-300 mb-4 shrink-0" />
                  ) : (
                    <img
                      src={getTeamImagePath(member.name)}
                      alt={member.name}
                      onError={() => handleImageError(member.name)}
                      loading="lazy"
                      className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover mb-4 shrink-0"
                    />
                  )}

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
