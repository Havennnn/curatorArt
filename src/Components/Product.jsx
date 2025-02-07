import React from "react";

const Product = () => {
  return (
    <section className="bg-base w-full py-10 2xl:py-16 px-24 relative">
      <div className="flex flex-col justify-center items-center text-white px-24 w-full">
        <h1 className="2xl:text-8xl text text-center">OUR PRODUCT</h1>
        <div className="flex w-5/6 justify-center items-center gap-5 mt-10">
          <div className="w-1/3 relative">
            <img src="/gallery9.png" alt="Product 1" className="w-full" />
            <div className="flex flex-col gap-2 text-white px-12 py-5 bottom-0 absolute">
              <h1 className="2xl:text-5xl">Product 01</h1>
              <p className="font-poppins font-light text-lg tracking-widest">
                Lorem ipsum dolor sit amet, consectetur{" "}
              </p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <img src="/gallery9.png" alt="Product 2" className="w-full" />
            <div className="flex flex-col gap-2 text-white px-12 py-5 bottom-0 absolute">
              <h1 className="2xl:text-5xl">Product 02</h1>
              <p className="font-poppins font-light text-lg tracking-widest">
                Lorem ipsum dolor sit amet, consectetur{" "}
              </p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <img src="/gallery9.png" alt="Product 3" className="w-full" />
            <div className="flex flex-col gap-2 text-white px-12 py-5 bottom-0 absolute">
              <h1 className="2xl:text-5xl">Product 03</h1>
              <p className="font-poppins font-light text-lg tracking-widest">
                Lorem ipsum dolor sit amet, consectetur{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
