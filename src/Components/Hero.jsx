import hero from "../assets/hero-bg.png";

const Hero = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-[#0D0D0D] to-[#181818] text-white overflow-hidden relative">
      <div className="px-16 flex flex-col gap-5 h-full justify-center mt-10 relative z-20">
        <h1 className="text-6xl">
          Welcome to <span className="text-8xl font-bold">Art Curator</span>
        </h1>
        <p className="text-lg 2xl:text-xl font-poppins w-2/4 pr-10">
          A hub for art lovers, where creativity meets curation. Explore
          stunning collections, discover emerging artists, and celebrate the
          beauty of artistic expression.
        </p>
        <button className="border-white border text-white py-2 px-5 2xl:px-10 2xl:text-2xl rounded-md w-48 2xl:w-52 mt-5 transform duration-300 ease-in-out hover:bg-white hover:text-[#0D0D0D] hover:text-2xl z-10 hover:shadow-xl">
          Book Ticket
        </button>
      </div>

      <div className="h-full absolute top-0 left-0 w-full flex justify-center items-center">
        <div>
          <img
            src={hero}
            alt="hero-bg"
            className="absolute -bottom-48 right-0 w-[1300px] z-10"
          />
        </div>
        <div class="absolute lg:w-[1200px] lg:h-[1200px] rounded-full border-[16px] border-white/90 shadow-[0_0_20px_5px_rgba(255,255,255,0.8)] -right-28 -bottom-64 z-0"></div>
      </div>
    </div>
  );
};

export default Hero;
