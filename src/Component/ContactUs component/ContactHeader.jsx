import React from "react";
// import { PiFacebookLogoThin } from "react-icons/pi";
// import { PiLinkedinLogoThin } from "react-icons/pi";
// import { PiTwitterLogoThin } from "react-icons/pi";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const ContactHeader = () => {
  return (
    <section className="ContactHeader bg-gradient-to-b to-[#fff] from-[#e5eaff] xl:px-16 px-2 py-8 font-Instrument mb-3">
      <div className="container mx-auto ">
        <div className="flex justify-between lg:flex-row flex-col xl:gap-x-[200px] gap-y-7 lg:gap-x-[100px] lg:px-5 lg:py-5">
          <div className=" lg:basis-[50%] basis-full px-3 py-3">
            <div className="px-3 py-[2px] text-[#1a8489] bg-[#e5eaff] font-bold inline-block mb-5 rounded-md">
              About Us
            </div>
            <div className="mb-5">
              <h2 className="md:text-5xl xl:text-6xl  text-4xl  font-semibold">
                We’d love to help
              </h2>
            </div>
            <div className="mb-6 ">
              <p className="text-[17px]">
                Get in touch with our expert team today to discuss your
                enterprise needs and discover how our solutions can propel your
                business forward. Whether you're seeking consultation,
                customization, or support, we're here to help you achieve your
                goals. Reach out now to start the conversation!
              </p>
            </div>
            {/* social Icons */}
            <div className="socialIcons flex gap-6 mb-9">
              <div className="w-[55px] h-[55px] bg-white text-2xl group transition-all duration-200 flex items-center justify-center rounded-full hover:bg-[#1a8489] cursor-pointer">
                <FaFacebookF className="group-hover:text-white group-hover:transition-all duration-200" />
              </div>
              <div className="w-[55px] h-[55px] bg-white text-2xl group transition-all duration-200 flex items-center justify-center rounded-full hover:bg-[#1a8489] cursor-pointer">
                <FaLinkedinIn className="group-hover:text-white group-hover:transition-all duration-200" />
              </div>
              <div className="w-[55px] h-[55px] bg-white text-2xl group transition-all duration-200 flex items-center justify-center rounded-full hover:bg-[#1a8489] cursor-pointer">
                <FaTwitter className="group-hover:text-white group-hover:transition-all duration-200" />
              </div>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <div className="flex items-center sm:gap-x-6 gap-x-4 ">
                <div className="w-[50px] h-[50px] bg-[#1a8489] text-2xl flex items-center justify-center rounded-full ">
                  <FaPhone className="text-white " />
                </div>
                <div className="border-l-3 border h-[50px]"></div>
                <div className="">
                  <p className="sm:text-[16px] text-xs">+91 956 085 0036</p>
                </div>
              </div>
              <div className="flex items-center sm:gap-x-6 gap-x-4">
                <div className="w-[50px] h-[50px] bg-[#1a8489] text-2xl flex items-center justify-center rounded-full ">
                  <IoMdMail className="text-white " />
                </div>
                <div className="border-l-3 border h-[50px]"></div>
                <div className="">
                  <p className="sm:text-[16px] text-xs">
                    hello@technogripper.net
                  </p>
                </div>
              </div>
              <div className="flex items-center sm:gap-x-6 gap-x-4 ">
                <div className="w-[50px] h-[50px] bg-[#1a8489] text-2xl  flex items-center justify-center rounded-full ">
                  <FaLocationDot className="text-white " />
                </div>
                <div className="border-l-3 border h-[50px]"></div>
                <div className="">
                  <p className=" sm:text-[16px] text-xs leading-[1.2]">
                    B 04, UB, Tower 4, NX One, Noida Extension, <br /> Greater
                    Noida, Uttar Pradesh - 201301
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="lg:basis-[50%] basis-full flex lg:justify-end px-2 ">
            <div className="bg-white md:px-10 md:py-12 px-6 py-6 rounded-2xl lg:w-[90%] w-full shadow-md">
              <div className="flex gap-x-3 flex-wrap sm:flex-nowrap">
                <div className="w-full">
                  <label htmlFor="" className="mb-2 inline-block">
                    Your Good Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-[1.5px]  w-full mb-4 px-3 py-3 rounded-md focus:border-[#217b80] outline-none bg-[#f3f5f9]"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="" className="mb-2 inline-block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name=""
                    id=""
                    className="border-[1.5px]  w-full px-3 py-3 rounded-md focus:border-[#217b80] outline-none bg-[#f3f5f9]"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="border-[1.5px]  px-3 py-3 rounded-md focus:border-[#217b80] outline-none bg-[#f3f5f9]"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <select
                  id=""
                  className=" border-[1.5px] appearance-none  px-3 py-3 rounded-md outline-none bg-[#f3f5f9]"
                >
                  <option value="Enterprise Solution">
                    Wanted to discuss new project
                  </option>
                  <option value="Book free consultation">
                    Book free consultation
                  </option>
                  <option value="Looking for job">Looking for job</option>
                  <option value="Looking for Partnership">
                    Looking for Partnership
                  </option>
                </select>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Your Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="5"
                  className="border-[1.5px]  rounded-md focus:border-[#217b80] outline-none p-4 bg-[#f3f5f9]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button className="w-full py-3 bg-[#217b80] text-white transition-all font-semibold duration-200 hover:bg-[#0B4B4E] rounded-lg">
                  Arrange A Callback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
