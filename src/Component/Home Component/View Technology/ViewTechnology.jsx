import React from "react";
import { ViewTechnologyCategories } from "./ViewTechnologyConstans";
import ViewTechnologyItem from "./ViewTechnologyItem";

const ViewTechnology = () => {
  return (
    <section className="ViewTechnology container mx-auto xl:px-20 px-5 py-10 font-Instrument ">
      <div className="px-5 py-[6px] text-green-700 bg-sky-100 font-semibold inline-block mb-4">
        WHAT WE DO
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-y-5 mb-10">
        <div className="md:basis-[80%] basis-full">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
            Solve all technology problems in every industry that business need.
          </h2>
        </div>
        <div className="md:basis-[20%] basis-full items-center flex md:justify-end">
          <p className="inline-block border-b-2 font-semibold border-b-[#217b80] transition-all duration-200 cursor-pointer hover:text-[#217b80]">
            View All Industries
          </p>
        </div>
      </div>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 mb-5 gap-x-6 gap-y-4">
        {ViewTechnologyCategories.map((item, index) => (
          <ViewTechnologyItem key={index} name={item.name} icon={item.Icon} path={item.path}/>
        ))}
      </div>
    </section>
  );
};

export default ViewTechnology;
