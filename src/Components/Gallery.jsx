import React from "react";

const Gallery = () => {
  return (
    <section className="bg-[#0D0D0D] px-60 pt-10">
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 gap-4 max-w-full">
          {/* First Column */}
          <div className="grid grid-rows-3 gap-4">
            <img
              src="/gallery1.png"
              alt="Image 1"
              className="h-full w-full row-span-2 object-cover hover:scale-95 transition"
            />
            <img
              src="/gallery2.png"
              alt="Image 2"
              className="h-full w-full row-span-1 object-cover hover:scale-95 transition"
            />
          </div>

          {/* Second Column */}
          <div className="grid grid-rows-2 gap-4">
            <img
              src="/gallery3.png"
              alt="Image 3"
              className="h-full w-full object-cover hover:scale-95 transition"
            />
            <img
              src="/gallery4.png"
              alt="Image 4"
              className="h-full w-full object-cover hover:scale-95 transition"
            />
          </div>

          {/* Third Column */}
          <div className="grid grid-rows-3 gap-4">
            <img
              src="/gallery5.png"
              alt="Image 5"
              className="h-full w-full object-cover hover:scale-95 transition"
            />
            <img
              src="/gallery6.png"
              alt="Image 6"
              className="h-full w-full object-cover hover:scale-95 transition"
            />
            <img
              src="/gallery7.png"
              alt="Image 7"
              className="h-full w-full object-cover hover:scale-95 transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
