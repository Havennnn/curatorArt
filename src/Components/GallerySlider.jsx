import React from "react";

const GallerySlider = () => {
  return (
    <section className="bg-base w-full pt-20 px-56">
      <div className="bg-[#171717] w-full p-10 flex flex-col justify-center items-center text-white text-8xl font-poppins">
        <div className="flex justify-between items-center w-full">
          <div className="transition duration-300 ease-in-out hover:cursor-pointer hover:transform hover:scale-110">
            {"<"}
          </div>
          <div className="flex justify-center items-center pt-10">
            <img src="/gallery3.png" className="2xl:w-[350px] 2xl:h-[550px]" />
            <img
              src="/gallery1.png"
              className="2xl:w-[400px] 2xl:h-[700px] object-contain"
            />
            <img src="/gallery8.png" className="2xl:w-[350px] 2xl:h-[550px]" />
          </div>
          <div className="transition duration-300 ease-in-out hover:cursor-pointer hover:transform hover:scale-110">
            {">"}
          </div>
        </div>

        <div className="flex justify-center items-center mt-10 rounded-full border border-transparent overflow-hidden">
          <div className="w-12 h-2 p-1 bg-[#6b6b6b]"></div>
          <div className="w-12 h-2 p-1 bg-white"></div>
          <div className="w-12 h-2 p-1 bg-[#6b6b6b]"></div>
        </div>
      </div>
    </section>
  );
};

export default GallerySlider;
