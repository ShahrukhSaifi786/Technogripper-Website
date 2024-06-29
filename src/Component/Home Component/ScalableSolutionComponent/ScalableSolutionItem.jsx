import React from "react";
import { Link } from "react-router-dom";

const ScalableSolutionItem = ({ name, icon, discription, title, path }) => {
  return (
    <Link to={`/${path}`} onClick={() => window.scrollTo(0, 0)}>
      <div className="border text-center py-10 transition-all duration-150 bg-white hover:shadow-lg rounded-2xl px-2 cursor-pointer group h-full">
        <div className="flex font-semibold justify-center mb-5 text-5xl text-[#217b80]">
          {icon}
        </div>
        <h3 className="inline-block text-2xl font-semibold mb-2 relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1.5px] before:bg-black group-hover:before:w-full">
          {title}
        </h3>
        <p>{discription}</p>
      </div>
    </Link>
  );
};

export default ScalableSolutionItem;
