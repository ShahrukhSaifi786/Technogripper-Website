import React from "react";
import ScalableSolutionItem from "./ScalableSolutionItem";
import { ScalableSolutionCategories } from "./ScalableSolutionConstans";

const ScalableSolution = () => {
  return (
    <section className="Scalable-Solution bg-gradient-to-l from-[#FAF7EF] to-[#f4f6fc] font-Instrument mb-9 py-10">
      <div className="container mx-auto xl:px-16">
        <div className="text-center py-10 mb-4">
          <div className="px-5 py-[6px] text-green-700 bg-sky-100 font-semibold inline-block mb-3">
            HOW WE DO
          </div>
          <h3 className="sm:text-4xl text-2xl  font-bold mb-5 ">
            Unlock Growth with Scalable Solutions
          </h3>
          <p className="text-[17px] px-1">
            Our team of experts builds custom applications that power your
            business and drive results.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 px-5">
          {ScalableSolutionCategories.map((item, index) =>
            item.categories === "Scalable Solution" ? (
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
    </section>
  );
};

export default ScalableSolution;
