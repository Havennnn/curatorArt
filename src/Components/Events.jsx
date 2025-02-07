import React from "react";
import image1 from "../assets/image01.png";

const Events = () => {
  return (
    <section className="bg-base w-full py-10 2xl:py-16 px-24 relative ">
      <div className="flex flex-col justify-center items-center text-white w-full">
        <div className="flex justify-between items-center w-full">
          <div className="text-4xl 2xl:text-6xl border-t border-b py-2">
            Upcoming Events
          </div>
          <div className="h-16 w-16 font-poppins 2xl:h-[85px] 2xl:w-[85px] rounded-full border flex justify-center items-center text-[12px] 2xl:text-lg transform duration-300 ease-in-out hover:bg-white hover:text-[#0D0D0D] hover:cursor-pointer z-10">
            View All
          </div>
        </div>

        <div class="carousel-container mt-10 w-full">
          <div class="carousel">
            <div class="carousel-item relative">
              <img src={image1} alt="Image 1" className="w-full" />
              <div class="absolute bottom-0 flex justify-center items-center gap-5 px-5 py-5 w-full">
                <div className="flex justify-center items-center w-1/6">
                  <h1 className="text-5xl 2xl:text-8xl tracking-tight">01</h1>
                </div>
                <div className="flex flex-col gap-1 w-5/6">
                  <h3 className="text-2xl 2xl:text-5xl">
                    History of the Great King
                  </h3>
                  <p className="text-sm 2xl:text-xl font-poppins">
                    Start on: 03/09/23, Monday
                  </p>
                  <p className="uppercase text-[12px] 2xl:text-lg font-poppins">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ipsum elementum pharetra elementum iaculis consequat. Lectus
                    leo egestas mauris amet.
                  </p>
                </div>
                <div className="flex w-3/6 justify-around items-center 2xl:text-2xl font-poppins">
                  <button>Know More</button>
                  <button>Book Ticket</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-5">
          <div>
            <div className="w-64 bg-secondary rounded-full">
              <div className="w-1/6 h-full bg-white rounded-full text-[10px]">
                h
              </div>
            </div>
          </div>
          <div className="flex gap-2 2xl:gap-4">
            <div className="2xl:text-2xl font-poppins h-12 w-12 p-8 bg-secondary rounded-full flex justify-center items-center text-[12px] transform duration-300 ease-in-out hover:bg-white hover:text-base hover:cursor-pointer z-10">
              <p>{"<"}</p>
            </div>
            <div className="2xl:text-2xl font-poppins h-12 w-12 p-8 bg-secondary rounded-full flex justify-center items-center text-[12px] transform duration-300 ease-in-out hover:bg-white hover:text-base hover:cursor-pointer z-10">
              <p>{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
