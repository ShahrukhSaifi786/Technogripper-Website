import React from "react";
import { PiCheckThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";
const ContactUs = ({contactData}) => {
  return (
    <section className="Contact-us-Section w-full bg-gradient-to-tr from-[hsl(216,31%,41%)] to-[#5c4545] py-10 font-Instrument mb-14">
      <div className="container mx-auto flex xl:flex-row xl:justify-between flex-col gap-4 xl:px-16 px-5">
        <div className="xl:basis-[60%] basis-full sm:px-6">
          <div className="px-5 py-[6px] text-white bg-[#217b80]  inline-block mb-4 ">
            <p className="text-[14px] font-semibold">{contactData.btn}</p>
          </div>
          <div className="mb-6">
            <h2 className="text-white sm:text-5xl text-2xl  font-semibold sm:leading-[60px] leading-[30px]">
              {contactData.heading}
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-white text-[17px]">
              {contactData.paragraph}
            </p>
          </div>

          <div className="mb-5">
            <span className="text-[17px] text-white ">
              Here's what you can expect during your free consultation:
            </span>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div>
              <PiCheckThin className="text-white font-bold" />
            </div>
            <div>
              <p className="text-xs sm:text-xl text-white">
                <span className="font-semibold">
                  A friendly and patient conversation :{" "}
                </span>
                Our team is here to listen to your concerns and understand your
                unique needs. No tech-speak, just clear and concise
                communication.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div>
              <PiCheckThin className="text-white font-bold mb-3" />
            </div>
            <div>
              <p className="text-xs sm:text-xl text-white">
                <span className="font-semibold">Expert diagnosis : </span>
                We'll delve into the root cause of your problem, whether it's a
                slow internet connection, a malfunctioning software, or a
                security breach.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-3">
            <div>
              <PiCheckThin className="text-white font-bold" />
            </div>
            <div>
              <p className="text-xs sm:text-xl text-white">
                <span className="font-semibold">Tailored solutions : </span>
                We won't try to sell you a one-size-fits-all solution. We'll
                recommend personalized options based on your specific needs and
                budget.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-5">
            <div>
              <PiCheckThin className="text-white font-bold" />
            </div>
            <div>
              <p className="text-xs sm:text-xl  text-white">
                <span className="font-semibold">
                  No pressure, just valuable advice :{" "}
                </span>
                Even if you don't choose to work with us, you'll walk away with
                actionable insights and a clearer understanding of your IT
                situation.
              </p>
            </div>
          </div>
          <hr className="mb-3" />
          <div>
            <div className="flex items-center gap-x-2  mb-2 text-white">
              <CiMail className="text-2xl" />
              {/* <Link /> */}
              <p className="text-[17px]">hello@technogripper.net</p>
            </div>
            <div className="flex items-center gap-x-2  mb-2 text-white">
              <PiPhoneCallThin className="text-2xl" />
              {/* <Link /> */}
              <p className="text-[17px]">+91 956 085 0036</p>
            </div>
            <div className="flex items-center gap-x-2  mb-2 text-white">
              <CiLocationArrow1 className="text-2xl" />
              {/* <Link /> */}
              <p className="text-[17px]">
                B 04, UB, Tower 4, NX One, Noida Extension, <br /> Greater
                Noida, Uttar Pradesh - 201301
              </p>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="xl:basis-[30%] basis-full xl:px-0">
          <div className="bg-white px-6 py-6 rounded-xl">
            <h3 className="mb-5 font-semibold text-black text-2xl">
              Schedule a free consultation
            </h3>
            <p className="mb-6">
              Ready to ditch the tech headaches and get back to what you do
              best? Schedule your free consultation today! It'sa quick and easy
              way to get expert advice and peace of mind.
            </p>
            <form action="">
              <div className="flex gap-x-3 flex-wrap sm:flex-nowrap">
                <div className="w-full">
                  <label htmlFor="" className="mb-2 inline-block">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-[1.5px]  w-full mb-4 px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label htmlFor="" className="mb-2 inline-block">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-[1.5px]  w-full px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Company Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  Company/ Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="" className="mb-2">
                  How can we help you? <span className="text-red-500">*</span>
                </label>
                <select
                  id=""
                  className=" border-[1.5px]  px-2 py-2 rounded-md focus:border-[#217b80] outline-none"
                >
                  <option value="Enterprise Solution">
                    Enterprise Solution
                  </option>
                  <option value="Mobile Apps">Mobile Apps</option>
                  <option value="UI/UX Design">UI/US Design</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Software Testing">Software Testing</option>
                  <option value="Application Migration & Upgrades">
                    Application Migration & Upgrades
                  </option>
                  <option value="Product Engineering">
                    Product Engineering
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
                  className="border-[1.5px] rounded-md focus:border-[#217b80] outline-none p-3"
                ></textarea>
              </div>
              <div>
                <button className="w-full py-3 bg-[#217b80] text-white transition-all font-semibold duration-200 hover:bg-[#0B4B4E] rounded-lg">
                  Book Free Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
