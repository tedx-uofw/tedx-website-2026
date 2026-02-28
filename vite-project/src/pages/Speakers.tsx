function Speakers() {
  const speakers = [
    {
      name: "Cara Hale Alter",
      role: "Founder",
      image: "/speakers/cara-hale-alter.webp",
      desc:
        "Cara Hale Alter is the founder of SpeechSkills, a company that offers leadership training around the concept of visible credibility or “the ability to project competence and confidence so that your value is on full display”. Cara’s talk is about how many people suffer from invisible credibility and how learning to demonstrate visible credibility can help people have so much more power in the world.\n\n",
      link: "https://www.linkedin.com/in/carahalealter/",
      linkIcon: "/speakers/linkedin-logo.webp",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
    {
      name: "Melissa Hutchins",
      role: "Founder & CEO",
      image: "/speakers/melissa-hutchins.webp",
      desc:
        "Melissa is the founder and CEO of Certifi AI, a big tech company working to protect individuals from AI harms. Melissa’s talk is about the negative societal impact of deepfake AI technology and why it is important that we view AI through a critical lens. She speaks about the intersection between digital identities and each of our abilities to control our own lives.\n\n",
      link: "https://linkedin.com/in/melissa-hutchins",
      linkIcon: "/speakers/linkedin-logo.webp",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
    {
      name: "Michael B Ling",
      role: "Digital Speaker",
      image: "/speakers/michael-b-ling.webp",
      desc:
        "Michael is a public speaker, podcast host, and author. Michael’s talk is about the journey of forgiveness. He speaks about how to both apply and receive forgiveness, as well as the ability to live free through forgiveness and how that can empower people.\n\n",
      link: "https://www.linkedin.com/in/michael-ling-1079a3391/",
      linkIcon: "/speakers/linkedin-logo.webp",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
    {
      name: "Vita Kari",
      role: "Artist",
      image: "/speakers/vita-kari.webp",
      desc: "Virality as a legitimate collaborative art medium.\n\n",
      link: "https://www.linkedin.com/in/vitakari/",
      linkIcon: "/speakers/linkedin-logo.webp",
      linkAlt: "LinkedIn",
      imgClass: "",
    },
    {
      name: "Ann Frost",
      role: "Associate Teaching Professor",
      image: "/speakers/ann-frost.webp",
      desc:
        "Ann is an Associate Teaching Professor in the Law, Societies, and Justice and Sociology Departments at the University of Washington. Her work primarily revolves around the criminal justice system and she leads a book club inside the prison in Monroe. Ann’s talk is about this book club program that allows for UW students and incarcerated students to interact with each other on a collegial classroom level. She speaks about how different experiences people engage in can impact the lives of themselves and others.\n\n",
      link: "https://lsj.washington.edu/people/ann-frost",
      linkIcon: "/speakers/link-icon.webp",
      linkAlt: "Website",
      imgClass: "object-top object-left",
      linkSize: "w-7 h-7",
    },
    {
      name: "Nandita Gupta",
      role: "TEDx Speaker",
      image: "/speakers/nandita-gupta.webp",
      desc:
        "Nandita is a TEDx speaker & has been featured by Business Insider, NASDAQ, Forbes, Times of India, BlogHer, and Ability Summit Panelist, and quoted in Fortune, SDTimes, Livewire, Best Colleges, Zdnet, Yahoo, and many more. She has been a Board member at various non-profits and actively works in the community to create an inclusive space in communities.\n\n",
      link: "https://www.linkedin.com/in/nandita-gupta/",
      linkIcon: "/speakers/linkedin-logo.webp",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
  ];

  return (
    <div className="relative">
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
              // This creates the fade effect:
              // Center (black) = Visible
              // Edges (transparent) = Invisible
              maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
              WebkitMaskImage:
                  "radial-gradient(circle, black 10%, transparent 70%)",
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
              TEDxUofW
            </div>

            {/* Hero Text */}
            <h1
                className="text-black font-['Andada_Pro'] text-[44px] font-normal leading-[140%]
            w-[160%] max-[900px]:w-full"
            >
              Meet our 6 speakers
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
        />
      </div>

      {/* fingerprint left */}
      <img
        src="/imprints-images/full_fingerprint_3.webp"
        alt=""
        className="pointer-events-none absolute left-[-25vw] top-[80%] z-0 h-auto w-[90%] -translate-y-1/2 -rotate-19 opacity-5 mix-blend-multiply grayscale drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] z-10"
        style={{
          maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
        }}
      />

      {/* fingerprint right */}
      <img
        src="/imprints-images/full_fingerprint_3.webp"
        alt=""
        className="pointer-events-none absolute right-[-24vw] top-[40%] z-0 h-auto w-[70%] -translate-y-1/2 -rotate-19 opacity-[0.02] mix-blend-multiply grayscale drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] z-10"
        style={{
          maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
        }}
      />


      <div className="relative mx-auto w-full px-6 sm:px-10 bg-linear-to-b from-white to-[#F7F9FB]">

        {/* Desktop header */}
        <div className="pt-20">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="flex flex-col gap-24">
              {speakers.map((s, idx) => (
                <div key={s.name} className="w-full">
                  <div
                    className="
                      flex flex-col gap-8
                      lg:flex-row lg:items-start lg:gap-0
                      items-center
                    "
                  >
                    {/* Left group: Image + Info column */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-[75px] items-center lg:items-start">
                      <img
                        className={`h-72 w-72 rounded-md object-cover ${
                          s.imgClass || ""
                        }`}
                        src={s.image}
                        alt={s.name}
                      />
                      <div className="flex w-full max-w-[320px] flex-col items-center lg:items-start gap-6 text-center lg:text-left">
                        <div className="whitespace-nowrap font-['Manrope'] text-4xl font-semibold leading-[1.15] text-black lg:text-5xl lg:leading-[67.20px]">
                          {s.name}
                        </div>
                        <div className="w-full font-['Manrope'] text-2xl font-light leading-9 text-black lg:text-3xl lg:leading-10">
                          {s.role}
                        </div>
                        <a
                          href={s.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex"
                        >
                          <img
                            className={`${s.linkSize ?? "w-12 h-12"} rounded-md`}
                            src={s.linkIcon}
                            alt={s.linkAlt}
                          />
                        </a>
                      </div>
                    </div>

                    {/* Right description column */}
                    <div className="lg:ml-auto lg:pt-[7px] w-full lg:w-auto flex justify-center lg:block">
                      <div className="w-full text-center lg:text-left font-['Manrope'] text-lg font-normal leading-7 text-gray-600 sm:text-xl lg:w-[569.99px]">
                        {s.desc}
                      </div>
                    </div>
                  </div>

                  {/* Divider (same as outline line) */}
                  {idx !== speakers.length - 1 && (
                    <div className="mt-24 h-0 w-full max-w-[1436px] outline outline-1 outline-offset-[-0.5px] outline-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;