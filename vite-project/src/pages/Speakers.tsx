function Speakers() {
  const speakers = [
    {
      name: "Cara Hale Alter",
      role: "Speaker Role",
      image: "/speakers-images/cara-hale-alter.jpg",
      desc:
        "Cara Hale Alter is the founder of SpeechSkills, a company that offers leadership training around the concept of visible credibility or “the ability to project competence and confidence so that your value is on full display”. Cara’s talk is about how many people suffer from invisible credibility and how learning to demonstrate visible credibility can help people have so much more power in the world.\n\n",
      link: "https://linkedin.com/in/cara-hale-alter",
      linkIcon: "/speakers-images/linkedin-logo.png",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
    {
      name: "Melissa Hutchins",
      role: "Speaker Role",
      image: "/speakers-images/melissa-hutchins.jpg",
      desc:
        "Melissa is the founder and CEO of Certifi AI, a big tech company working to protect individuals from AI harms. Melissa’s talk is about the negative societal impact of deepfake AI technology and why it is important that we view AI through a critical lens. She speaks about the intersection between digital identities and each of our abilities to control our own lives.\n\n",
      link: "https://linkedin.com/in/melissa-hutchins",
      linkIcon: "/speakers-images/linkedin-logo.png",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
    {
      name: "Michael B Ling",
      role: "Speaker Role",
      image: "/speakers-images/michael-b-ling.jpg",
      desc:
        "Michael is a public speaker, podcast host, and author. Michael’s talk is about the journey of forgiveness. He speaks about how to both apply and receive forgiveness, as well as the ability to live free through forgiveness and how that can empower people.\n\n",
      link: "https://linkedin.com/in/michael-b-ling",
      linkIcon: "/speakers-images/linkedin-logo.png",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
    {
      name: "Vita Kari",
      role: "Speaker Role",
      image: "/speakers-images/vita-kari.jpg",
      desc: "Virality as a legitimate collaborative art medium.\n\n",
      link: "https://linkedin.com/in/vita-kari",
      linkIcon: "/speakers-images/linkedin-logo.png",
      linkAlt: "LinkedIn",
      imgClass: "",
    },
    {
      name: "Ann Frost",
      role: "Speaker Role",
      image: "/speakers-images/ann-frost.jpg",
      desc:
        "Ann is an Associate Teaching Professor in the Law, Societies, and Justice and Sociology Departments at the University of Washington. Her work primarily revolves around the criminal justice system and she leads a book club inside the prison in Monroe. Ann’s talk is about this book club program that allows for UW students and incarcerated students to interact with each other on a collegial classroom level. She speaks about how different experiences people engage in can impact the lives of themselves and others.\n\n",
      link: "https://lsj.washington.edu/people/ann-frost",
      linkIcon: "/speakers-images/link-icon.png",
      linkAlt: "Website",
      imgClass: "object-top object-left",
      linkSize: "w-7 h-7",
    },
    {
      name: "Nandita Gupta",
      role: "Speaker Role",
      image: "/speakers-images/nandita-gupta.jpg",
      desc:
        "Nandita is a TEDx speaker & has been featured by Business Insider, NASDAQ, Forbes, Times of India, BlogHer, and Ability Summit Panelist, and quoted in Fortune, SDTimes, Livewire, Best Colleges, Zdnet, Yahoo, and many more. She has been a Board member at various non-profits and actively works in the community to create an inclusive space in communities.\n\n",
      link: "https://linkedin.com/in/nandita-gupta",
      linkIcon: "/speakers-images/linkedin-logo.png",
      linkAlt: "LinkedIn",
      imgClass: "object-top",
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* ===== Background blobs / art (kept visually the same, but responsive container) ===== */}
      <div className="pointer-events-none absolute left-[-312.8px] top-[2665.77px] h-[1234.17px] w-[1234.17px] origin-top-left rotate-[0.88deg] rounded-full bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(177.30,_214.40,_231.60,_0.80)_0%,_rgba(255,_255,_255,_0.80)_100%)]" />
      <div className="pointer-events-none absolute left-[1120.45px] top-[531px] h-[468.74px] w-[460.02px] origin-top-left rotate-[15.9deg] rounded-full bg-blue-400/90 blur-[400px]" />
      <div className="pointer-events-none absolute left-[128px] top-[2916px] h-[468.74px] w-[460.02px] origin-top-left rotate-[15.9deg] rounded-full bg-blue-400/90 blur-[400px]" />
      <div className="pointer-events-none absolute left-[938.58px] top-[2442.45px] h-[758.48px] w-[1187.17px] origin-top-left rotate-[164.1deg] rounded-full bg-neutral-600/5 blur-[321.69px]" />

      <img
        className="pointer-events-none absolute left-[800px] top-[200px] h-[1500px] w-[2000px] opacity-30 [background-blend-mode:luminosity]"
        src="/speakers-images/saturatedblue.svg"
        alt=""
      />

      {/* fingerprint left */}
      <img
        src="/speakers-images/fingerprint.png"
        alt=""
        className="pointer-events-none absolute left-[-25vw] top-[80%] z-0 h-auto w-[90%] -translate-y-1/2 -rotate-19 opacity-5 mix-blend-multiply grayscale drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
        style={{
          maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
        }}
      />

      {/* fingerprint right */}
      <img
        src="/speakers-images/fingerprint.png"
        alt=""
        className="pointer-events-none absolute right-[-24vw] top-[40%] z-0 h-auto w-[90%] -translate-y-1/2 -rotate-19 opacity-[0.02] mix-blend-multiply grayscale drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
        style={{
          maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
          WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
        }}
      />

      {/* X imprinted image (kept) */}
      <img
        className="pointer-events-none absolute left-[50px] top-[159px] h-[791px] w-[730px]"
        src="/speakers-images/x imprinted 1.svg"
        alt=""
      />

      {/* ===== Content wrapper ===== */}
      {/* Keeps your 1512-wide “Figma feel” on desktop, but becomes fluid on smaller screens */}
      <div className="relative mx-auto w-full max-w-[1512px] px-6 sm:px-10">
        {/* Header block (same content/placement feel; responsive) */}
        <div
          className="
            absolute left-[690px] top-[641px]
            hidden lg:flex
            w-[767px] flex-col items-end gap-5
          "
        >
          <div className="inline-flex items-center justify-end gap-2">
            <img src="/speakers-images/blue-icon.svg" alt="blue icon" className="h-9 w-9" />
            <div className="font-['Manrope'] text-3xl font-normal leading-10 text-black">
              TEDxUofW
            </div>
          </div>
          <div className="font-['Andada_Pro'] text-5xl font-normal leading-[67.20px] text-black">
            Meet our 6 speakers
          </div>
        </div>

        {/* Mobile/Tablet header (same text, just flows normally) */}
        <div className="pt-24 lg:hidden">
          <div className="flex items-center gap-2">
            <img src="/speakers-images/blue-icon.svg" alt="blue icon" className="h-9 w-9" />
            <div className="font-['Manrope'] text-2xl font-normal leading-8 text-black sm:text-3xl sm:leading-10">
              TEDxUofW
            </div>
          </div>
          <div className="mt-4 font-['Andada_Pro'] text-4xl font-normal leading-tight text-black sm:text-5xl sm:leading-[67.20px]">
            Meet our 6 speakers
          </div>
        </div>

        {/* Speakers list area */}
        {/* On desktop, this matches your original left:56 top:1086 feel; on smaller screens it flows */}
        <div className="pb-24 pt-[1086px] lg:pt-[1086px]">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="flex flex-col gap-24">
              {speakers.map((s, idx) => (
                <div key={s.name} className="w-full">
                  {/* Row */}
                  {/* EXACT intent preserved:
                      - left = image
                      - middle = name/role/link stacked
                      - right = description column (NOT under image on desktop)
                  */}
                  <div
                    className="
                      flex flex-col gap-8
                      lg:flex-row lg:items-start lg:gap-0
                    "
                  >
                    {/* Left group: Image + Info column */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-[75px]">
                      <img
                        className={`h-72 w-72 rounded-md object-cover ${s.imgClass || ""}`}
                        src={s.image}
                        alt={s.name}
                      />

                      <div className="flex w-full max-w-[320px] flex-col items-start gap-6">
                        <div className="whitespace-nowrap font-['Manrope'] text-4xl font-semibold leading-[1.15] text-black lg:text-5xl lg:leading-[67.20px]">
                          {s.name}
                        </div>
                        <div className="w-full font-['Manrope'] text-2xl font-light leading-9 text-black lg:text-3xl lg:leading-10">
                          {s.role}
                        </div>

                        <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex">
                          <img
                            className={`${s.linkSize ?? "w-12 h-12"} rounded-md`}
                            src={s.linkIcon}
                            alt={s.linkAlt}
                          />
                        </a>
                      </div>
                    </div>

                    {/* Right description column */}
                    {/* On desktop: fixed width and sits FAR RIGHT like Figma.
                        On mobile: becomes its own block below (responsive necessity).
                    */}
                    <div className="lg:ml-auto lg:pt-[7px]">
                      <div className="w-full text-left font-['Manrope'] text-lg font-normal leading-7 text-gray-600 sm:text-xl lg:w-[569.99px]">
                        {s.desc}
                      </div>
                    </div>
                  </div>

                  {/* Divider (same as your outline line) */}
                  {idx !== speakers.length - 1 && (
                    <div className="mt-24 h-0 w-full max-w-[1436px] outline outline-1 outline-offset-[-0.5px] outline-black" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keep overall “page height” feel without hard-locking it */}
      <div className="h-[1px]" />
    </div>
  );
}

export default Speakers;