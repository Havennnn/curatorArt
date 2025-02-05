import "./design.css";
import hero from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <div className="h-[680px] bg-gradient-to-r from-[#0D0D0D] to-[#181818] text-white overflow-hidden relative">
      <div className="px-10 flex flex-col gap-5 h-full justify-center mt-10 realtive">
        <h1 className="text-4xl">
          Welcome to <span className="text-6xl font-bold">Art Curator</span>
        </h1>
        <p className="text-md font-poppins w-2/4 pr-10">
          A hub for art lovers, where creativity meets curation. Explore
          stunning collections, discover emerging artists, and celebrate the
          beauty of artistic expression.
        </p>
        <button className="border-white border text-white py-2 px-5 rounded-md w-48 mt-5 transform duration-300 ease-in-out hover:bg-white hover:text-base z-10 hover:shadow-xl">
          Explore Now
        </button>
      </div>

      <div className="h-full absolute top-0 left-0 w-full flex justify-center items-center">
        <div>
          <img
            src={hero}
            alt="hero-bg"
            className="absolute top-0 right-0 w-[800px] z-10"
          />
        </div>
        <div class="absolute lg:w-[800px] lg:h-[800px] rounded-full border-[8px] border-white/90 shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] -right-24 top-20 z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
