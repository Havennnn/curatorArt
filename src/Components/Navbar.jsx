import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full text-white text-sm backdrop-blur-sm">
      <div className="align-element py-2 relative ">
        <div className="flex justify-center items-center gap-52 pt-6 2xl:text-2xl">
          <div className="flex gap-10">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              Events
            </a>
            <a href="#" className="text-white">
              Gallery
            </a>
          </div>

          <div className="absolute -mt-3">
            <img src={Logo} className="h-12 w-12 2xl:h-20 2xl:w-20" />
          </div>

          <div className="flex gap-10">
            <a href="#" className="text-white">
              Updates
            </a>
            <a href="#" className="text-white">
              History
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
