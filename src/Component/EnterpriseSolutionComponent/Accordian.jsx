import React, { useState } from "react";
import { PiPlusThin } from "react-icons/pi";
import { PiMinusThin } from "react-icons/pi";

const Accordian = ({ question, answer,value }) => {
  const [activeQuestion, setActiveQuestion] = useState(value);
  return (
    <div className="">
      <div
        className={` flex justify-between  py-5 cursor-pointer ${activeQuestion ? 'border-b-0':'border-b'}`}
        onClick={() => setActiveQuestion(!activeQuestion)}
      >
        <h3 className={`sm:text-xl text-[15px] font-semibold `}>{question}</h3>
        {activeQuestion ? <PiMinusThin className="text-2xl hover:transition-all hover:duration-300 active:rotate-90"/> : <PiPlusThin className="text-2xl hover:transition-all hover:duration-300 active:rotate-90"/>}
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out text-slate-600 ${
          activeQuestion
            ? "grid-rows-[1fr] opacity-100 "
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordian;
