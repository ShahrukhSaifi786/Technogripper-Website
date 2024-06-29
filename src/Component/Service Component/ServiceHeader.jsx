import React from "react";
import { ScalableSolutionCategories } from "../Home Component/ScalableSolutionComponent/ScalableSolutionConstans";
import ScalableSolutionItem from "../Home Component/ScalableSolutionComponent/ScalableSolutionItem";

const ServiceHeader = () => {
  return (
    <div className="Service Header bg-gradient-to-b to-[#fff] from-[#e5eaff] xl:px-16 px-5 py-16 font-Instrument mb-3 ">
     <div className="container mx-auto">
     <div className="mb-8 xl:px-4">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center mb-6 xl:leading-[70px]">Empowering your Businesses through our Innovative IT Solutions</h2>
        <p className="text-[18px] sm:ms-6 ">
          In today's digital landscape, staying ahead requires the right
          technology partner. We offer a comprehensive suite of IT services
          designed to streamline your operations, boost efficiency, and unlock
          new growth opportunities.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 px-5 ">
          {ScalableSolutionCategories.map((item, index) =>
            item.categories === "Innovative  Solution" ? (
              <ScalableSolutionItem
                key={index}
                name={item.name}
                icon={item.icon}
                discription={item.discription}
                title={item.title}
                path={item.path}
              />
            ) : null
          )}
        </div>
     </div>
    </div>
  );
};

export default ServiceHeader;
