import React from "react";

import { Link } from "react-router-dom";
const EnterpriseSolutionHeader = ({ headerData, imgSource }) => {
  return (
    <>
      <section className="EnterpriseSolution-Header bg-gradient-to-b to-[#fff] from-[#e5eaff] xl:px-16 px-5 py-16 font-Instrument mb-3 ">
        <div className="container mx-auto">
          {/* Main Heading */}
          <div className="mb-12 xl:px-4">
            <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center mb-6 xl:leading-[70px]">
              {headerData.mainHeading}
            </h2>
            <p className="text-center sm:text-xl text-[16px] ">{headerData.mainHeading2}</p>
          </div>
          {/* Image with Text Section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-7 lg:py-5 mb-8">
            <div className="lg:order-1 order-2 ">
              <div className="px-5 py-[5px] text-gray-600 bg-gray-300 text-[13px] font-semibold inline-block mb-5">
                TECHNOGRIPPER SOLUTIONS
              </div>
              <h2 className="lg:text-[42px] sm:text-2xl text-xl lg:leading-[1.2] font-semibold mb-4">
                {headerData.mainSubHeading}
              </h2>
              <p className="mb-5 text-[16px]">
                {headerData.mainHeadingParagraph1}
              </p>
              <p className="mb-7 text-[16px]">
                {headerData.mainHeadingParagraph2}
              </p>
              <div className="flex gap-x-7">
                <div>
                  <h3 className="md:text-5xl text-3xl  font-semibold mb-2">
                    9
                  </h3>
                  <p className="md:text-xl text-xs">Years of Experiences</p>
                </div>
                <div>
                  <h3 className="md:text-5xl text-3xl font-semibold mb-2">
                    400
                  </h3>
                  <p className="md:text-xl text-xs">Happy Business Clients</p>
                </div>
              </div>
            </div>
            <div className=" flex lg:justify-end md:justify-center  justify-center items-center lg:order-2 order-1 ">
              <div className="max-w-[550px] max-h-[450px] overflow-hidden rounded-3xl  w-full border  ">
                <img src={imgSource} className=" sm:h-[500px]  w-full object-cover" alt="" />
              </div>
             
            </div>
          </div>
          {/* only text Section */}
          <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-x-[100px] gap-x-[50px] lg:px-7 lg:py-5">
            <div className="lg:order-1 order-2 xl:pr-10 flex flex-col justify-center">
              <h2 className="lg:text-[42px] sm:text-2xl text-xl lg:leading-[1.2] font-semibold mb-4">
                {headerData.subHeading}
              </h2>
              <p className="mb-5 text-[16px]">
                {headerData.subHeadingParagraph1}
              </p>
            </div>
            <div className=" lg:order-2 order-1 mb-3 md:px-5 lg:px-0">
              <p className="mb-5 text-[17px]">
                {headerData.subHeadingParagraph2}
              </p>
              <p className="mb-5 text-[17px]">
                {headerData.subHeadingParagraph3}
              </p>
              <Link to={"/about-us"} onClick={() => window.scrollTo(0, 0)}>
                {" "}
                <span className="relative hover:cursor-pointer inline-block mb-2  font-bold text-black border-b-2 border-black pb-1 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:transition-all before:duration-500 hover:before:bg-[#217b80] hover:before:w-full ">
                  Our Company
                </span>
              </Link>
            </div>
          </div>
          {/* Cta Section */}
          <div className="CTASection lg:px-7">
            <div className="border bg-gradient-to-r to-[#805d5d] from-[#414e62] px-5 py-6 flex justify-between md:flex-row flex-col gap-y-5 items-center font-Instrument rounded-xl">
              <div>
                <p className="xl:text-3xl text-xl text-white text-center md:text-start font-bold">
                  {headerData.ctaHeading}
                </p>
              </div>
              <div className="">
                <button className="xl:px-8 px-5 xl:py-3 py-2 lg:text-xl text-[15px] bg-[#1a8489] text-white transition-all duration-200 hover:bg-[#44c1c890]  font-semibold rounded-lg">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseSolutionHeader;
