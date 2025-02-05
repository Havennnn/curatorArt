import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full text-white text-sm backdrop-blur-sm">
      <div className="align-element py-2 relative ">
        <div className="flex justify-center items-center gap-52 pt-6">
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

          <div className="absolute flex items-center bg-[#0a0a0a] flex-col h-34 w-auto px-1 top-2">
            <img src={Logo} className="h-16 w-16" />
            <h1 className="text-center pb-2 uppercase text-[10px] -mt-2">
              Art <br />
              Curator
            </h1>
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
