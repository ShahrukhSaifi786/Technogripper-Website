import React from "react";
import bgteam from "../AboutUs Component/image/bg-team.png";
const AboutHeader = () => {
  return (
    <div className=" bg-gradient-to-b to-[#fff] from-[#e5eaff] xl:px-8 px-3  py-16 mb-3 font-Instrument">
      <div className="container mx-auto">
        <div className="mb-8 xl:px-4">
          <h2 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold text-center mb-6 xl:leading-[70px]">
            About Us - TechnoGripper Solutions
          </h2>
          <p className="text-[18px] text-center">
            Learn about our team's unwavering dedication to creating positive
            change through innovation and collaboration.
          </p>
        </div>
        <div className="max-w-[1400px] mx-auto bg-white rounded-tr-3xl rounded-tl-3xl  overflow-hidden ">
          <div className="grid lg:grid-cols-2 grid-cols-1 w-full mb-14">
            <div className=" px-5 py-5 sm:px-16 sm:py-16">
              <div className="px-3 py-[2px] text-[#1a8489] bg-[#e5eaff] font-bold inline-block mb-3 rounded-md">
                About Us
              </div>
              <p className="sm:text-4xl text-2xl leading-[40px]   sm:leading-[70px]  font-semibold">
                India's Leading <br className="hidden sm:block" /> Enterprise
                Solution <br className="hidden sm:block" /> Development Company
              </p>
            </div>
            <div className="h-full">
              <img
                src={bgteam}
                className="w-full h-full  object-cover"
                alt=""
              />
            </div>
          </div>
          <div className="text-center flex flex-col gap-y-5 px-1">
            <div>
              <h2 className="sm:text-3xl text-2xl font-semibold ">
                Our Story starts by Empowering Businesses through Innovative
                Software Solutions
              </h2>
            </div>
            <div>
              <p>
                Enterprises must implement cutting-edge technological solutions
                to maintain competitiveness in today’s fast-paced and
                continuously changing business. Our corporate solution
                development firm is dedicated to assisting companies of all
                sizes in utilising cutting-edge technology to improve
                operations, increase efficiency, and foster growth.
              </p>
            </div>
            <div>
              <p>
                Our team of skilled programmers, designers, and engineers
                specialises in creating unique enterprise solutions suited to
                your company’s requirements. In order to comprehend your company
                goals, pinpoint your pain areas, and create a solution that
                solves these problems, we work directly with you.
              </p>
            </div>
            <div>
              <p>
                Our enterprise solutions may assist you in achieving your
                objectives whether you require a new e-commerce platform,
                business intelligence solution, or corporate software
                application. Our collaborative development process ensures that
                your solution is created promptly and affordably.
              </p>
            </div>
            <div>
              <p>
                We provide support and maintenance services in addition to our
                custom enterprise solutions to make sure your solution keeps up
                with your company’s demands. With our assistance, you can
                concentrate on expanding your company while feeling secure in
                the functionality of your corporate solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeader;
