import React from "react";
import { PiFingerprintThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";
import { PiMoneyThin } from "react-icons/pi";
const categories = [
  {
    name: "medal",
    icon: <PiMedalThin />,
    title: "Innovative Solutions",
    description:
      "The first step is to pinpoint the issue that needs to be addressed by an enterprise solution for your firm.",
  },
  {
    name: "moneybil",
    icon: <PiMoneyThin />,
    title: "Strategy Thinking",
    description:
      "Analyse the market, competitors, and end-user requirements to determine the most efficient strategy for accomplishing corporate goals.",
  },
  {
    name: "fingerPrint",
    icon: <PiFingerprintThin />,
    title: "Affordable & Quality Product",
    description:
      "Experience premium business solutions without breaking the bank – we provide cost-effective, high-quality solutions.",
  },
];

const MedalMoneyBill = () => {
  return (
    <section className="medal-money container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center xl:px-16 px-5 gap-x-5 mb-9 ">
      {categories.map((item, index) => (
        <div className="py-3 px-5 md:px-3" key={index}>
          <div className="font-black text-5xl mb-3">{item.icon}</div>
          <h2 className="font-semibold sm:text-xl md:text-2xl mb-2  ">
            {item.title}
          </h2>
          <p className="text-gray-500">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default MedalMoneyBill;
