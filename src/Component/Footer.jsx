import React from "react";
import logo from "../assets/technogripper-logo.png";
import SubFooter from "./Home Component/SubFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="container mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 lg:px-16 px-5 font-Instrument mb-9">
        <div className="">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
            <div className="logo">
              <img src={logo} className="w-[100px]" alt="" />
            </div>
          </Link>
          <div className="mb-3">
            <p>
              Our Enterprise Solution Development Company is a leading
              technology company specializing in the development of
              enterprise-level solutions.
            </p>
          </div>
          <div className="mb-3">
            <p>
              <span>Mon - Fri:</span> 12:00 PM - 08:00 PM
            </p>
          </div>
          <div className="mb-3">
            <i>Closed on Weekends</i>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <ul className="">
              <li className="font-semibold mb-5">Company</li>
              <Link to={"about-us"} onClick={() => window.scrollTo(0, 0)}>
                <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[50%] cursor-pointer ">
                  About us
                </li>
              </Link>
              <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[50%] cursor-pointer ">
                Our Team
              </li>
              <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[50%] cursor-pointer ">
                Join us today
              </li>
              <Link to={"services"} onClick={() => window.scrollTo(0, 0)}>
                <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[80%] cursor-pointer ">
                  Explore Our Services
                </li>
              </Link>
              <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[0.5px] before:bg-black  hover:before:w-[50%] cursor-pointer ">
                Industries
              </li>
              <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[0.5px] before:bg-black  hover:before:w-[50%] cursor-pointer ">
                Technologies
              </li>
              <li className="mb-3 text-[15px] duration-200  relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[0.5px] before:bg-black  hover:before:w-[50%] cursor-pointer ">
                Insight
              </li>
              <Link to={"contact-us"} onClick={() => window.scrollTo(0, 0)}>
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[50%] cursor-pointer  ">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-semibold mb-5">Quick Links</li>
              <Link
                to={"enterprise-solutions"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[85%] cursor-pointer ">
                  Enterprise Solutions
                </li>
              </Link>
              <Link to={"crms-and-erps"} onClick={() => window.scrollTo(0, 0)}>
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[70%] cursor-pointer  ">
                  CRMs & ERPs
                </li>
              </Link>
              <Link to={"it-consulting"} onClick={() => window.scrollTo(0, 0)}>
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[60%] cursor-pointer ">
                  IT Consulting
                </li>
              </Link>
              <Link to={"mobile-apps"} onClick={() => window.scrollTo(0, 0)}>
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[60%] cursor-pointer  ">
                  Mobile Apps
                </li>
              </Link>
              <Link
                to={"product-engineering"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[0.5px] before:bg-black  hover:before:w-[85%] cursor-pointer  ">
                  Product Engineering
                </li>
              </Link>
              <Link
                to={"ai-and-automation"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[0.5px] before:bg-black  hover:before:w-[75%] cursor-pointer  ">
                  AI & Automation
                </li>
              </Link>
              <Link
                to={"ui-ux"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[75%] cursor-pointer  ">
                  UI & US Design
                </li>
              </Link>
              <Link
                to={"software-testing"}
                onClick={() => window.scrollTo(0, 0)}
              >
                <li className="mb-3 text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[80%] cursor-pointer  ">
                  Software Testing
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="ps-0 sm:ps-5">
          <h2 className="font-semibold mb-5">Say Goodbye To Emails!</h2>
          <p className="text-[16px] mb-4">
            Streamline communication and get the answers you need without the
            wait. Get started to initiate a chat with your Business Analyst now.
          </p>
          <a
            href="https://wa.me/919560850036"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-7 py-3 bg-sky-100 text-black rounded-lg transition-all font-semibold duration-200 hover:bg-[#0B4B4E] hover:text-white">
              Connect On Whatsapp
            </button>
          </a>
        </div>
      </section>
      <SubFooter />
    </>
  );
};

export default Footer;
