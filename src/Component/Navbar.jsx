import React, { useState } from "react";
import technoGripperLogo from "../assets/technogripper-logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { PiCloudArrowUpThin } from "react-icons/pi";
import { PiUsersThreeThin } from "react-icons/pi";
import { PiDeviceMobileThin } from "react-icons/pi";
import { SiIbmcloud } from "react-icons/si";
import { PiDesktopTowerThin } from "react-icons/pi";
import { PiCodeBlockThin } from "react-icons/pi";
import { PiIntersectSquareThin } from "react-icons/pi";
import { PiIntersectThreeThin } from "react-icons/pi";
import { PiTabsThin } from "react-icons/pi";
import { PiDatabaseThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";
import { PiPhoneCallThin } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
const headerData = [
  {
    title: "Enterprise Solutions",
    icon: <PiCloudArrowUpThin />,
    categories: "Scalable Solution",
    path: "enterprise-solutions",
  },
  {
    title: "CRMs & ERPs",
    icon: <PiUsersThreeThin />,
    categories: "Scalable Solution",
    path: "crms-and-erps",
  },
  {
    title: "Mobile Apps",
    icon: <PiDeviceMobileThin />,
    categories: "Scalable Solution",
    path: "mobile-apps",
  },
  {
    title: "Product Engineering",
    icon: <PiDeviceMobileThin />,
    categories: "Scalable Solution",
    path: "product-engineering",
  },
  {
    title: "UI/UX Design",
    icon: <PiDeviceMobileThin />,
    categories: "Scalable Solution",
    path: "ui-ux",
  },
  {
    title: "Software Development",
    icon: <PiDeviceMobileThin />,
    categories: "Scalable Solution",
    path: "software-development",
  },

  {
    title: "IT Consulting",
    icon: <SiIbmcloud />,
    categories: "Scalable Solution",
    path: "it-consulting",
  },
  {
    title: "Software Testing",
    icon: <PiCloudArrowUpThin />,
    categories: "Scalable Solution",
    path: "software-testing",
  },
  {
    title: "Applications Maintenance",
    icon: <SiIbmcloud />,
    categories: "Scalable Solution",
    path: "application-maintenance",
  },

  {
    title: "AI & Automation",
    icon: <PiDesktopTowerThin />,
    categories: "Innovative  Solution",
    path: "ai-and-automation",
  },
  {
    title: "Blockchain",
    icon: <PiCodeBlockThin />,
    categories: "Innovative  Solution",
    path: "blockchain",
  },

  {
    title: "Machine Learning",
    icon: <PiIntersectSquareThin />,
    categories: "Innovative  Solution",
    path: "machine-learning",
  },
  {
    title: "Internet Of Things",
    icon: <PiIntersectThreeThin />,
    categories: "Innovative  Solution",
    path: "internet-of-things",
  },
  {
    title: "Extended Reality (AR/VR)",
    icon: <PiTabsThin />,
    categories: "Innovative  Solution",
    path: "extend-reality",
  },
  {
    title: "Data Analytics",
    icon: <PiDatabaseThin />,
    categories: "Innovative  Solution",
    path: "data-analysis",
  },
];
const Navbar = () => {
  // const [toggle, setToggle] = useState(true);
  const [navMenu, setNavMenu] = useState(true);
  const [activeServices, setActiveServices] = useState(true);
  const [activeIndustries, setActiveIndustries] = useState(true);
  const [bigMenu, setBigMenu] = useState(true);
  return (
    <>
      <header className="border-b-2 font-Instrument sticky top-0 left-0 bg-white z-50 px-5">
        {/* Small device */}
        <nav
          className={`lg:hidden block absolute top-0 z-[100] left-0 w-full bg-white  px-3 py-5 transition-all duration-300 ease-linear ${
            navMenu
              ? "invisible opacity-0 translate-y-0 h-0"
              : "visible opacity-100 translate-y-2 h-screen"
          }`}
        >
          <div className="logo flex justify-between items-center mb-4">
            <Link
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
                setNavMenu(!navMenu);
              }}
            >
              <img
                src={technoGripperLogo}
                className="w-[100px] transition-all duration-200"
                alt=""
              />
            </Link>
            <div>
              <MdClose
                className="text-5xl active:transition-all active:duration-300 active:rotate-[180deg] cursor-pointer"
                onClick={() => setNavMenu(!navMenu)}
              />
            </div>
          </div>
          {/* Menu */}
          <div className="menu-icon px-4 font-Instrument">
            <ul className=" ">
              <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                <li className="flex items-center gap-x-1 mb-5 group cursor-pointer ">
                  <p className="text-2xl font-semibold">Home</p>{" "}
                  <BsChevronRight className="text-[19px] transition-all duration-200 group-active:rotate-[90deg]" />
                </li>
              </Link>
              <li
                className=" group cursor-pointer relative "
                onClick={() => setActiveServices(!activeServices)}
              >
                <div className="flex items-center gap-x-1 mb-5">
                  <p className="text-2xl font-semibold">Services</p>{" "}
                  <BsChevronRight
                    className={`text-[19px] transition-all duration-200 ${
                      activeServices ? "rotate-0" : "rotate-[90deg]"
                    }`}
                  />
                </div>
                {/* SubMenu */}
                <div
                  className={`bg-white w-full ${
                    activeServices
                      ? "hidden  opacity-0"
                      : "h-[300px] opacity-100 block"
                  } overflow-auto transition-all duration-300 
                  }`}
                >
                  <div className="px-4">
                    <h2 className="text-2xl font-semibold my-4">Innovate</h2>
                    <div className="xl:px-5 px-2  mb-5">
                      {headerData.map((item, index) =>
                        item.categories === "Innovative  Solution" ? (
                          <Link
                            to={`/${item.path}`}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              setNavMenu(!navMenu);
                            }}
                            key={index}
                          >
                            <div className="flex gap-x-4 items-center group transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-2 py-4 rounded-lg">
                              <div className="text-3xl">{item.icon}</div>
                              <h2 className="font-semibold relative text-[16px] before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full cursor-pointer">
                                {item.title}
                              </h2>
                            </div>
                          </Link>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold my-4">
                      Acceralate & Assure
                    </h2>
                    <div className="xl:px-5 px-2 group-1  mb-5">
                      {headerData.map((item, index) =>
                        item.categories === "Scalable Solution" ? (
                          <Link
                            to={`/${item.path}`}
                            onClick={() => {
                              window.scrollTo(0, 0);
                              setNavMenu(!navMenu);
                            }}
                            key={index}
                          >
                            <div
                              key={index}
                              className="flex xl:gap-x-4 gap-x-2  items-center group transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-2 py-4 rounded-lg"
                            >
                              <div className="xl:text-3xl text-2xl">
                                {item.icon}
                              </div>
                              <h2 className="font-semibold relative text-[16px] before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full cursor-pointer">
                                {item.title}
                              </h2>
                            </div>
                          </Link>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                  <div className="py-3 px-5">
                    <div className="bg-gradient-to-l to-[#f4f6fc] from-[#FAF7EF] px-5  py-7 rounded-lg">
                      <h2 className="text-xl font-semibold mb-3">
                        Explore All Services
                      </h2>
                      <p className="mb-3">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </p>
                      <Link
                        to={"services"}
                        onClick={() =>{ 
                          window.scrollTo(0, 0)
                          setNavMenu(!navMenu);
                        }}
                      >
                        <button className="px-5 mb-4  py-2 bg-[#217b80] text-white rounded-lg transition-[background] font-semibold duration-200 hover:bg-[#0B4B4E]">
                          Explore Now
                        </button>
                      </Link>
                      <div className="mail flex gap-x-3 items-center mb-3">
                        <div className="">
                          <CiMail className="text-xl" />
                        </div>
                        <p className="cursor-pointer text-[17px]">
                          hello@technogripper.net
                        </p>
                      </div>
                      <div className="call flex gap-x-3 items-center mb-5">
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#217b80] text-white">
                          <PiPhoneCallThin className="text-xl text-white" />
                        </div>
                        <p className="cursor-pointer text-[17px]">
                          +91 956 085 0036
                        </p>
                      </div>
                      <div className="socialIcons flex justify-between">
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-black transition-all duration-200 hover:bg-[#217b80] hover:text-white cursor-pointer">
                          <FaFacebookF className="text-xl" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-black transition-all duration-200 hover:bg-[#217b80] hover:text-white cursor-pointer">
                          <FaLinkedinIn className="text-xl" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-black transition-all duration-200 hover:bg-[#217b80] hover:text-white cursor-pointer">
                          <FaTwitter className="text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <Link
                to={"/about-us"}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setNavMenu(!navMenu);
                }}
              >
                <li className="flex items-center gap-x-1 mb-5 group cursor-pointer ">
                  <p className="text-2xl font-semibold">Company</p>{" "}
                  <BsChevronRight className="text-[19px] transition-all duration-200 group-active:rotate-[90deg]" />
                </li>
              </Link>
              <li
                className=" group cursor-pointer relative "
                onClick={() => setActiveIndustries(!activeIndustries)}
              >
                <div className="flex items-center gap-x-1 mb-5">
                  <p className="text-2xl font-semibold">Industries</p>{" "}
                  <BsChevronRight
                    className={`text-[19px] transition-all duration-200 ${
                      activeIndustries ? "rotate-0" : "rotate-[90deg]"
                    }`}
                  />
                </div>
                {/* SubMenu */}
                <div
                  className={` bg-white w-full ${
                    activeIndustries
                      ? "hidden opacity-0"
                      : "h-full opacity-100 block"
                  } transition-all duration-300 `}
                >
                  <div className="w-[50%] transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-5 py-4 rounded-lg">
                    <Link
                      to={"education-and-training"}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setNavMenu(!navMenu);
                      }}
                    >
                      <h2 className="inline-block font-semibold relative before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full cursor-pointer">
                        Education & Training
                      </h2>
                    </Link>
                  </div>
                  <div className="w-[50%] transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-5 py-4 rounded-lg">
                    <Link
                      to={"healthcare-and-pharmaceutical"}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        setNavMenu(!navMenu);
                      }}
                    >
                      <h2 className="inline-block font-semibold relative before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full cursor-pointer">
                        Healthcare & Pharmaceuticals
                      </h2>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-x-1 mb-5 group cursor-pointer ">
                <p className="text-2xl font-semibold">Insights</p>{" "}
                <BsChevronRight className="text-[19px] transition-all duration-200 group-active:rotate-[90deg]" />
              </li>
            </ul>
          </div>
        </nav>

        <div className="max-w-[1350px]  mx-auto flex justify-between  items-center relative">
          <Link to={"/"}>
            <div className="logo">
              <img src={technoGripperLogo} className="w-[80px]" alt="" />
            </div>
          </Link>
          {/* Big Screen */}
          <nav className="hidden lg:block">
            <ul className="flex">
              <li className="p-4">
                <NavLink to={"/"}>
                  <p className="font-semibold relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[3px] before:bg-[#217b80] hover:before:w-full cursor-pointer">
                    Home
                  </p>
                </NavLink>
              </li>
              <li className="group p-4">
                <NavLink to={"/services"}>
                  <p className="font-semibold relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[3px] before:bg-[#217b80] group-hover:before:w-full cursor-pointer">
                    Services
                  </p>
                </NavLink>
                {/* SubMenu */}
                <div
                  className={`absolute shadow-xl rounded-xl  bg-white w-full top-[64px] left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 flex justify-between gap-x-4 translate-y-0 group-hover:translate-y-2 
                  }`}
                >
                  <div className="basis-[70%] px-4">
                    <h2 className="text-2xl font-semibold my-4">Innovate</h2>
                    <div className="xl:px-5 px-2 grid grid-cols-3 xl:gap-x-6 gap-x-0 gap-y-5 group-1  mb-5">
                      {headerData.map((item, index) =>
                        item.categories === "Innovative  Solution" ? (
                          <Link
                            to={item.path}
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                          >
                            <div
                              key={index}
                              className="flex gap-x-4 items-center group transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-2 py-4 rounded-lg"
                            >
                              <div className="text-3xl">{item.icon}</div>
                              <h2 className="font-semibold relative xl:text-[16px] text-xs before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full cursor-pointer">
                                {item.title}
                              </h2>
                            </div>
                          </Link>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                    <h2 className="text-2xl font-semibold my-4">
                      Acceralate & Assure
                    </h2>
                    <div className="xl:px-5 px-2 grid grid-cols-3 xl:gap-x-6 gap-y-5 gap-x-0 group-1  mb-5">
                      {headerData.map((item, index) =>
                        item.categories === "Scalable Solution" ? (
                          <Link
                            to={item.path}
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            <div
                              key={index}
                              className="flex xl:gap-x-4 gap-x-2  items-center group transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-2 py-4 rounded-lg"
                            >
                              <div className="xl:text-3xl text-2xl">
                                {item.icon}
                              </div>
                              <h2 className="font-semibold relative xl:text-[16px] text-xs before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-full cursor-pointer">
                                {item.title}
                              </h2>
                            </div>
                          </Link>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                  <div className="basis-[25%] py-3 px-5">
                    <div className="bg-gradient-to-l to-[#f4f6fc] from-[#FAF7EF] px-5  py-7 rounded-lg">
                      <h2 className="text-xl font-semibold mb-3">
                        Explore All Services
                      </h2>
                      <p className="mb-3">
                        Unlocking the Full Spectrum of IT Solutions and Business
                        Consulting for your needs
                      </p>
                     <Link to={'services'} onClick={()=>window.scrollTo(0,0)}>
                     <button className="px-5 mb-4  py-2 bg-[#217b80] text-white rounded-lg transition-[background] font-semibold duration-200 hover:bg-[#0B4B4E]">
                        Explore Now
                      </button> 
                     </Link>
                      <div className="mail flex gap-x-3 items-center mb-3">
                        <div className="">
                          <CiMail className="text-xl" />
                        </div>
                        <p className="cursor-pointer text-[17px]">
                          hello@technogripper.net
                        </p>
                      </div>
                      <div className="call flex gap-x-3 items-center mb-5">
                        <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#217b80] text-white">
                          <PiPhoneCallThin className="text-xl text-white" />
                        </div>
                        <p className="cursor-pointer text-[17px]">
                          +91 956 085 0036
                        </p>
                      </div>
                      <div className="socialIcons flex justify-between">
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-black transition-all duration-200 hover:bg-[#217b80] hover:text-white cursor-pointer">
                          <FaFacebookF className="text-xl" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-black transition-all duration-200 hover:bg-[#217b80] hover:text-white cursor-pointer">
                          <FaLinkedinIn className="text-xl" />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white text-black transition-all duration-200 hover:bg-[#217b80] hover:text-white cursor-pointer">
                          <FaTwitter className="text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className=" p-4">
                <NavLink to={"/about-us"}>
                  <p className="font-semibold relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[3px] before:bg-[#217b80] hover:before:w-full cursor-pointer">
                    Company
                  </p>
                </NavLink>
              </li>
              <li className="p-4 group relative">
                <NavLink to={""}>
                  <p className="font-semibold relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[3px] before:bg-[#217b80] group-hover:before:w-full cursor-pointer">
                    Industries
                  </p>
                </NavLink>
                <div
                  className={`absolute shadow-xl rounded-xl bg-white w-[350px] px-9 py-6 top-[50px] left-0 invisible opacity-0
                   group-hover:visible group-hover:opacity-100 group-hover:transition-all group-hover:duration-300 translate-y-0 group-hover:translate-y-2 `}
                >
                  <div className="  transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-5 py-4 rounded-lg">
                    <Link
                      to={"education-and-training"}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      <h2 className="font-semibold relative before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-[80%] cursor-pointer">
                        Education & Training
                      </h2>
                    </Link>
                  </div>
                  <div className="  transition-all duration-200 hover:bg-gradient-to-l hover:from-[#FAF7EF] hover:to-[#f4f6fc] px-5 py-4 rounded-lg">
                    <Link to={"healthcare-and-pharmaceutical"}>
                      <h2 className="font-semibold relative before:content-[''] before:transition-all before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[1px] before:bg-black hover:before:w-[95%] cursor-pointer">
                        Healthcare & Pharmaceuticals
                      </h2>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="p-4">
                <NavLink to={""}>
                  <p className="font-semibold relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[3px] before:bg-[#217b80] hover:before:w-full cursor-pointer">
                    Technologies
                  </p>
                </NavLink>
              </li>
              <li className="p-4">
                <NavLink to={""}>
                  <p className="font-semibold relative before:content-[''] before:transition-all duration-300 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[3px] before:bg-[#217b80] hover:before:w-full cursor-pointer">
                    Insights
                  </p>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="lg:flex items-center gap-4 font-Instrument hidden">
            <div className="xl:flex items-center gap-3 bg-sky-100 px-4 py-2 rounded-[40px] hidden">
              <div className="w-[30px] h-[30px] bg-white flex items-center justify-center rounded-[50%]">
                <FiPhoneCall className="text-green-700" />
              </div>
              <span className="font-semibold text-[17px]">
                +91 956 085 0036
              </span>
            </div>
            <div>
              <button className="px-7  py-3 bg-[#217b80] text-white rounded-lg transition-[background] font-semibold duration-200 hover:bg-[#0B4B4E]">
                <Link to={"contact-us"}> Contact</Link>
              </button>
            </div>
          </div>
          <div className="bar lg:hidden block">
            <HiBars3
              className="text-5xl cursor-pointer"
              onClick={() => setNavMenu(!navMenu)}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
