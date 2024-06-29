import React, { useState } from "react";
import { PiPlusThin } from "react-icons/pi";
import { PiMinusThin } from "react-icons/pi";
import Accordian from "./Accordian";

const EnterpriseSolutionFAQ = ({ faqArray , orderedModify }) => {
  return (
    <section className="EnterpriseSolutionFAQ bg-gradient-to-l from-[#FAF7EF] to-[#f4f6fc] font-Instrument mb-9 py-10">
      <div className="container mx-auto flex xl:flex-row xl:justify-between flex-col gap-y-7 gap-x-7 xl:px-16 px-5">
        <div className={`xl:basis-[60%] basis-full shadow-lg rounded-xl bg-white  sm:px-10 sm:py-10  px-5 py-5 ${orderedModify ? 'order-2':''}`}>
          <h3 className="sm:text-3xl text-2xl font-semibold mb-5">
            Frequently Asked Questions
          </h3>
          <div>
            {faqArray.map((item, index) => (
              <Accordian
                key={index}
                question={item.question}
                answer={item.answer}
                value={item.value}
              />
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div className={`xl:basis-[30%] basis-full xl:px-0 ${orderedModify ? 'order-1':''}`}>
          <div className="bg-white px-6 py-6 rounded-xl shadow-md">
            <h3 className="mb-5 font-bold text-black text-2xl">
              Ask Your Question
            </h3>
            <p className="mb-6">Ask Anything, We're Here to Help</p>
            <form action="">
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Your Mobile
                </label>
                <input
                  type="number"
                  className="border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Your Query
                </label>
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="5"
                  className="border-[1.5px] rounded-md focus:border-[#217b80] outline-none p-3"
                ></textarea>
              </div>
              <div>
                <button className="w-full py-3 bg-[#217b80] text-white transition-all font-semibold duration-200 hover:bg-[#0B4B4E] rounded-lg">
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutionFAQ;
