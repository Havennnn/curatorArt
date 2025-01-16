import { useState, useEffect } from 'react';
import { links } from '../data';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-[#1F3A71]' : 'bg-transparent'
      }`}
    >
      <div className="align-element flex flex-col sm:flex-row sm:items-center py-5 justify-between">
        <h2 className="text-3xl font-medium text-white pointer-events-none">
          curator<span className="text-[#0C1830] font-bold text-[1.4em] shadowlight removeshadow">Art</span>
        </h2>

        {/* Buttons on the right */}
        <div className="font-medium gap-x-14 buttons hidden sm:flex">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-white text-lg tracking-wide hover:text-black duration-300"
              >
                {text}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="absolute z-10 right-10 sm:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-[#1F3A71] py-10">
          <div className="flex flex-col items-center space-y-10">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <a
                  key={id}
                  href={href}
                  className="capitalize text-white text-lg tracking-wide hover:text-black duration-300"
                >
                  {text}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
