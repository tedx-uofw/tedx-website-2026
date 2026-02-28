import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Speakers', to: '/speakers' },
  { label: 'Team', to: '/team' },
  { label: 'Sponsors', to: '/sponsors' },
  { label: 'About', to: '/about' },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) return;

      const currentScrollPos = window.scrollY;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      setScrolled(currentScrollPos > 10);
      setVisible(isScrollingUp || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, mobileOpen]);

  return (
      <>
        <header
            className={`fixed top-0 left-0 right-0 z-50 font-['Manrope'] transition-all duration-300
          ${visible ? 'translate-y-0' : '-translate-y-full'}
          ${scrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'}
        `}
        >
          <div className="flex w-full items-center px-4 py-3 md:px-6">
            {/* Logo */}
            <NavLink
                className="text-base font-semibold tracking-wide transition-opacity duration-300 ease-out hover:opacity-60"
                to="/"
            >
              <img
                  alt="TedxUofW Logo"
                  src="/imprints-images/tedx_logo.webp"
                  className="w-36 md:w-40"
              />
            </NavLink>

            {/* Desktop Nav */}
            <div className="ml-auto hidden items-center gap-8 text-sm font-medium md:flex">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.label}
                        className={({ isActive }) =>
                            `transition-colors duration-300 ease-out font-['Inter'] hover:text-red-600 ${
                                isActive ? 'text-red-600' : ''
                            }`
                        }
                        to={link.to}
                    >
                      {link.label}
                    </NavLink>
                ))}
              </nav>
              <button
                  className="rounded bg-black px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors duration-300 ease-out hover:bg-red-700 font-['Manrope']"
                  type="button"
              >
                Get Tickets
              </button>
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
            className={`fixed inset-0 bg-white bg-opacity-95 z-40 transition-opacity duration-300 md:hidden ${
                mobileOpen ? 'opacity-95' : 'opacity-0 pointer-events-none'
            }`}
        >
          <div
              className="h-full pt-14 px-6 flex flex-col"
              onClick={(e) => e.stopPropagation()}
          >

            {/* Nav Links — vertically centered */}
            <div className="flex-1 flex flex-col justify-center gap-2">
              {navLinks.map((link) => (
                  <NavLink
                      key={link.label}
                      className={({ isActive }) =>
                          `block text-3xl font-bold font-['Inter'] transition-colors hover:text-red-600 py-3 ${
                              isActive ? 'text-red-600' : 'text-black'
                          }`
                      }
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    <div className="border-b border-black/20 mt-4" />
                  </NavLink>
              ))}
            </div>

            {/* Bottom section */}
            <div className="pb-10 flex flex-col gap-6">
              {/* Get Tickets button */}
              <button
                  className="inline-block bg-black text-white px-8 py-3 rounded text-lg transition-colors hover:opacity-80 transition-opacity font-['Manrope'] font-semibold w-fit"
                  type="button"
                  onClick={() => setMobileOpen(false)}
              >
                Get Tickets
              </button>


                {/* Social Icons */}
                <div className="flex gap-3">
                  {[
                    {name: "mail-white", url: "mailto:info@tedx.com"},
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
                    { name: "tiktok", url: "https://www.tiktok.com/@tedxuofw" }
                  ].map((item) => (
                      <a
                          key={item.name}
                          href={item.url}
                          className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img
                            src={`/footer-images/${item.name}.webp`}
                            alt={item.name}
                            className={`${
                                item.name === "mail-white"
                                    ? "w-5 h-5 translate-x-[0.5px] translate-y-[0.5px]"  // ← add this
                                    : ""
                            } ${
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