import './Home.css'
import { useNavigate } from 'react-router-dom'
import heroImage from '/imprints-images/imprinted_1.svg'
import fingerprintImage from '/imprints-images/full_fingerprint_3.webp'
import x2 from '/imprints-images/x_2.webp'
import venue from '/landing/venue.webp'
import location from '/landing/location.svg'
import caraHeadshot from '/speakers/cara-hale-alter.webp'
import melissaHeadshot from '/speakers/melissa-hutchins.webp'
import michaelHeadshot from '/speakers/michael-b-ling.webp'
import vitaHeadshot from '/speakers/vita-kari.webp'
import annHeadshot from '/speakers/ann-frost.webp'
import nanditaHeadshot from '/speakers/nandita-gupta.webp'

function Home() {
  const navigate = useNavigate()
  const caraCropPosition = 'center calc(50% + 30px)'
  const melissaCropPosition = 'center calc(50% + 24px)'
  const michaelCropPosition = 'center calc(50% + 36px)'
  const vitaCropPosition = 'center 50%'
  const annCropPosition = 'center calc(50% + 36px)'
  const nanditaCropPosition = 'center calc(50% + 84px)'

  return (
    <section className="w-full">
        <div className="w-full relative bg-linear-to-b from-white to-[#F7F9FB] overflow-hidden">

            {/* ── Background decorations (purely visual, don't affect layout) ── */}
            <div className="w-[1046.04px] h-[1046.04px] left-[-219.13px] top-[-49.32px] absolute origin-top-left rotate-[9.20deg] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#E5EEF9_0%,_white_100%)] rounded-full pointer-events-none max-md:scale-75 max-md:-left-[260px] max-md:top-[-140px]" />
            
            <img
                src={fingerprintImage}
                alt=""
                className="absolute left-[-5vw] top-[80px] w-[800px] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] max-md:w-[520px] max-md:left-[-25vw] max-md:top-[40px] max-md:opacity-[0.04]"
                style={{
                    maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
                    WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
                }}
            />
            {/* Saturated blue overlay on the right (matches other pages) */}
            <img
                src="/imprints-images/saturatedblue.webp"
                alt="design"
                className="absolute rotate-[15.905deg] right-[-17vw] mt-[0%] max-[900px]:right-[-30vw] pointer-events-none max-md:top-[6%] max-md:mt-0 max-md:w-[60%] max-md:opacity-80"
            />

            {/* ── HERO SECTION ── */}
            <div className="relative z-10 px-[63px] pt-[206px] pb-16 max-md:px-5 max-md:pt-32 max-md:pb-10">
                <div className="relative w-full max-w-[925px]">
                    <img
                        className="w-full max-w-[824px] h-auto absolute top-[-20px] left-[-28px] z-0 opacity-0 pointer-events-none max-md:hidden"
                        src={fingerprintImage}
                        alt=""
                    />
                    <img
                        className="w-full max-w-[824px] h-auto absolute top-[-20px] left-[-28px] z-10 border-0 outline-none max-md:static max-md:mb-6"
                        src={heroImage}
                        alt="Hero image"
                    />

                    {/* Push content below the hero image */}
                    <div className="pt-[196px] max-md:pt-0">
                        <div className="text-black text-2xl font-normal font-['Manrope'] leading-8 z-10 relative mb-10 max-md:text-base max-md:leading-7 max-md:mb-6">
                            The memories we carry have a deep meaning, cutting deep into us. Sometimes, they leave impressions that last forever. Other times, they force us to question the impression we will one day leave, forcing questions about ourselves. This requires an exploration of our experiences with people, memories, and life.
                        </div>
                        <div className="inline-flex justify-start items-center gap-10 max-md:gap-6 max-md:justify-center max-md:w-full">
                            <button
                                className="w-48 h-20 bg-black/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] text-white text-2xl font-medium font-['Manrope'] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-100 max-md:w-40 max-md:h-16 max-md:text-xl"
                                type="button"
                            >
                                Get Tickets
                            </button>
                            <button
                                className="w-48 h-20 bg-gray-200/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] text-black text-2xl font-medium font-['Manrope'] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100 max-md:w-40 max-md:h-16 max-md:text-xl"
                                onClick={() => navigate('/speakers')}
                                type="button"
                            >
                                Learn More
                            </button>
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
                            <div className="text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight">About TEDx</div>
                            <div className="flex flex-col justify-start items-start gap-5">
                                <div className="w-full max-w-[660px] text-gray-600 text-base md:text-xl font-normal font-['Inter'] leading-7 md:leading-8">
                                    TEDxUofW was established to bring inspirational yet informative TED style talks to the University of Washington based in Seattle. Since 2012, our student organization has sought to give amazing speakers a receptive audience to share their passions with.
                                </div>
                            </div>
                        </div>
                        <img className="w-56 h-56 md:w-96 md:h-96 flex-shrink-0 max-md:self-center" src={x2} alt="TEDx illustration" />
                    </div>
                    {/* <div className="self-stretch relative bg-white py-10">
                        <div className="w-full h-[625px] bg-zinc-300" />
                    </div> */}
                </div>

                {/* Conference Schedule */}
                <div className="w-full flex flex-col justify-start items-start gap-8">
                    <div id="conference-schedule" className="self-stretch text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight">
                        Conference Schedule
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-12 md:gap-16">

                        <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                            <a
                                className="w-full max-w-[360px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100 max-md:max-w-[260px] max-md:h-44"
                                href="https://www.linkedin.com/in/carahalealter"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img className="w-full h-full object-cover" style={{ objectPosition: caraCropPosition }} src={caraHeadshot} alt="Cara Hale Alter headshot" />
                            </a>
                            <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                                <div className="w-full max-w-[360px] md:w-72 text-black text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">Cara Hale Alter</div>
                                <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

                        <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap content-start max-md:flex-col max-md:items-center max-md:text-center">
                            <a
                                className="w-full max-w-[360px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100 max-md:max-w-[260px] max-md:h-44"
                                href="https://www.linkedin.com/in/melissa-hutchins"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img className="w-full h-full object-cover" style={{ objectPosition: melissaCropPosition }} src={melissaHeadshot} alt="Melissa Hutchins headshot" />
                            </a>
                            <div className="inline-flex flex-col justify-start items-start gap-4 max-md:items-center">
                                <div className="w-full max-w-[360px] md:w-72 text-black text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">Melissa Hutchins</div>
                                <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

                        <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap max-md:flex-col max-md:items-center max-md:text-center">
                            <div className="w-full max-w-[360px] h-56 md:w-72 md:h-60 bg-black rounded-md max-md:max-w-[260px] max-md:h-44" />
                            <div className="inline-flex flex-col justify-start items-start gap-3 max-md:items-center">
                                <div className="w-full max-w-[360px] md:w-72 text-black text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">Performance Name</div>
                                <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

                        {[
                            { name: "Michael B Ling", href: "https://www.linkedin.com/in/michael-ling-1079a3391", src: michaelHeadshot, pos: michaelCropPosition },
                            { name: "Vita Kari", href: "https://vitakari.com/", src: vitaHeadshot, pos: vitaCropPosition },
                            { name: "Ann Frost", href: "https://lsj.washington.edu/people/ann-frost", src: annHeadshot, pos: annCropPosition },
                            { name: "Nandita Gupta", href: "https://www.linkedin.com/in/nandita-gupta/", src: nanditaHeadshot, pos: nanditaCropPosition },
                        ].map((speaker, i, arr) => (
                            <>
                                <div key={speaker.name} className="self-stretch flex flex-col md:flex-row gap-8 items-start max-md:gap-6 max-md:items-center max-md:text-center">
                                    <a
                                        className="w-full max-w-[360px] h-56 md:w-72 md:h-60 rounded-md overflow-hidden flex-shrink-0 block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100 max-md:max-w-[260px] max-md:h-44"
                                        href={speaker.href}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <img className="w-full h-full object-cover" style={{ objectPosition: speaker.pos }} src={speaker.src} alt={`${speaker.name} headshot`} />
                                    </a>
                                    <div className="flex-1 flex flex-col gap-4 max-md:items-center">
                                        <div className="text-black text-2xl md:text-3xl font-normal font-['Manrope'] leading-[36px] md:leading-[42px]">{speaker.name}</div>
                                        <div className="w-full max-w-[560px] text-gray-600 text-base font-normal font-['Inter'] leading-7">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </div>
                                    </div>
                                </div>
                                {i !== arr.length - 1 && <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />}
                            </>
                        ))}

                    </div>
                </div>

                {/* Venue */}
                <div className="self-stretch flex flex-col justify-start items-start gap-10 relative">
                    <img
                        src={fingerprintImage}
                        alt=""
                        className="absolute left-[-10vw] top-[0px] w-[55%] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)] max-md:hidden"
                        style={{
                            maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
                            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 55%)",
                        }}
                    />
                    <div id="venue" className="self-stretch text-black text-4xl md:text-5xl font-semibold font-['Manrope'] leading-tight">Venue</div>
                    <div className="w-full flex flex-col lg:flex-row gap-6 items-stretch">
                        <div className="flex-1 flex flex-col justify-start gap-8">
                            <div className="flex items-start gap-4">
                                <img src={location} alt="Location" className="w-10 h-10" />
                                <div className="flex flex-col justify-start gap-4">
                                    <div className="text-gray-900 text-2xl md:text-3xl font-bold font-['Manrope'] leading-[36px] md:leading-[42px]">Location</div>
                                    <div className="flex flex-col gap-3">
                                        <div className="text-gray-600 text-base font-normal font-['Manrope'] leading-7">123 Conference Center Drive</div>
                                        <div className="text-gray-600 text-base font-normal font-['Manrope'] leading-7">City, State 12345</div>
                                        <div className="text-gray-600 text-base font-normal font-['Manrope'] leading-7">United States</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative bg-white/0 rounded-[24px] shadow-[0px_32px_64px_-18px_rgba(0,0,0,0.25)] overflow-hidden h-[260px] md:h-[320px] lg:h-[520px]">
                            <img className="w-full h-full object-cover" src={venue} alt="Venue location map" />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-black/0" />
                            <div className="absolute bottom-4 right-4 px-6 py-3 bg-white rounded-[12px] shadow-lg flex justify-center items-center gap-2.5 md:bottom-6 md:right-6 md:px-10 md:py-4">
                                <div className="text-center text-black text-base md:text-xl font-normal font-['Manrope'] leading-6 md:leading-7">View on Map</div>
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
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
                    {[
                        { name: "Davis Law Group", source: "dlg.webp" },
                        { name: "Associated Students of UW", source: "asuw.webp" },
                        { name: "University Marketing & Communications (UMAC)", source: "umac.webp" },
                        { name: "Bombay Express", source: "bombay.webp" },
                        { name: "Lune Cafe", source: "lune.webp" },
                        { name: "Celsius", source: "celsius.webp" },
                    ].map((sponsor) => (
                        <div key={sponsor.name} className="flex flex-col items-center gap-6">
                            <div className="w-full max-w-[340px] aspect-square bg-gray-900 rounded-3xl flex items-center justify-center max-md:max-w-[280px]">
                                <img
                                    className="w-40 h-40 md:w-48 md:h-48 object-contain"
                                    src={`/sponsors-images/${sponsor.source}`}
                                    alt={`${sponsor.name} logo`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="text-black text-2xl md:text-3xl font-normal font-['Manrope'] leading-8 md:leading-10 text-center">{sponsor.name}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    </section>
  );
}

export default Home;
