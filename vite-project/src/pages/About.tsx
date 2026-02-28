function About() {
  return (
    <>
      <div
        className="relative w-screen min-h-screen flex items-center justify-start 
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
              We bring bold ideas and lived experiences together to spark
              curiosity and inspire meaningful change on campus and beyond.
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
      <div className="w-full flex justify-center pb-20">
        <div className="flex flex-col w-full max-w-[1493px] px-[20px] md:px-[55px] py-[49px] gap-[60px] md:gap-[100px]">
          {/* --- SECTION 1: What is TED? --- */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20">
            {/* Left: Heading 
             FIX 2: Changed font-medium -> font-bold
             FIX 3: Added tracking-tighter (Scrunched look)
          */}
            <h2 className="text-black font-['Manrope'] text-[32px] md:text-[40px] font-bold tracking-tighter leading-tight min-w-[300px]">
              What is TED?
            </h2>

            {/* Right: Text Content 
             FIX 4: Changed font-light -> font-normal (Bolder)
             FIX 5: Added tracking-tight (Scrunched look)
             FIX 6: Adjusted leading to leading-snug (Tighter line height)
          */}
            <div className="text-black font-['Manrope'] text-[16px] md:text-[18px] font-normal tracking-tight leading-snug max-w-[576px] space-y-6">
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

          {/* --- SECTION 2: We Are TEDxUofW --- */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-20">
            <h2 className="text-black font-['Manrope'] text-[32px] md:text-[40px] font-bold tracking-tighter leading-tight min-w-[300px]">
              We Are TEDxUofW
            </h2>

            <div className="text-black font-['Manrope'] text-[16px] md:text-[18px] font-normal tracking-tight leading-snug max-w-[576px] space-y-6">
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
      <div className="w-full flex justify-center bg-linear-to-b from-white to-[#F7F9FB]">
        <div className="w-full max-w-[1493px] px-[20px] md:px-[55px] flex flex-col gap-6">
          {/* --- ROW 1: Two Images --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {/* Container 1 (Left) */}
            <div className="w-full h-[350px] md:h-[450px] bg-gray-200 overflow-hidden relative">
              {/* Replace src with your image */}
              <img
                src="/aboutpage-images/Image1.webp"
                alt="Gallery Top Left"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Container 2 (Right) */}
            <div className="w-full h-[350px] md:h-[450px] bg-gray-200 overflow-hidden relative">
              {/* Replace src with your image */}
              <img
                src="/aboutpage-images/Image2.webp"
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
                  src={`/aboutpage-images/Image${index + 2}.webp`}
                  alt={`Gallery Bottom ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
