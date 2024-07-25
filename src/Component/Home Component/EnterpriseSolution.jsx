import React from "react";
import slider1 from "./image/slider1.png";
import { Link } from "react-router-dom";
const EnterpriseSolution = () => {
  return (
    <div className="container mx-auto flex xl:justify-between xl:flex-row xl:px-16 px-1 flex-col py-14 font-Instrument">
      <div className=" p-4 order-2 xl:order-1">
        <div>
          <p className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
            Enterprise Solution Development Company
          </p>
        </div>
        <p className="text-xl my-9">
          Building custom solutions that drive efficiency and growth. Let's
          build something amazing together.
        </p>
        <div >
          <Link
            to={"enterprise-solutions"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <button className=" px-7 mb-3  py-3 bg-[#217b80] text-white rounded-lg transition-[background] font-semibold duration-200 hover:bg-[#0B4B4E]">
              Explore More
            </button>
          </Link>
          <Link to={"contact-us"} onClick={window.scrollTo(0, 0)}>
            <button className="ms-4 px-7  py-3 bg-sky-100 text-black rounded-lg transition-[background] font-semibold duration-200 hover:bg-[#0B4B4E] hover:text-white">
              Contact{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="order-1 xl:order-2 p-5">
        <div className="xl:ps-5 w-full h-full">
          <img
            src={slider1}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EnterpriseSolution;
