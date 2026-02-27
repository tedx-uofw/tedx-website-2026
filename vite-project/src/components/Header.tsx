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
    <header className="sticky top-0 z-50">
      <div className="flex w-full items-center px-4 py-3 md:px-6">
        <NavLink className="text-base font-semibold tracking-wide" to="/">
          <img src="/footer-images/tedx_logo.png" className="w-30" />
        </NavLink>

        <div className="ml-auto hidden items-center gap-8 text-sm font-medium md:flex">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `transition font-['Inter'] hover:text-red-600 ${isActive ? "text-red-600" : ""}`
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            className="rounded-lg bg-black px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-red-700 font-['Manrope']"
            type="button"
          >
            Get Tickets
          </button>
        </div>

        <button
          className="ml-auto inline-flex items-center justify-center rounded-md border border-neutral-300 p-2 text-neutral-700 transition hover:bg-neutral-100 md:hidden"
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

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                className={({ isActive }) =>
                  `transition font-['Inter'] hover:text-red-600 ${isActive ? "text-red-600" : ""}`
                }
                to={link.to}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              className="mt-2 rounded-lg bg-black px-5 py-2 text-sm font-semibold tracking-wide text-white shadow-sm transition hover:bg-red-700 font-['Manrope']"
              type="button"
            >
              Get Tickets
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
