import React from "react";
import founder from "./image/gabaparas-technogripper.png";
import { PiCheckThin } from "react-icons/pi";
const AboutFounder = () => {
  return (
    <section className="AboutFounder max-w-[1400px] mx-auto xl:px-16 bg-gradient-to-l from-[#FAF7EF] to-[#f4f6fc] font-Instrument mb-16 py-10  rounded-2xl grid lg:grid-cols-2 grid-cols-1 gap-6">
      <div className=" px-5 py-5">
        <div className="mb-5">
          <h2 className="sm:text-3xl text-xl  font-semibold sm:leading-[45px] leading-[35px]">
            9 Years of Expertise across diverse Industries: Your Trusted Partner{" "}
            <br className="sm:block hidden" />
            for Enterprise Solutions <br className="sm:block hidden" />{" "}
            Development
          </h2>
        </div>
        <div className="relative">
          <img src={founder} className="rounded-2xl w-full" alt="" />
          <span className="absolute bottom-2 left-3 text-white text-[18px] ">
            Paras Gaba, CEO, TechnoGripper Solutions
          </span>
        </div>
      </div>
      <div className="bg-white rounded-2xl xl:px-14 xl:py-14 px-5 py-5">
        <div className="">
          <div className="mb-6 sm:text-4xl text-2xl font-semibold">
            <h3>
              Transform your enterprise with cutting-edge solutions! Here's how
              we can help:
            </h3>
          </div>
          <div className="flex flex-col gap-6 mb-7">
            <div className=" flex items-center gap-5">
              <PiCheckThin className="text-[#1a8489] text-2xl" />
              <p className="text-xl">
                Expert IT consulting for strategic growth and optimization.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <PiCheckThin className="text-[#1a8489] text-2xl" />
              <p className="text-xl">
                Customized software development tailored to your business needs.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <PiCheckThin className="text-[#1a8489] text-2xl" />
              <p className="text-xl">
                Seamless integration with your existing systems.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <PiCheckThin className="text-[#1a8489] text-2xl" />
              <p className="text-xl">
                Scalable solutions for future-proofing your operations.
              </p>
            </div>
            <div className=" flex items-center gap-5">
              <PiCheckThin className="text-[#1a8489] text-3xl " />
              <p className="text-xl">
                24/7 support and maintenance to keep your business running
                smoothly.
              </p>
            </div>
          </div>
          <div className="ps-4">
            <button className="px-8 py-3 bg-[#1a8489] font-semibold text-white rounded-lg transition-all duration-200 hover:bg-[#183d3fed]">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
