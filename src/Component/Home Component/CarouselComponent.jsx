import React from "react";
import { IoLogoWebComponent } from "react-icons/io5";
const CarouselComponent = () => {
  return (
    <>
      <div class="bg-[#217b80] overflow-hidden py-8 mb-16 font-Instrument text-white">
        <div class=" whitespace-nowrap flex justify-between gap-5 slide">
          <div class="flex gap-5">
            <div className="flex items-center gap-5">
              <p class="sm:text-3xl text-2xl  font-semibold">Experience Seamless IT Solutions</p>
              <IoLogoWebComponent className="text-3xl" />
            </div>
            <div className="flex items-center gap-5">
              <p className="sm:text-3xl text-2xl  font-semibold">Request IT Consultation</p>
              <IoLogoWebComponent className="text-3xl" />
            </div>
            <div className="flex items-center gap-5">
              <p class="sm:text-3xl text-2xl  font-semibold">Experience Seamless IT Solutions</p>
              <IoLogoWebComponent className="text-3xl" />
            </div>
            <div className="flex items-center gap-5">
              <p className="sm:text-3xl text-2xl  font-semibold">Request IT Consultation</p>
              <IoLogoWebComponent className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselComponent;
