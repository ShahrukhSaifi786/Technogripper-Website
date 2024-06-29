import React from "react";
import CountUp from "react-countup";
import technogripperMission from "./image/technogripper-mission.png";
const OurMission = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto  mb-16 border-t-2"></div>
      <section className="OurMission container mx-auto lg:px-16 px-3 mb-16 pt-2">
        {/* OurMision */}
        <div className="flex lg:flex-row flex-col gap-x-10 mb-">
          <div className="lg:basis-[35%] basis-full bg-[#1a8489db] flex items-center justify-center py-6 rounded-lg overflow-hidden">
            <img src={technogripperMission} className="" alt="" />
          </div>
          <div className="lg:basis-[65%] basis-full flex flex-col gap-y-7 mt-3">
            <div>
              <div className="mb-3">
                <h1 className="text-3xl font-semibold">Our mission</h1>
              </div>
              <div>
                <p className="text-[18px]">
                  Our mission is to assist businesses in reaching their goals by
                  offering all-inclusive and cutting-edge solutions. We are
                  aware of the problems and wants of our customers, and we offer
                  practical, cost-effective solutions. These remedies could
                  include tech-based services, including data management, cloud
                  computing, business process automation, and software
                  development.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-3">
                <h1 className="text-3xl font-semibold">Our vision</h1>
              </div>
              <div>
                <p className="text-[18px]">
                  By offering cutting-edge, long-lasting, and client-centred
                  solutions that help businesses expand and accomplish their
                  objectives, our ambition is to become a leader in the sector.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* CountUP */}
        <div className="grid md:grid-cols-2 grid-cols-1  px-4 py-6 gap-6 ">
        <div className="flex justify-between gap-4 ">
          <div className="border-l-[3px] border-l-[#217b80] ps-5">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-black ">
              <CountUp start={1} end={9} duration={3} />{" "}
            </h2>
            <p className="mt-1 text-black text-xl font-semibold">
              Years experiences
            </p>
          </div>
          <div className="border-l-[3px] border-l-[#217b80] ps-5">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-black">
              <CountUp start={1} end={400} duration={3} />{" "} +
            </h2>
            <p className="mt-1 text-black text-xl font-semibold">
            Happy customers
            </p>
          </div>
        </div>
        <div className="flex md:justify-center">
          <div className="border-l-[3px] border-l-[#217b80] ps-5">
            <h2 className="lg:text-5xl md:text-4xl text-2xl font-semibold text-black">
              <CountUp start={1} end={650} duration={3} />{" "} +
            </h2>
            <p className="mt-1 text-black text-xl font-semibold">
            Project completed
            </p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default OurMission;
