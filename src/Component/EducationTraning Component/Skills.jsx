import React from "react";
import industry from "./industry5.png";
const emergingTechnologies = [
  "Artificial Intelligence",
  "Extended Reality (AR/VR)",
  "Blockchain",
];
const webTechnologies = [
  "PHP",
  ".NET",
  "Node JS",
  "Sail JS",
  "Next JS",
  "Angular JS",
  "React JS",
  "Python",
  "Flutter",
  "React Native",
  "Android Native",
  "Apple",
];
const devOps = ["AWS", "Google Cloud", "Azure", "Digitalocean"];
const Skills = ({title}) => {
  const heroImage = `url(${"https://technogripper.net/assets/images/component/industry5.png"})`;

  return (
    <section
      className="min-h bg-center bg-cover  bg-no-repeat container mx-auto xl:px-16 px-5 py-16 font-Instrument z-[-10px] flex"
      style={{
        background: heroImage,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 items-center">
        <div>
          <h2 className="sm:text-6xl text-3xl font-semibold text-white lg:leading-[1.2] mb-4">
            Powering <br className="sm:block hidden" /> Innovation in{" "}
            <br className="sm:block hidden" /> {title}
          </h2>
          <p className="text-xl font-bold text-white">
            Leverage cutting-edge technologies like AI & cloud to improve
            patient outcomes, streamline workflows, and deliver the future of 
             {title}
          </p>
        </div>
        <div className="bg-white px-10 py-10">
          <div>
            <h3 className="mb-3 text-[16px] font-semibold text-black/55">
              EMERGING TECHNOLOGIES
            </h3>
            <div className="flex gap-x-3 flex-wrap mb-3">
              {emergingTechnologies.map((item, index) => (
                <div className="mb-2">
                  <button className="px-4 py-[10px] bg-[#1a8489] border text-white rounded-3xl transition-all duration-300 hover:bg-white hover:border-[#1a8489] hover:text-[#1a8489]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <h3 className="mb-3 text-[16px] font-semibold text-black/55">
              WEB & MOBILE TECHNOLOGIES
            </h3>
            <div className="flex gap-x-3 flex-wrap mb-3">
              {webTechnologies.map((item, index) => (
                <div className="mb-2">
                  <button className="px-4 py-[10px] bg-[#1a8489] border text-white rounded-3xl transition-all duration-300 hover:bg-white hover:border-[#1a8489] hover:text-[#1a8489]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-[16px] font-semibold text-black/55 ">
              DEVOPS
            </h3>
            <div className="flex gap-x-3 flex-wrap mb-3">
              {devOps.map((item, index) => (
                <div className="mb-2">
                  <button className="px-4 py-[10px] bg-[#1a8489] border text-white rounded-3xl transition-all duration-300 hover:bg-white hover:border-[#1a8489] hover:text-[#1a8489]">
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
