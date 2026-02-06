function About() {
  return (
    <>
      <div
        className="relative w-screen h-screen max-h-screen flex items-center justify-start overflow-hidden 
      bg-[radial-gradient(circle_at_30%_50%,#ffffff_0%,#f4f6f9_60%,#e8ebf2_100%)]
      max-[900px]:flex-col max-[900px]:justify-center max-[900px]:p-5"
      >
        {/* BACKGROUND DECORATION: Fingerprint */}
        <img
          src="/aboutpage-images/full_fingerprint_3.png"
          alt=""
          className="absolute left-[-18vw] top-1/2 -translate-y-1/2 -rotate-19 
          w-[60%] h-auto opacity-[0.04] mix-blend-multiply pointer-events-none z-0"
        />

        {/* MAIN CONTENT */}
        <div
          className="relative z-20 w-full pl-[8vw] 
        max-[900px]:px-5 max-[900px]:mb-5"
        >
          <div className="max-w-137.5">
            {/* Tag Line */}
            <div
              className="flex items-center gap-2 mb-6 tracking-[0.05em] text-black 
            font-['Manrope'] text-[32px] font-normal leading-[140%]"
            >
              <span className="text-[#8fa1b3] text-[32px]">✳</span> TEDxUofW
            </div>

            {/* Hero Text */}
            <h1
              className="text-black font-['Andada_Pro'] text-[44px] font-normal leading-[140%] 
            w-[160%] max-[900px]:w-full"
            >
              We bring bold ideas and lived experiences together to spark
              curiosity and inspire meaningful change on campus and beyond.
            </h1>
          </div>
        </div>

        {/* RIGHT IMAGE: The X */}
        <img
          src="/aboutpage-images/x_imprinted_1.svg"
          alt="X Graphic"
          className="absolute right-[-1vw] top-1/2 -translate-y-1/2 h-[90vh] w-auto z-10 pointer-events-none
          max-[900px]:relative max-[900px]:right-auto max-[900px]:top-auto max-[900px]:translate-y-0 
          max-[900px]:h-[40vh] max-[900px]:-mr-[20%] max-[900px]:self-end"
        />
      </div>
      <div className="w-full bg-[#F8F9FB] flex justify-center pb-20">
        {/* CONTAINER: Matches your requested width (1493px) and padding 
         Responsive: Stacks vertically on mobile, Row on desktop
      */}
        <div className="flex flex-col w-full max-w-[1493px] px-[20px] md:px-[55px] py-[49px] gap-[60px] md:gap-[100px]">
          {/* --- SECTION 1: What is TED? --- */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20">
            {/* Left: Heading */}
            <h2 className="text-black font-manrope text-[32px] md:text-[40px] font-medium leading-tight min-w-[300px]">
              What is TED?
            </h2>

            {/* Right: Text Content */}
            <div className="text-black font-manrope text-[16px] md:text-[18px] font-light leading-[160%] max-w-[700px] space-y-6">
              <p>
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives.
              </p>
              <p>
                The two annual TED conferences invite the world's leading
                thinkers and doers to Vancouver, British Columbia to speak for
                18 minutes or less.
              </p>
            </div>
          </div>

          {/* --- DIVIDER LINE (Dashed) --- */}
          <div className="w-full border-t border-dashed border-gray-400 opacity-50"></div>

          {/* --- SECTION 2: We Are TEDxUofWA --- */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20">
            {/* Left: Heading */}
            <h2 className="text-black font-manrope text-[32px] md:text-[40px] font-medium leading-tight min-w-[300px]">
              We Are TEDxUofWA
            </h2>

            {/* Right: Text Content */}
            <div className="text-black font-manrope text-[16px] md:text-[18px] font-light leading-[160%] max-w-[700px] space-y-6">
              <p>
                TEDxUofW is established to bring inspirational and informative
                TED style talks to the University of Washington. Since 2012, our
                organization has sought to give amazing speakers a receptive
                audience to share their passions with.
              </p>
              <p>
                Its annual conference is made possible by a team of creative and
                hardworking undergraduate students. Our all student-run
                organization has put on a sold-out event for four years in a
                row, gathering a collection of great creative thinkers,
                scientific minds, community leaders, and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F8F9FB] flex justify-center pb-24">
        <div className="w-full max-w-[1493px] px-[20px] md:px-[55px] flex flex-col gap-6">
          {/* --- ROW 1: Two Images --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Container 1 (Left) */}
            <div className="w-full h-[350px] md:h-[450px] bg-gray-200 overflow-hidden relative">
              {/* Replace src with your image */}
              <img
                src="/aboutpage-images/Image1.png"
                alt="Gallery Top Left"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Container 2 (Right) */}
            <div className="w-full h-[350px] md:h-[450px] bg-gray-200 overflow-hidden relative">
              {/* Replace src with your image */}
              <img
                src="/aboutpage-images/Image2.png"
                alt="Gallery Top Right"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- ROW 2: Three Vertical Images --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {/* Loop to create 3 containers */}
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="w-full h-[400px] md:h-[600px] bg-gray-200 overflow-hidden relative"
              >
                {/* Replace src with your image */}
                <img
                  src={`/aboutpage-images/Image${index + 2}.jpg`}
                  alt={`Gallery Bottom ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* --- IMPRINTS LOGO SECTION --- */}
          <div className="flex justify-center items-center mt-16 md:mt-24">
            <div className="relative w-[300px] md:w-[600px] h-auto">
              {/* This is the container for the "IMPRINTS" text/logo.
                Since it uses a specific dotted font/texture, it's best to export 
                that text as a transparent PNG or SVG and place it here.
             */}
              <img
                src="/aboutpage-images/imprint.png"
                alt="IMPRINTS"
                className="w-full h-auto object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
