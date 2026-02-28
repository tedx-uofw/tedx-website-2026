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
  const caraCropPosition = 'center calc(50% + 54px)'
  const melissaCropPosition = 'center calc(50% + 24px)'
  const michaelCropPosition = 'center calc(50% + 36px)'
  const vitaCropPosition = 'center 50%'
  const annCropPosition = 'center calc(50% + 36px)'
  const nanditaCropPosition = 'center calc(50% + 84px)'

  return (
    <section className="w-full">
        <div className="w-full relative bg-linear-to-b from-white to-[#F7F9FB] overflow-hidden">

            {/* ── Background decorations (purely visual, don't affect layout) ── */}
            <div className="w-[1046.04px] h-[1046.04px] left-[-219.13px] top-[-49.32px] absolute origin-top-left rotate-[9.20deg] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#E5EEF9_0%,_white_100%)] rounded-full pointer-events-none" />
            <div className="w-[1097.73px] h-[1097.73px] left-[-204.06px] top-[5324.45px] absolute origin-top-left rotate-[0.88deg] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#EEF5F8_0%,_white_100%)] rounded-full pointer-events-none" />
            <div className="w-[460.02px] h-[468.74px] left-[1120.45px] top-[531px] absolute origin-top-left rotate-[15.90deg] bg-neutral-400 rounded-full blur-[400px] pointer-events-none" />
            <img
                src={fingerprintImage}
                alt=""
                className="absolute left-[-5vw] top-[80px] w-[800px] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
                style={{
                    maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
                    WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
                }}
            />

            {/* ── HERO SECTION ── */}
            <div className="relative z-10 px-[63px] pt-[206px] pb-16">
                <div className="relative w-full max-w-[925px]">
                    <img
                        className="w-[824px] h-64 absolute top-[-20px] left-[-28px] z-0 opacity-0 pointer-events-none"
                        src={fingerprintImage}
                        alt=""
                    />
                    <img
                        className="w-[824px] h-64 absolute top-[-20px] left-[-28px] z-10 border-0 outline-none"
                        src={heroImage}
                        alt="Hero image"
                    />

                    {/* Push content below the hero image */}
                    <div className="pt-[196px]">
                        <div className="text-black text-2xl font-normal font-['Manrope'] leading-8 z-10 relative mb-10">
                            The memories we carry have a deep meaning, cutting deep into us. Sometimes, they leave impressions that last forever. Other times, they force us to question the impression we will one day leave, forcing questions about ourselves. This requires an exploration of our experiences with people, memories, and life.
                        </div>
                        <div className="inline-flex justify-start items-center gap-10">
                            <button
                                className="w-48 h-20 bg-black/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] text-white text-2xl font-medium font-['Manrope'] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-100"
                                type="button"
                            >
                                Get Tickets
                            </button>
                            <button
                                className="w-48 h-20 bg-gray-200/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] text-black text-2xl font-medium font-['Manrope'] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
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
            <div className="w-[calc(100%-28px)] px-4 mx-auto flex flex-col items-center gap-28 mt-16">

                {/* About TEDx */}
                <div className="w-full flex flex-col justify-start items-start">
                    <div className="self-stretch relative flex items-center justify-between gap-8 py-10">
                        <div className="w-[663.89px] flex flex-col justify-start items-start gap-7">
                            <div className="text-black text-5xl font-semibold font-['Manrope'] leading-[72.61px]">About TEDx</div>
                            <div className="flex flex-col justify-start items-start gap-5">
                                <div className="w-[659.88px] text-gray-600 text-xl font-normal font-['Inter'] leading-8">
                                    TEDxUofW was established to bring inspirational yet informative TED style talks to the University of Washington based in Seattle. Since 2012, our student organization has sought to give amazing speakers a receptive audience to share their passions with.
                                </div>
                            </div>
                        </div>
                        <img className="w-96 h-96 flex-shrink-0" src={x2} alt="TEDx illustration" />
                    </div>
                    <div className="self-stretch relative bg-white py-10">
                        <div className="w-full h-[625px] bg-zinc-300" />
                    </div>
                </div>

                {/* Conference Schedule */}
                <div className="w-full flex flex-col justify-start items-start gap-10">
                    <div id="conference-schedule" className="self-stretch text-black text-7xl font-semibold font-['Manrope'] leading-[100.80px]">
                        Conference Schedule
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-24">

                        <div className="self-stretch inline-flex justify-start items-start gap-14 flex-wrap content-start">
                            <a
                                className="w-80 h-72 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                                href="https://www.linkedin.com/in/carahalealter"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img className="w-full h-full object-cover" style={{ objectPosition: caraCropPosition }} src={caraHeadshot} alt="Cara Hale Alter headshot" />
                            </a>
                            <div className="inline-flex flex-col justify-start items-start gap-7">
                                <div className="w-80 text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Cara Hale Alter</div>
                            </div>
                        </div>
                        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

                        <div className="self-stretch inline-flex justify-start items-start gap-14 flex-wrap content-start">
                            <a
                                className="w-80 h-72 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                                href="https://www.linkedin.com/in/melissa-hutchins"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <img className="w-full h-full object-cover" style={{ objectPosition: melissaCropPosition }} src={melissaHeadshot} alt="Melissa Hutchins headshot" />
                            </a>
                            <div className="inline-flex flex-col justify-start items-start gap-7">
                                <div className="w-80 text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Melissa Hutchins</div>
                            </div>
                        </div>
                        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />

                        <div className="self-stretch inline-flex justify-start items-start gap-14">
                            <div className="w-[607px] h-72 bg-black rounded-md" />
                            <div className="inline-flex flex-col justify-start items-start gap-2.5">
                                <div className="w-96 text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Performance Name</div>
                                <div className="w-[663.89px] text-gray-600 text-xl font-normal font-['Inter'] leading-8">
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
                                <div key={speaker.name} className="self-stretch flex flex-col md:flex-row gap-8 items-start">
                                    <a
                                        className="w-full md:w-80 h-72 rounded-md overflow-hidden flex-shrink-0 block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                                        href={speaker.href}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        <img className="w-full h-full object-cover" style={{ objectPosition: speaker.pos }} src={speaker.src} alt={`${speaker.name} headshot`} />
                                    </a>
                                    <div className="flex-1 flex flex-col gap-4">
                                        <div className="text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">{speaker.name}</div>
                                    </div>
                                </div>
                                {i !== arr.length - 1 && <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black" />}
                            </>
                        ))}

                    </div>
                </div>

                {/* Venue */}
                <div className="self-stretch flex flex-col justify-start items-start gap-14 relative">
                    <img
                        src={fingerprintImage}
                        alt=""
                        className="absolute left-[-10vw] top-[0px] w-[55%] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
                        style={{
                            maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
                            WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 55%)",
                        }}
                    />
                    <div id="venue" className="self-stretch text-black text-7xl font-semibold font-['Manrope'] leading-[100.80px]">Venue</div>
                    <div className="w-full flex flex-col lg:flex-row gap-8 items-stretch">
                        <div className="flex-1 flex flex-col justify-start gap-8">
                            <div className="flex items-start gap-4">
                                <img src={location} alt="Location" className="w-10 h-10" />
                                <div className="flex flex-col justify-start gap-4">
                                    <div className="text-gray-900 text-4xl font-bold font-['Manrope'] leading-[53.16px]">Location</div>
                                    <div className="flex flex-col gap-3">
                                        <div className="text-gray-600 text-xl font-normal font-['Manrope'] leading-10">123 Conference Center Drive</div>
                                        <div className="text-gray-600 text-xl font-normal font-['Manrope'] leading-10">City, State 12345</div>
                                        <div className="text-gray-600 text-xl font-normal font-['Manrope'] leading-10">United States</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative bg-white/0 rounded-[30.38px] shadow-[0px_47.46px_94.92px_-22.78px_rgba(0,0,0,0.25)] overflow-hidden h-[400px] lg:h-[729px]">
                            <img className="w-full h-full object-cover" src={venue} alt="Venue location map" />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-black/0" />
                            <div className="absolute bottom-8 right-8 px-14 py-6 bg-white rounded-[18.98px] shadow-lg flex justify-center items-center gap-2.5">
                                <div className="text-center text-black text-3xl font-normal font-['Manrope'] leading-10">View on Map</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sponsors */}
                <div className="w-full flex flex-col justify-start items-start gap-28">
                    <div className="self-stretch text-black text-7xl font-semibold font-['Manrope'] leading-[100.80px]">
                        Thank you so much for sponsors!
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-28">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-6">
                            <div className="w-full aspect-square bg-gray-900 rounded-3xl flex items-center justify-center">
                                <img className="w-40 h-40 object-cover" src="https://placehold.co/155x155" alt="Sponsor logo" />
                            </div>
                            <div className="text-black text-4xl font-normal font-['Manrope'] leading-[56px] text-center">Company Name</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    </section>
  );
}

export default Home;
