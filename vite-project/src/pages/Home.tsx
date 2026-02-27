import './Home.css'
import { useNavigate } from 'react-router-dom'
import heroImage from '../../public/landing/imprinted 1.svg'
import fingerprintImage from '../../public/landing/full fingerprint 3.png'
import x2 from '../../public/landing/x 2.png'
import venue from '../../public/landing/venue.jpg'
import location from '../../public/landing/location.svg'
import caraHeadshot from '../../public/landing/Cara.png'
import melissaHeadshot from '../../public/landing/Melissa.png'
import michaelHeadshot from '../../public/landing/Michael.png'
import vitaHeadshot from '../../public/landing/Vita.png'
import annHeadshot from '../../public/landing/Ann.png'
import nanditaHeadshot from '../../public/landing/Nandita.png'

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
      <div className="w-full h-[9061px] relative bg-white overflow-hidden">
        <div className="w-[1046.04px] h-[1046.04px] left-[-219.13px] top-[-49.32px] absolute origin-top-left rotate-[9.20deg] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#E5EEF9_0%,_white_100%)] rounded-full" />
        <div className="w-[1097.73px] h-[1097.73px] left-[-204.06px] top-[5324.45px] absolute origin-top-left rotate-[0.88deg] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_#B1D6E8_0%,_white_100%)] rounded-full" />
        <div className="w-[460.02px] h-[468.74px] left-[1120.45px] top-[531px] absolute origin-top-left rotate-[15.90deg] bg-neutral-400 rounded-full blur-[400px]" />
        <img
          src={fingerprintImage}
          alt=""
          className="absolute left-[-5vw] top-[80px] w-[800px] h-auto opacity-5 mix-blend-multiply grayscale pointer-events-none z-0 drop-shadow-[10px_10px_12px_rgba(0,0,0,1)]"
          style={{
            maskImage: "radial-gradient(circle, black 30%, transparent 55%)",
            WebkitMaskImage: "radial-gradient(circle, black 10%, transparent 70%)",
          }}
        />
    <div className="w-full h-96 left-0 top-[8220px] absolute bg-white overflow-hidden">
        <img className="w-[824px] h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute" src={heroImage} alt="Home image" />
    </div>
    <div className="w-[925px] h-[469.99px] left-[63px] top-[206px] absolute">
        <img className="w-[824px] h-64 left-[-28px] top-[-20px] absolute z-0 opacity-0 pointer-events-none" src={fingerprintImage} alt="Fingerprint background - image insert here" />
        <img className="w-[824px] h-64 left-[-28px] top-[-20px] absolute z-10 border-0 outline-none" src={heroImage} alt="Hero image" />
        <div className="w-[925px] left-0 top-[195.99px] absolute justify-start text-black text-2xl font-normal font-['Manrope'] leading-8 z-10 relative">The memories we carry have a deep meaning, cutting deep into us. Sometimes, they leave impressions that last forever. Other times, they force us to question the impression we will one day leave, forcing questions about ourselves. This requires an exploration of our experiences with people, memories, and life.</div>
        <div className="left-0 top-[250px] absolute inline-flex justify-start items-center gap-10 z-10 relative">
            <button
              className="w-48 h-20 relative bg-black/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] shadow-[inset_-2px_4px_7px_0px_rgba(0,0,0,0.05)] overflow-hidden text-center text-white text-2xl font-medium font-['Manrope'] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-100"
              type="button"
            >
              Get Tickets
            </button>
            <button
              className="w-48 h-20 relative bg-gray-200/80 rounded border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] shadow-[inset_-2px_4px_7px_0px_rgba(0,0,0,0.05)] overflow-hidden text-center text-black text-2xl font-medium font-['Manrope'] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
              onClick={() => navigate('/speakers')}
              type="button"
            >
              Learn More
            </button>
        </div>
    </div>
    <div className="w-[calc(100%-28px)] px-4 left-[14px] top-[1063px] absolute inline-flex flex-col justify-start items-center gap-28">
        <div className="w-full flex flex-col justify-start items-start">
            <div className="self-stretch h-[556.74px] relative flex items-center justify-between gap-8">
                <div className="w-[663.89px] flex flex-col justify-start items-start gap-7">
                    <div className="self-stretch h-16 relative">
                        <div className="left-0 top-0 absolute justify-start text-black text-5xl font-semibold font-['Manrope'] leading-[72.61px]">About TEDx</div>
                    </div>
                    <div className="self-stretch h-72 flex flex-col justify-start items-start gap-5">
                        <div className="self-stretch h-32 relative">
                            <div className="w-[659.88px] left-0 top-0 absolute justify-start text-gray-600 text-xl font-normal font-['Inter'] leading-8">TEDxUofW was established to bring inspirational yet informative TED style talks to the University of Washington based in Seattle. Since 2012, our student organization has sought to give amazing speakers a receptive audience to share their passions with.</div>
                        </div>
                    </div>
                </div>
                <img className="w-96 h-96 flex-shrink-0" src={x2} alt="TEDx illustration" />
            </div>
            <div className="self-stretch h-[556.74px] relative bg-white">
                <div className="w-full h-[625px] left-0 top-[-34.74px] absolute bg-zinc-300" />
            </div>
        </div>
            <div className="w-full flex flex-col justify-start items-start gap-10">
            <div id="conference-schedule" className="self-stretch justify-start text-black text-7xl font-semibold font-['Manrope'] leading-[100.80px]">Conference Schedule</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-24">
                <div className="self-stretch inline-flex justify-start items-start gap-14 flex-wrap content-start">
                    <a
                      className="w-80 h-72 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                      href="https://www.linkedin.com/in/carahalealter?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZFWyPBiLQKiaF8QpgtlV7w%3D%3D"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{ objectPosition: caraCropPosition }}
                        src={caraHeadshot}
                        alt="Cara Hale Alter headshot"
                      />
                    </a>
                    <div className="inline-flex flex-col justify-start items-start gap-7">
                        <div className="w-80 justify-start text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Cara Hale Alter</div>
                        <div className="w-48 justify-start text-black text-3xl font-light font-['Manrope'] leading-10">Speaker Role</div>
                    </div>
                </div>
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="self-stretch inline-flex justify-start items-start gap-14 flex-wrap content-start">
                    <a
                      className="w-80 h-72 rounded-md overflow-hidden block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                      href="https://www.linkedin.com/in/melissa-hutchins?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bg3WntymrSxGMcb3QkwNlKg%3D%3D"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{ objectPosition: melissaCropPosition }}
                        src={melissaHeadshot}
                        alt="Melissa Hutchins headshot"
                      />
                    </a>
                    <div className="inline-flex flex-col justify-start items-start gap-7">
                        <div className="w-80 justify-start text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Melissa Hutchins</div>
                        <div className="w-48 justify-start text-black text-3xl font-light font-['Manrope'] leading-10">Speaker Role</div>
                    </div>
                </div>
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="self-stretch inline-flex justify-start items-start gap-14">
                    <div className="w-[607px] h-72 bg-black rounded-md" />
                    <div className="inline-flex flex-col justify-start items-start gap-2.5">
                        <div className="w-96 justify-start text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Performance Name</div>
                        <div className="w-[663.89px] justify-start text-gray-600 text-xl font-normal font-['Inter'] leading-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</div>
                    </div>
                </div>
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="self-stretch flex flex-col md:flex-row gap-8 items-start">
                    <a
                      className="w-full md:w-80 h-72 rounded-md overflow-hidden flex-shrink-0 block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                      href="https://www.linkedin.com/in/michael-ling-1079a3391?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdgprxSdGTNS4MEJMr%2Fcn9g%3D%3D"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{ objectPosition: michaelCropPosition }}
                        src={michaelHeadshot}
                        alt="Michael B Ling headshot"
                      />
                    </a>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Michael B Ling</div>
                        <div className="text-black text-3xl font-light font-['Manrope'] leading-10">Speaker Role</div>
                    </div>
                </div>
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="self-stretch flex flex-col md:flex-row gap-8 items-start">
                    <a
                      className="w-full md:w-80 h-72 rounded-md overflow-hidden flex-shrink-0 block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                      href="https://vitakari.com/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{ objectPosition: vitaCropPosition }}
                        src={vitaHeadshot}
                        alt="Vita Kari headshot"
                      />
                    </a>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Vita Kari</div>
                        <div className="text-black text-3xl font-light font-['Manrope'] leading-10">Speaker Role</div>
                    </div>
                </div>
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="self-stretch flex flex-col md:flex-row gap-8 items-start">
                    <a
                      className="w-full md:w-80 h-72 rounded-md overflow-hidden flex-shrink-0 block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                      href="https://lsj.washington.edu/people/ann-frost"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{ objectPosition: annCropPosition }}
                        src={annHeadshot}
                        alt="Ann Frost headshot"
                      />
                    </a>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Ann Frost</div>
                        <div className="text-black text-3xl font-light font-['Manrope'] leading-10">Speaker Role</div>
                    </div>
                </div>
                <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-black"></div>
                <div className="self-stretch flex flex-col md:flex-row gap-8 items-start">
                    <a
                      className="w-full md:w-80 h-72 rounded-md overflow-hidden flex-shrink-0 block border border-black/10 shadow-[0_6px_16px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)] active:translate-y-0 active:scale-100"
                      href="https://www.linkedin.com/in/nandita-gupta/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <img
                        className="w-full h-full object-cover"
                        style={{ objectPosition: nanditaCropPosition }}
                        src={nanditaHeadshot}
                        alt="Nandita Gupta headshot"
                      />
                    </a>
                    <div className="flex-1 flex flex-col gap-4">
                        <div className="text-black text-5xl font-normal font-['Manrope'] leading-[67.20px]">Nandita Gupta</div>
                        <div className="text-black text-3xl font-light font-['Manrope'] leading-10">Speaker Role</div>
                    </div>
                </div>
            </div>
        </div>
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
            <div id="venue" className="self-stretch justify-start text-black text-7xl font-semibold font-['Manrope'] leading-[100.80px]">Venue</div>
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
                <div className="flex-1 relative bg-white/0 rounded-[30.38px] shadow-[0px_47.4609375px_94.921875px_-22.78125px_rgba(0,0,0,0.25)] overflow-hidden h-[400px] lg:h-[729px]">
                    <img className="w-full h-full object-cover" src={venue} alt="Venue location map" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-black/0" />
                    <div className="absolute bottom-8 right-8 px-14 py-6 bg-white rounded-[18.98px] shadow-[0px_7.59375px_11.390625px_-7.59375px_rgba(0,0,0,0.10)] shadow-[0px_18.984375px_28.4765625px_-5.6953125px_rgba(0,0,0,0.10)] flex justify-center items-center gap-2.5">
                        <div className="text-center text-black text-3xl font-normal font-['Manrope'] leading-10">View on Map</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-28">
            <div className="self-stretch justify-start text-black text-7xl font-semibold font-['Manrope'] leading-[100.80px]">Thank you so much for sponsors!</div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
