import React from "react";
import { GiHeadphones } from "react-icons/gi";
import { PiUsersThreeThin } from "react-icons/pi";
import { PiRocketThin } from "react-icons/pi";
import { PiCrownThin } from "react-icons/pi";
import { PiPiggyBankThin } from "react-icons/pi";
const iconCategories = [
  {
    title: "Enterprise Solutions",
    icon: <GiHeadphones />,
  },
  {
    title: "CRMs & ERPs",
    icon: <PiUsersThreeThin />,
  },
  {
    title: "Mobile Apps",
    icon: <PiRocketThin />,
  },
  {
    title: "Product Engineering",
    icon: <PiCrownThin />,
  },
  {
    title: "UI/UX Design",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "Software Testing",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "IT Consulting",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "Maintainence",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "App Upgrades",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "Rest APIs",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "Application Prototyping",
    icon: <PiPiggyBankThin />,
  },
  {
    title: "Custom WebApps",
    icon: <PiPiggyBankThin />,
  },
];

const ServiceIcons = () => {
  return (
    <section className="ServiceIcons container mx-auto xl:px-24 px-5 mb-16 font-Instrument  py-4">
      <div className="mb-10">
        <h2 className="text-center font-semibold md:text-5xl sm:text-4xl text-3xl">
          What else, we can do
        </h2>
      </div>
      <div className="grid xl:grid-cols-5 grid-cols-3 gap-x-5 gap-y-6  px-2 mb-14 ">
        {iconCategories.map((icon, index) => (
          <div className="" key={index}>
            <div className="text-4xl mb-3">{icon.icon}</div>
            <p className="text-xl font-semibold">{icon.title}</p>
          </div>
        ))}
      </div>
      {/* CTA Block */}
      <div className="border bg-gradient-to-l to-[#231a87] from-[#e13789] px-5 py-8 flex justify-between md:flex-row flex-col gap-y-5 items-center font-Instrument rounded-md">
        <div>
          <p className="xl:text-3xl text-xl text-white text-center md:text-start font-bold">
            Ready to take the next step, Lets discuss your project.
          </p>
        </div>
        <div className="">
          <button className="xl:px-8 px-5 xl:py-3 py-2 text-xs bg-white text-black transition-all duration-200 hover:bg-black hover:text-white font-semibold rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceIcons;
