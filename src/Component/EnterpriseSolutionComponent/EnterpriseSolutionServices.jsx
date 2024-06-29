import React from "react";
import { TbSlashes } from "react-icons/tb";


const EnterpriseSolutionServices = ({serviceData,heading}) => {
  return (
    <>
      <section className="EnterpriseSolutionsServices bg-gradient-to-l from-[#FAF7EF] to-[#f4f6fc] font-Instrument  py-16">
        <div className="container mx-auto xl:px-16">
          <div className="flex md:flex-row flex-col justify-between gap-y-5 mb-10 px-5">
            <div className="md:basis-[80%] basis-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
               {heading}
              </h2>
            </div>
            <div className="md:basis-[20%] basis-full items-center flex md:justify-end">
              <p className="inline-block border-b-2 font-semibold border-b-[#217b80] transition-all duration-200 cursor-pointer hover:text-[#217b80]">
                View All Solutions
              </p>
            </div>
          </div>
          <div className="px-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-y-7 ">
            {serviceData.map((item, index) => (
              <div
                key={index}
                className="px-7 py-9 border-2 bg-white flex flex-col gap-y-3 cursor-pointer group relative"
              >
                <div className="absolute top-[-30px] right-[20px] text-6xl opacity-0 group-hover:transition-all group-hover:duration-500 group-hover:opacity-55 group-hover:translate-x-[-5px] ">
                  <TbSlashes />
                </div>
                <div className="text-6xl">{item.icon}</div>
                <h3 className="text-xl font-semibold relative group-hover:transition-all group-hover:duration-200 group-hover:text-[#1a8489] group-hover:underline ">
                  {item.heading}
                </h3>
                <p className="text-[17px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseSolutionServices;
