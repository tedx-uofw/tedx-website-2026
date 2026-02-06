import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="w-full px-14 py-9 flex justify-between items-center">
      <NavLink to="/">
        <img className="w-40 h-10" src="/header/a23a63fa33d50bfe49fea9c1341f3785e5779d43.png" alt="TEDx Logo" />
      </NavLink>
      <div className="flex justify-center items-center gap-10">
        <NavLink
          to="/speakers"
          className="text-center text-black text-xl font-medium font-['Inter']"
        >
          Speakers
        </NavLink>
        <div className="flex justify-start items-center">
          <NavLink
            to="/about"
            className="text-center text-black text-xl font-medium font-['Inter']"
          >
            About
          </NavLink>
          <img 
            src="/header/arrow-down-s-line.svg" 
            alt="Dropdown arrow" 
            className="w-6 h-6"
          />
        </div>
        <NavLink
          to="/sponsors"
          className="text-center text-black text-xl font-medium font-['Inter']"
        >
          Sponsors
        </NavLink>
        <button
          className="px-6 py-3.5 bg-black/90 rounded flex justify-center items-center gap-2.5"
          type="button"
        >
          <div className="text-center text-white text-base font-medium font-['Manrope']">
            Get Tickets
          </div>
        </button>
      </div>
    </header>
  )
}

export default Header
