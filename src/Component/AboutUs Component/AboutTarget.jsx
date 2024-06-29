import React from "react";
import { PiUsersThin } from "react-icons/pi";
import { PiTrophyThin } from "react-icons/pi";
import { PiCrosshairSimpleThin } from "react-icons/pi";
const targetCategories = [
  {
    icon: <PiUsersThin />,
    title: "Integrate Emerging Technologies",
    description:
      "Seamlessly incorporate the latest advancements into your systems, ensuring future readiness and staying ahead of the curve in a rapidly evolving tech landscape.",
  },
  {
    icon: <PiTrophyThin />,
    title: "Easing current & creating new processes",
    description:
      "Streamline existing operations while innovating new workflows, optimizing efficiency, and empowering your organization to adapt and thrive in dynamic business environments.",
  },
  {
    icon: <PiCrosshairSimpleThin />,
    title: "Deliver more values to end customers",
    description:
      "Elevate customer experiences through tailored solutions that anticipate needs, drive engagement, and foster long-term loyalty, ultimately enhancing your brand reputation and bottom line.",
  },
];
const AboutTarget = () => {
  return (
    <section className="AboutTarget w-full mx-auto bg-gradient-to-l from-[#FAF7EF] to-[#f4f6fc] font-Instrument  mb-16 sm:px-16 sm:py-16 px-5 py-5">
      <div className="mb-8 xl:px-4">
        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl  text-2xl font-semibold text-center mb-5 xl:leading-[70px]">
          Our target with & for you
        </h2>
        <p className="text-[18px] text-center">
          We aim to collaborate closely with you, aligning our efforts to your
          specific goals and aspirations. By understanding your unique
          challenges and opportunities, we tailor our solutions to drive mutual
          success and lasting partnerships.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-7">
        {targetCategories.map((item, index) => (
          <div
            className="flex flex-col gap-y-3 border px-7 py-7 rounded-2xl bg-white"
            key={index}
          >
            <div className="text-6xl text-[#1a8489]">{item.icon}</div>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-[17px]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTarget;
