import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const navLinks = [
  {
    label: "Speakers",
    to: "/speakers",
    dropdown: [
      { label: "Speakers", to: "/speakers" },
      { label: "Coaches", to: "/speakers", hash: "#coaches" }
    ]
  },
  { label: "Team", to: "/team" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState<string | null>(null);

  const scrollToTop = () => {
    window.dispatchEvent(new Event("tedx:scroll-to-top"));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) return;

      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setScrolled(currentScrollPos > 10);
      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 font-['Manrope'] transition-all duration-300
          ${visible ? "translate-y-0" : "-translate-y-full"}
          ${scrolled ? "bg-white/70 backdrop-blur-md" : "bg-transparent"}
        `}
      >
        <div className="flex w-full items-center px-4 py-3 md:px-6">
          {/* Logo */}
          <NavLink
            className="text-base font-semibold tracking-wide transition-opacity duration-300 ease-out hover:opacity-60"
            to="/"
            onClick={scrollToTop}
          >
            <img
              alt="TedxUofW Logo"
              src="/imprints-images/tedx_logo.png"
              className="w-36 md:w-40"
            />
          </NavLink>

          {/* Desktop Nav */}
          <div className="ml-auto hidden items-center gap-8 text-sm font-medium md:flex">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                link.dropdown ? (
                  <div
                    key={link.label}
                    className="relative py-2"
                    onMouseEnter={() => setDesktopDropdownOpen(link.label)}
                    onMouseLeave={() => setDesktopDropdownOpen(null)}
                  >
                    <span
                      className={`cursor-default transition-colors duration-300 ease-out font-['Inter'] hover:text-red-600 flex items-center gap-1 ${window.location.pathname.startsWith(link.to) ? "text-red-600" : ""
                        }`}
                    >
                      {link.label}
                      <svg className={`w-4 h-4 transition-transform duration-300 ${desktopDropdownOpen === link.label ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div className={`absolute left-0 pt-2 top-full transition-all duration-300 ${desktopDropdownOpen === link.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                      <div className="bg-white shadow-lg border border-gray-100 rounded-md p-2 min-w-[140px] flex flex-col gap-1">
                        {link.dropdown.map((subItem) => (
                          <NavLink
                            key={subItem.label}
                            to={subItem.to + (subItem.hash || "")}
                            onClick={() => {
                              setDesktopDropdownOpen(null);
                              if (subItem.hash) {
                                if (window.location.pathname === subItem.to) {
                                  document.querySelector(subItem.hash)?.scrollIntoView({ behavior: 'smooth' });
                                }
                              } else {
                                if (window.location.pathname === subItem.to) {
                                  scrollToTop();
                                }
                              }
                            }}
                            className="px-3 py-2 font-['Inter'] text-black/80 transition-colors hover:bg-gray-100 hover:text-red-600 block w-full text-left font-medium rounded-md"
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.label}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ease-out font-['Inter'] hover:text-red-600 ${isActive ? "text-red-600" : ""
                      }`
                    }
                    to={link.to}
                    onClick={scrollToTop}
                  >
                    {link.label}
                  </NavLink>
                )
              ))}
            </nav>
            <a
              href="https://forms.gle/rCTJViGfuVHJiU3D8"
              target="_blank"
              className="rounded bg-black px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors duration-300 ease-out hover:bg-red-700 font-['Manrope']"
              type="button"
            >
              Get Tickets
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="ml-auto inline-flex items-center justify-center rounded-md p-2 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col gap-1">
              <span className="h-0.5 w-5 rounded bg-current" />
              <span className="h-0.5 w-5 rounded bg-current" />
              <span className="h-0.5 w-5 rounded bg-current" />
            </span>
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-white bg-opacity-95 z-40 transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-95" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="h-full pt-14 px-6 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Nav Links — vertically centered */}
          <div className="flex-1 flex flex-col justify-center gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`w-full flex items-center justify-between text-3xl font-bold font-['Inter'] transition-colors py-3 ${mobileDropdownOpen === link.label || window.location.pathname.startsWith(link.to) ? "text-red-600" : "text-black"
                        }`}
                      onClick={() => setMobileDropdownOpen((prev) => (prev === link.label ? null : link.label))}
                    >
                      {link.label}
                      <svg className={`w-8 h-8 transition-transform duration-300 ${mobileDropdownOpen === link.label ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileDropdownOpen === link.label ? "max-h-[200px]" : "max-h-0"}`}>
                      <div className="flex flex-col gap-4 pl-4 pt-2">
                        {link.dropdown.map((subItem) => (
                          <NavLink
                            key={subItem.label}
                            to={subItem.to + (subItem.hash || "")}
                            onClick={() => {
                              if (subItem.hash) {
                                if (window.location.pathname === subItem.to) {
                                  document.querySelector(subItem.hash)?.scrollIntoView({ behavior: "smooth" });
                                }
                              } else {
                                if (window.location.pathname === subItem.to) {
                                  scrollToTop();
                                }
                              }
                              setMobileOpen(false);
                            }}
                            className="block text-2xl font-semibold font-['Inter'] transition-colors hover:text-red-600 text-black/70"
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    className={({ isActive }) =>
                      `block text-3xl font-bold font-['Inter'] transition-colors hover:text-red-600 py-3 ${isActive ? "text-red-600" : "text-black"
                      }`
                    }
                    to={link.to}
                    onClick={() => {
                      scrollToTop();
                      setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </NavLink>
                )}
                <div className="border-b border-black/20 mt-4" />
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="pb-10 flex flex-col gap-6">
            {/* Get Tickets button */}
            <a
              href="https://forms.gle/rCTJViGfuVHJiU3D8"
              target="_blank"
              className="rounded bg-black px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors duration-300 ease-out hover:bg-red-700 font-['Manrope'] w-fit"
              type="button"
              onClick={() => setMobileOpen(false)}
            >
              Get Tickets
            </a>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { name: "mail-white", url: "mailto:info@tedx.com" },
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
                { name: "youtube", url: "https://www.youtube.com/@tedxuofwa" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={`/footer-images/${item.name}.svg`}
                    alt={item.name}
                    className={`${item.name === "mail-white"
                      ? "translate-x-[0.5px] translate-y-[0.5px]" // ← add this
                      : ""
                      } ${item.name === "facebook"
                        ? "translate-x-[0.6px] translate-y-0.5"
                        : ""
                      } ${item.name === "tiktok" || item.name === "instagram" || item.name === "linkedin" ? "w-5 h-5" : ""}`}
                  />
                </a>
              ))}
            </div>
            {/* Footer text */}
            <div className="text-sm text-black/60 font-['Manrope']">
              ©TEDxUofW 2026 | Imprints
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
