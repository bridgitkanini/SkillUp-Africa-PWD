import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { navLinks } from "./index";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="h-16 sm:h-20 relative z-50 py-6 sm:py-8 pb-8 sm:pb-10 bg-[#FDF8EE]">
      <div className="mx-auto w-full h-full max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-row items-center justify-center">
          <img
            src="/skillup-africa-logo.svg"
            alt="logo"
            className="w-16 sm:w-20 md:w-24 lg:w-28 object-contain"
          />
          <p className="text-black font-bold text-lg sm:text-xl md:text-2xl ml-1 sm:ml-2">SkillUP-Africa</p>
        </Link>

        <nav className="hidden md:flex flex-row items-center gap-4 lg:gap-6 xl:gap-8 pr-4 lg:pr-8 text-sm md:text-base font-semibold">
          {navLinks.map(({ id, title, link }) => (
            <Link
              key={id}
              to={link}
              className={`${
                link === pathname
                  ? "text-primary font-bold"
                  : "text-black font-medium"
              } `}
            >
              {title}
            </Link>
          ))}
        </nav>

        {/* Hamburger menu for mobile screens */}
        <div className="flex-center md:hidden mr-2 px-1">
          <button 
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? (
              <CloseIcon fontSize="medium" className="text-gray-700" />
            ) : (
              <MenuIcon fontSize="medium" className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile navigation menu */}
        <div
          className={`fixed inset-0 bg-white z-40 pt-24 pb-12 px-6 overflow-y-auto transition-all duration-300 ease-in-out transform ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          } md:hidden`}
          style={{
            marginTop: '4rem',
            height: 'calc(100vh - 4rem)',
            boxShadow: isOpen ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : 'none',
          }}
        >
          <div className="flex flex-col items-center gap-8">
            {navLinks.map(({ id, title, link }) => (
              <Link
                key={id}
                to={link}
                className={`text-xl font-medium px-4 py-2 rounded-lg transition-colors ${
                  link === pathname
                    ? 'text-primary font-bold bg-primary/10'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {title}
              </Link>
            ))}

            {pathname === "/" && (
              <Link
                to={"/"}
                className="bg-[#4D2C5E] text-white px-8 py-3 text-base font-semibold rounded-full hover:bg-[#3d2350] transition-colors w-full max-w-xs text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
