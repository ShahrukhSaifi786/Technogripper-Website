import React from "react";
import aboutImg from "./image/about-third7.png";

const EnterpriseSolutionAbout = ({ AboutData, aboutDescriptions }) => {
  return (
    <section className="EnterpriseSolution-About xl:px-16 px-5 py-16 font-Instrument mb-3 ">
      <div className="container mx-auto">
        {/* Image with Text Section */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:px-7 lg:py-5 mb-8">
          <div className="order-1 lg:order-2 ">
            <div className="px-5 py-[5px] text-gray-600 bg-gray-300 text-[13px] font-semibold inline-block mb-5">
              WHY CHOOSE US
            </div>
            <h2
              className={`lg:text-[42px] sm:text-2xl text-xl lg:leading-[1.2] font-semibold mb-4`}
            >
              Drive Growth and Efficiency: Your Trusted Partner in {aboutDescriptions.Heading}
            </h2>
            <p
              className={`mb-5 text-[16px]  ${
                aboutDescriptions.paragraphShowOrNot ? "" : "border-b-2 pb-7"
              }`}
            >
              {aboutDescriptions.paragraph1}
            </p>
            {aboutDescriptions.paragraphShowOrNot ? (
              <p className="mb-5 text-[16px] border-b-2 pb-7">
                {aboutDescriptions.paragraph2}
              </p>
            ) : (
              ""
            )}
            <div className="flex flex-col gap-y-7 mb-7">
              {AboutData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center sm:gap-x-5 gap-x-3"
                >
                  <div className="sm:text-4xl text-3xl">{item.icon}</div>
                  <div>
                    <h2 className="sm:text-2xl text-xl font-semibold">
                      {item.heading}
                    </h2>
                    <p className="sm:text-[17px] text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <button className="px-7 py-3 border-black border font-semibold rounded-md hover:transition-all hover:duration-200 hover:bg-[#217b80] hover:text-white hover:border-white ">
                {aboutDescriptions.btn}
              </button>
            </div>
          </div>
          <div className=" flex lg:justify-end md:justify-center justify-start items-center  order-2 lg:order-1 ">
            <div>
              <img src={aboutImg} className="rounded-2xl" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutionAbout;
