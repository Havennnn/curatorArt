import React from "react";
import logo from "../assets/Logo.svg";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-base py-10 px-24">
      <div className="grid grid-cols-2 gap-4 max-w-full">
        <div className="w-full p-2 flex flex-col">
          <img src={logo} className="h-12 w-12 2xl:h-20 2xl:w-20" />

          <div className="flex gap-10 2xl:text-xl mt-10 font-poppins font-light tracking-wide uppercase">
            <div className="flex flex-col pr-10 gap-10">
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
            <div className="flex flex-col gap-10">
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
        <div className="w-full p-2">
          <div className="flex flex-col gap-5 text-white">
            <div className="flex flex-col">
              <h1 className="2xl:text-5xl">New's Letter</h1>
              <p className="font-poppins font-light uppercase tracking-tight">
                get Daily update’s about events, product amd more
              </p>
            </div>
            <div>
              <form>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-4 bg-transparent border border-white text-white 2xl:text-2xl"
                />
                <button className="bg-[#272727] border-white border text-white py-4 px-16 mt-5 flex items-center justify-center 2xl:text-xl transition duration-300 ease-in-out hover:bg-white hover:text-[#0D0D0D] hover:cursor-pointer hover:shadow-xl">
                  {" "}
                  Subscribe
                </button>
              </form>
            </div>

            <div className="flex gap-5 flex-col uppercase font-poppins font-medium">
              <a
                href="mailto:marablelatrell@gmail.com"
                className="text-white flex gap-2 2xl:text-lg items-center"
              >
                <FaEnvelope className="text-white" /> {/* Mail Icon */}
                <p>Marablelatrell@gmail.com</p>
              </a>
              <a
                href="#"
                className="text-white flex gap-2 2xl:text-lg items-center"
              >
                <FaMapMarkerAlt className="text-white" /> {/* Location Icon */}
                <p>Taytay, Rizal</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 text-white 2xl:text-2xl font-sans flex-col gap-5">
        <img src="/LM.svg" alt="LatsMarbls" className="h-12 w-12"></img>
        <h1 className="font-extralight">
          © LatsMarbls, <span className="text-[#979797]">Art curator</span>{" "}
          project | All rights reserved
        </h1>
      </div>
    </div>
  );
};
export default Footer;
