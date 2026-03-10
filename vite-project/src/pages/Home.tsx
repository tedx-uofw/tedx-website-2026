import React, { useEffect, useState } from "react";
import "./Home.css";
import heroImage from "/imprints-images/imprinted_1.png";
import fingerprintImage from "/imprints-images/full_fingerprint_3.webp";
import x2 from "/imprints-images/x_2.webp";
import location from "/landing/location.svg";
import caraHeadshot from "/speakers/cara-hale-alter.webp";
import melissaHeadshot from "/speakers/melissa-hutchins.webp";
import michaelHeadshot from "/speakers/michael-b-ling.webp";
import vitaHeadshot from "/speakers/vita-kari.webp";
import annHeadshot from "/speakers/ann-frost.webp";
import nanditaHeadshot from "/speakers/nandita-gupta.webp";
import fingerprintSmall from "/landing/Frame 1 (5).png";
import fingerprintSmall2 from "/landing/Frame 2 (3).png";
import SponsorTiers from "../components/SponsorsTiers";

const venue = "/imprints-images/kane.JPG";

// --- 1. NEW COMPONENT: Image Loader with Skeleton State ---
const ScheduleImage = ({
  src,
  alt,
  className,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Skeleton Pulse (Shows until image loads) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <div className="w-1/3 h-1/4 bg-slate-300 rounded opacity-50" />
        </div>
      )}
      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-700 ease-in-out ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={style}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

// --- MAIN HOME COMPONENT ---
function Home() {
  // 1. Track if the GIF is playing, or if it's time to show the real logo
  const [logoStage, setLogoStage] = useState<"playing" | "fading">("playing");
  const [gifUrl] = useState(
    () => `/landing/imprints_animation.gif?v=${Date.now()}`,
  );

  useEffect(() => {
    // Wait for the GIF to finish its ink bleed, then trigger the crossfade
    const timer = setTimeout(() => {
      setLogoStage("fading");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div className="w-full relative bg-linear-to-b from-white to-[#F7F9FB] overflow-hidden">
        {/* ── Background decorations ── */}
        <div className="w-[1046.04px] h-[1046.04px] left-[-219.13px] top-[-49.32px] absolute origin-top-left rotate-[9.20deg] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#E5EEF9_0%,_white_100%)] rounded-full pointer-events-none max-md:scale-75 max-md:-left-[260px] max-md:top-[-140px]" />

        <img
          src={fingerprintImage}
          alt=""
          className="absolute left-[-5vw] top-[80px] w-[800px] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] max-md:w-[520px] max-md:left-[-25vw] max-md:top-[40px] max-md:opacity-[0.04]"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 10%, transparent 70%)",
          }}
        />
        <img
          src="/imprints-images/saturatedblue.webp"
          alt="design"
          className="absolute rotate-[15.905deg] right-[-17vw] mt-[0%] max-[900px]:right-[-30vw] pointer-events-none max-md:top-[6%] max-md:mt-0 max-md:w-[60%] max-md:opacity-80"
        />

        {/* ── EVENT INFO BAR ── */}
        <div className="relative z-10 w-full px-[63px] py-6 border-b border-black/10 max-md:px-5 max-md:py-4 pt-32 max-md:pt-24">
          <div className="flex flex-col md:flex-row md:justify-between gap-3 md:gap-0 text-black text-base md:text-xl font-['Manrope']">
            <div className="flex items-baseline gap-2">
              <span className="font-medium">04.19.2026</span>
              <span className="text-gray-400 text-sm md:text-base">Sunday</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-medium">10:30 AM</span>
            </div>
            <div className="flex items-baseline gap-2">
              <a href="/#venue" className="font-medium">
                Kane Hall<span>&#x2197;&#xFE0E;</span>
              </a>
            </div>
            <div className="font-medium">Seattle, WA</div>
          </div>
        </div>

        {/* ── HERO SECTION ── */}
        <div className="relative z-10 px-[63px] pt-10 pb-16 max-md:px-5 max-md:pt-10 max-md:pb-10">
          <div className="relative w-full max-w-[925px]">
            <img
              className="w-full max-w-[824px] h-auto absolute top-[-20px] left-[-28px] z-0 opacity-0 pointer-events-none max-md:hidden"
              src={fingerprintImage}
              alt=""
            />
            {/* The Wrapper uses your exact layout classes from before */}
            <div className="w-full max-w-[824px] absolute top-[-20px] left-[-28px] z-10 max-md:static max-md:mb-6 flex items-center justify-start md:justify-center pointer-events-none">
              {/* LAYER 1: The Oversized GIF */}
              {/* We use scale-[2.5] to counteract the built-in whitespace of the GIF. */}
              <img
                src={gifUrl}
                alt="Loading effect"
                className={`absolute contrast-125 brightness-110 mix-blend-multiply scale-[1] transition-opacity duration-700 ${
                  logoStage === "playing"
                    ? "opacity-100 blur-none"
                    : "opacity-0 blur-[1px]"
                }`}
              />

              {/* LAYER 2: The Real SVG Logo */}
              {/* Because this is 'relative', it dictates the actual size of the wrapper div in the DOM */}
              <img
                src={heroImage}
                alt="Hero image"
                className={`relative w-full h-auto mix-blend-multiply transition-opacity duration-[1000ms] ease-in-out ${
                  logoStage === "fading"
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0"
                }`}
              />
            </div>
            <div className="pt-49 max-md:pt-0">
              <div className="text-black text-2xl font-normal font-['Manrope'] leading-8 z-10 relative mb-10 max-md:text-base max-md:leading-7 max-md:mb-6">
                The memories we carry have a deep meaning, cutting deep into us.
                Sometimes, they leave impressions that last forever. Other
                times, they force us to question the impression we will one day
                leave, forcing questions about ourselves. This requires an
                exploration of our experiences with people, memories, and life.
              </div>
              <div className="inline-flex justify-start items-center gap-10 max-md:gap-6 max-md:justify-center max-md:w-full">
                <a
                  href="https://forms.gle/rCTJViGfuVHJiU3D8"
                  target="_blank"
                  className="w-48 h-20 bg-black rounded border border-black/10 ease-out hover:bg-red-700 shadow-[0_6px_16px_rgba(0,0,0,0.14)] text-white text-2xl font-medium font-['Manrope'] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-100 max-md:w-40 max-md:h-16 max-md:text-xl flex items-center justify-center"
                >
                  Get Tickets
                </a>
                <a
                  href="/#conference-schedule"
                  className="w-48 h-20 bg-gray-200/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] text-black text-2xl font-medium font-['Manrope'] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100 max-md:w-40 max-md:h-16 max-md:text-xl flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="w-full px-[63px] mx-auto flex flex-col items-center gap-28 mt-16 relative z-10 max-md:px-5 max-md:gap-16 max-md:mt-10">
          {/* About TEDx */}
          <div className="w-full flex flex-col justify-start items-start">
            <div className="self-stretch relative flex items-center justify-between gap-8 py-10 max-md:flex-col max-md:items-start max-md:gap-6 max-md:py-6">
              <div className="w-full max-w-[664px] flex flex-col justify-start items-start gap-7 max-md:gap-5">
                <div className="text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight">
                  About TEDx
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                  <div className="w-full max-w-[660px] text-gray-600 text-base md:text-xl font-normal font-['Inter'] leading-7 md:leading-8">
                    TEDxUofW was established to bring inspirational yet
                    informative TED style talks to the University of Washington
                    based in Seattle. Since 2012, our student organization has
                    sought to give amazing speakers a receptive audience to
                    share their passions with.
                  </div>
                </div>
              </div>
              <img
                className="w-56 h-56 md:w-96 md:h-96 flex-shrink-0 max-md:self-center"
                src={x2}
                alt="TEDx illustration"
              />
            </div>
          </div>

          {/* Conference Schedule */}
          <div className="w-full flex flex-col justify-start items-start gap-8">
            <div
              id="conference-schedule"
              className="self-stretch text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight"
            >
              Conference Schedule
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-12 md:gap-16">
              {/* Event 1 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    10:30 - 10:45 AM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Conference Opening
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 2: Nandita */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a
                  className="w-full max-w-[390px] h-70 md:w-72 md:h-60 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  href="https://www.linkedin.com/in/nandita-gupta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ScheduleImage
                    className="w-full h-full object-cover schedule-headshot-nandita"
                    src={nanditaHeadshot}
                    alt="Nandita Gupta headshot"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    10:50 - 11:05 AM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Through the Accessibility Lens: How We Leave Our Mark on the
                    World
                  </div>
                  <div className="w-full max-w-[360px] md:w-72 text-gray-600 text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Nandita Gupta
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 3: Ann */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a
                  className="w-full max-w-[390px] h-70 md:w-72 md:h-60 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  href="https://lsj.washington.edu/people/ann-frost"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ScheduleImage
                    className="w-full h-full object-cover schedule-headshot-ann"
                    src={annHeadshot}
                    alt="Ann Frost headshot"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    11:10 - 11:25 AM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Inclusive Learning, a Path to Community and Compassion.
                  </div>
                  <div className="w-full max-w-[360px] md:w-72 text-gray-600 text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Ann Frost
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 4 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    11:30 - 11:45 AM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    The Kompany
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 5: Melissa */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a
                  className="w-full max-w-[390px] h-70 md:w-72 md:h-60 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  href="https://www.linkedin.com/in/melissa-hutchins"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ScheduleImage
                    className="w-full h-full object-cover schedule-headshot-melissa"
                    src={melissaHeadshot}
                    alt="Melissa Hutchins headshot"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    11:50 - 12:05 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Taking Control of Your Digital Identity in an AI World
                  </div>
                  <div className="w-full max-w-[360px] md:w-72 text-gray-600 text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Melissa Hutchins
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 6 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    12:10 - 12:15 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Raffle Draw 1
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 7 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall2}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    12:20 - 1:20 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Intermission
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 8 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    1:25 - 1:40 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    SOVO Quartet
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 9: Michael */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a
                  className="w-full max-w-[390px] h-65 md:w-72 md:h-60 rounded-md overflow-hidden block items-center border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  href="https://michaelbling.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ScheduleImage
                    className="w-full h-full object-cover schedule-headshot-michael"
                    src={michaelHeadshot}
                    alt="Michael B. Ling headshot"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    1:45 - 2:00 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                      Forgiveness is a Journey
                  </div>
                  <div className="w-full max-w-[360px] md:w-72 text-gray-600 text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Michael B. Ling
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 10: Vita */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a
                  className="w-full max-w-[390px] h-65 md:w-72 md:h-60 rounded-md overflow-hidden block items-center border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  href="https://vitakari.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ScheduleImage
                    className="w-full h-full object-cover schedule-headshot-vita"
                    src={vitaHeadshot}
                    alt="Vita Kari headshot"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    2:05 - 2:20 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Does Social Media Kill Creativity?
                  </div>
                  <div className="w-full max-w-[360px] md:w-72 text-gray-600 text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Vita Kari
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 11 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    2:25 - 2:30 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Raffle Draw 2
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 12 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    2:35 - 2:50 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    UW RAAS
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 13: Cara */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a
                  className="w-full max-w-[390px] h-65 md:w-72 md:h-60 rounded-md overflow-hidden block items-center border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
                  href="https://www.linkedin.com/in/carahalealter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ScheduleImage
                    className="w-full h-full object-cover schedule-headshot-cara"
                    src={caraHeadshot}
                    alt="Cara Hale Alter headshot"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    2:55 - 3:10 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    The Power of 'Visible Credibility'
                  </div>
                  <div className="w-full max-w-[360px] md:w-72 text-gray-600 text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Cara Hale Alter
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

              {/* Event 14 */}
              <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                <a className="w-full max-w-[560px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block items-center">
                  <ScheduleImage
                    className="w-full h-full object-contain"
                    src={fingerprintSmall}
                    alt="Placeholder"
                  />
                </a>
                <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                  <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                    3:15 - 3:45 PM
                  </div>
                  <div className="w-full max-w-[960px] md:w-[760px] text-black text-3xl md:text-4xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">
                    Speaker Panel
                  </div>
                </div>
              </div>
              <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />
            </div>
          </div>

          {/* Venue */}
          <div className="self-stretch flex flex-col justify-start items-start gap-10 relative">
            <img
              src={fingerprintImage}
              alt=""
              className="absolute left-[-10vw] top-[0px] w-[55%] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] max-md:hidden"
              style={{
                maskImage:
                  "radial-gradient(circle, black 30%, transparent 55%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 30%, transparent 55%)",
              }}
            />
            <div
              id="venue"
              className="self-stretch text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight"
            >
              Venue
            </div>
            <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">
              <div className="flex-1 flex flex-col justify-start gap-8">
                <div className="flex items-start gap-4">
                  <img src={location} alt="Location" className="w-10 h-10" />
                  <div className="flex flex-col justify-start gap-4">
                    <div className="text-gray-900 text-2xl md:text-3xl font-bold font-['Manrope'] leading-[36px] md:leading-[42px]">
                      Kane Hall
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-gray-600 text-base font-normal font-['Manrope'] leading-7">
                        4069 Spokane Ln NE
                      </div>
                      <div className="text-gray-600 text-base font-normal font-['Manrope'] leading-7">
                        Seattle, Washington 98105
                      </div>
                      <div className="text-gray-600 text-base font-normal font-['Manrope'] leading-7">
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative bg-white/0 rounded-[24px] shadow-[0px_32px_64px_-18px_rgba(0,0,0,0.25)] overflow-hidden h-[260px] md:h-[320px] lg:h-[520px]">
                <img
                  className="w-full h-full object-cover"
                  src={venue}
                  alt="Venue location map"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-black/0" />
                <div className="absolute bottom-4 right-4 px-6 py-3 bg-black rounded-[12px] shadow-lg hover:bg-red-700 transition-colors duration-300 ease-out flex justify-center items-center gap-2.5 md:bottom-6 md:right-6 md:px-10 md:py-4">
                  <a
                    href="https://maps.google.com/?q=4069+Spokane+Ln+NE,+Seattle,+WA+98105"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center text-white text-base md:text-xl font-normal font-['Manrope'] leading-6 md:leading-7"
                  >
                    View on Map
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <div className="w-full flex flex-col justify-start items-start gap-10">
            <div className="self-stretch text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight">
              Thank you to our sponsors!
            </div>
          </div>
          <SponsorTiers />
        </div>
      </div>
    </section>
  );
}

export default Home;
