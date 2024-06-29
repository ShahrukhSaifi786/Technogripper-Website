import React from "react";
import { Link } from "react-router-dom";

const ViewTechnologyItem = ({ name, icon, path }) => {
  return (
    <Link to={path} onClick={() => window.scrollTo(0, 0)}>
      <div className="view-technology group font-Instrument">
        <div className="flex items-center gap-5 border px-3 py-4 rounded-xl bg-gray-200 transition-all duration-200  group-hover:bg-[#217b80] cursor-pointer">
          <div className="text-2xl font-bold text-black group-hover:translate-x-3 transition-all duration-200 group-hover:text-white">
            {icon}
          </div>
          <h3 className="sm:text-[20px] font-semibold group-hover:translate-x-3 transition-all duration-200 group-hover:text-white">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default ViewTechnologyItem;
