import "./Footer.css";

export default function Footer() {
  return (
    <div className="w-full flex flex-col">
      {/* IMPRINTS LOGO SECTION*/}
      {/* This sits on top of the grey footer with a white/light background */}
      <div className="w-full flex justify-center items-center pt-10 pb-20">
        <div className="relative w-[300px] md:w-[600px] h-auto">
          <img
            src="/footer-images/imprint.png"
            alt="IMPRINTS"
            className="footer-logo-animate-scan w-full h-auto object-contain opacity-80"
            // className="footer-logo-animate-scan w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/*  GREY FOOTER CONTENT   */}
      <footer className="w-full bg-[#E6E8EB] pt-16 pb-8">
        <div className="w-full max-w-[1493px] mx-auto px-[20px] md:px-[55px] flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
            {/* COLUMN 1: Brand */}
            <div className="flex flex-col gap-4">
              <div className="w-[200px] h-[50px] flex items-center">
                <img src="/footer-images/tedx_logo.png" className="w-38" />
              </div>
              <p className="text-black font-manrope font-light text-[16px]">
                Ideas worth spreading
              </p>
            </div>

            {/* COLUMN 2: Navigate */}
            <div className="flex flex-col gap-4">
              <h3 className="text-black font-manrope font-medium text-[16px] uppercase tracking-wide">
                Navigate
              </h3>
              <div className="flex flex-col gap-3 text-black font-manrope font-light text-[16px]">
                <a href="/speakers" className="cursor-pointer hover:underline">
                  Speakers
                </a>
                <a href="/about" className="cursor-pointer hover:underline">
                  About
                </a>
                <a href="/sponsors" className="cursor-pointer hover:underline">
                  Sponsors
                </a>
                <a href="/tickets" className="cursor-pointer hover:underline">
                  Get Tickets
                </a>
              </div>
            </div>

            {/* COLUMN 3: Event */}
            <div className="flex flex-col gap-4">
              <h3 className="text-black font-manrope font-medium text-[16px] uppercase tracking-wide">
                Event
              </h3>
              <div className="flex flex-col gap-3 text-black font-manrope font-light text-[16px]">
                <a href="/#conference-schedule" className="cursor-pointer hover:underline">
                  Conference Schedule
                </a>
                <a href="/#venue" className="cursor-pointer hover:underline">
                  Venue Information
                </a>
              </div>
            </div>

            {/* COLUMN 4: Connect */}
            <div className="flex flex-col gap-6">
              <h3 className="text-black font-manrope font-medium text-[16px] uppercase tracking-wide">
                Connect
              </h3>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/tedxuofw/",
                  },
                  {
                    name: "facebook",
                    url: "https://www.facebook.com/TEDxUofW",
                  },
                  {
                    name: "linkedin",
                    url: "https://linkedin.com/company/tedxatuofw/",
                  },
                  { name: "tiktok", url: "https://www.tiktok.com/@tedxuofw" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={`/footer-images/${item.name}.png`}
                      className={`${
                        item.name === "facebook"
                          ? "w-6 h-6 translate-x-[1.3px] translate-y-0.5"
                          : ""
                      } ${item.name === "tiktok" ? "w-5 h-5" : ""} ${
                        item.name === "instagram" || item.name === "linkedin"
                          ? "w-4 h-4"
                          : ""
                      }`}
                    />
                  </a>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 mt-2 cursor-pointer hover:opacity-70">
                <img src="/footer-images/mail.png" className="w-4 h-4" />
                <a href="mailto:info@tedx.com" className="text-black font-manrope font-light text-[16px]">
                  info@tedx.com
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-400 opacity-30"></div>

          {/* Copyright */}
          <div className="w-full">
            <p className="text-[#666] font-manrope font-light text-[14px]">
              ©TEDxUofW 2026. | Imprints
            </p>
            <p className="text-[#666] font-manrope font-light text-[14px]">
              This independent TEDx event is operated under license
              from TED.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
