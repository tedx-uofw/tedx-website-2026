import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Speakers", to: "/speakers" },
  { label: "Team", to: "/team" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "About", to: "/about" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-[2px]">
      <div className="flex w-full items-center px-4 py-3 md:px-6">
        <NavLink className="text-base font-semibold tracking-wide transition-opacity duration-300 ease-out hover:opacity-60" to="/">
          <img
            alt="TedxUofW Logo"
            src="/imprints-images/tedx_logo.webp"
            className="w-36 md:w-40"
          />
        </NavLink>

        <div className="ml-auto hidden items-center gap-8 text-sm font-medium md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `transition-colors duration-300 ease-out font-['Inter'] hover:text-red-600 ${isActive ? "text-red-600" : ""}`
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

      <div
        className={`md:hidden overflow-hidden border-t border-neutral-200 bg-white transition-[max-height,opacity] duration-500 ease-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `transition-colors duration-300 ease-out font-['Inter'] hover:text-red-600 ${isActive ? "text-red-600" : ""}`
                }
                to={link.to}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              className="mt-2 rounded bg-black px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition-colors duration-300 ease-out hover:bg-red-700 font-['Manrope']"
              type="button"
              onClick={() => setMobileOpen(false)}
            >
              Get Tickets
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
