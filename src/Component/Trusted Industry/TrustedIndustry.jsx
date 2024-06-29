import React from "react";
import uclean from "./image/uclean.png";
import alphalogic from "./image/alphalogic.png";
import wtfup from "./image/wtfup.me.png";
import motherland from "./image/motherland.png";
import recity from "./image/recity.png";
import afflospark from "./image/afflospark.png";
import sirca from "./image/sirca.png";
import ginesys from "./image/ginesys.png";
import drishti from "./image/drishti-ias.png";
import batball from "./image/batball.png";
const images = [
  uclean,
  alphalogic,
  wtfup,
  motherland,
  recity,
  afflospark,
  sirca,
  ginesys,
  drishti,
  batball,
];
const TrustedIndustry = () => {
  return (
    <div className="container mx-auto mb-24 xl:px-16 ">
      <div className="text-center mb-8">
        <p className="font-bold text-2xl">
          Trusted by industry leaders all around the globe
        </p>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10  justify-items-center ">
        {images.map((item, index) => (
          <img src={item} className="w-[200px]" key={index}/>
        ))}
      </div>
    </div>
  );
};

export default TrustedIndustry;
