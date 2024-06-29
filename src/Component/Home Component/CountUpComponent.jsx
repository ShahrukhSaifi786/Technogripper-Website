import React from "react";
import CountUp from "react-countup";
const CountUpComponent = () => {
  return (
    <div className="max-w-[1350px] md:mx-auto bg-gradient-to-tl from-[hsl(216,31%,41%)] to-[#5c4545] mb-16 mx-5 rounded-2xl font-Instrument overflow-hidden">
      {/*  */}
      <div className="flex md:justify-between md:flex-row flex-col sm:p-9 p-5">
        <div className="md:basis-[50%] basis-full mb-5">
          <span className="px-4 py-1 text-white font-bold bg-[#217b80] inline-block mb-3">
            ABOUT US
          </span>
          <h3 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-white">
            India's Leading Enterprise Solutions Development Company
          </h3>
        </div>
        <div className="md:basis-[50%] basis-full">
          <p className="md:text-xl mb-4 text-white">
            Our Enterprise Solution Development Company is a leading technology
            company specializing in the development of enterprise-level
            solutions. We design and deliver software solutions to organizations
            of all sizes and across various industries. Our company has a team
            of experienced professionals who use the latest technologies and
            best practices to develop custom software solutions that meet our
            clients’ unique needs.
          </p>
          <span className="relative hover:cursor-pointer text-white before:content-[''] before:absolute before:bottom-[-6px] before:left-0 before:w-0 before:h-[2px] before:transition-all before:duration-500 hover:before:bg-[#217b80] hover:before:w-full ">
            Join us today!
          </span>
        </div>
      </div>
      <hr className="w-[95%] mx-auto my-5" />
      {/*  Counter Section */}
      <div className="grid md:grid-cols-2 grid-cols-1 sm:px-8 px-4 py-6 gap-6 ">
        <div className="flex justify-between gap-4 ">
          <div className="border-l-2 ps-5">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-white">
              <CountUp start={1} end={9} duration={3} />{" "}
            </h2>
            <p className="mt-1 text-white text-xl font-semibold">
              Years experiences
            </p>
          </div>
          <div className="border-l-2 ps-5">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-white">
              <CountUp start={1} end={400} duration={3} />{" "} +
            </h2>
            <p className="mt-1 text-white text-xl font-semibold">
            Happy customers
            </p>
          </div>
        </div>
        <div className="flex md:justify-center">
          <div className="border-l-2 ps-5">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-white">
              <CountUp start={1} end={650} duration={3} />{" "} +
            </h2>
            <p className="mt-1 text-white text-xl font-semibold">
            Project completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountUpComponent;
