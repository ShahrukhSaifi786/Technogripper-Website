import React from "react";
const contactLocation = [
  {
    subLocation: "New Delhi, India",
    location: "Krishna Nagar, Old Govind Pura, New Delhi, India",
    number: "+91 956 085 0036",
  },
  {
    subLocation: "Greater Noida, India",
    location: "NX One, Noida Extension, Greater Noida, India",
    number: "+91 956 085 0036",
  },
  {
    subLocation: "New Delhi, India",
    location: "Krishna Nagar, Old Govind Pura, New Delhi, India",
    number: "+91 956 085 0036",
  },
];
const ContactLocation = () => {
  return (
    <section className="ContactLocation container mx-auto xl:px-16 px-5 py-16 font-Instrument mb-10">
      <div className="mb-8 xl:px-4">
        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl  text-2xl font-semibold text-center mb-6 xl:leading-[70px]">
          Our Locations
        </h2>
        <p className="text-[18px] sm:ms-6 text-center">
          Tracing the Path of Our Legacy and Growth
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
        {contactLocation.map((item, index) => (
          <div key={index} className=" bg-gradient-to-l from-[#FAF7EF] to-[#f4f6fc] px-7 py-7 flex flex-col gap-y-5 rounded-2xl">
            <h2 className="font-semibold text-2xl">{item.subLocation}</h2>
            <div>
              <p className="text-xl text-gray-400 mb-2">Address:</p>
              <span className="text-xl">{item.location}</span>
            </div>
            <div>
              <p className="text-gray-400 text-xl mb-2">Phone Number:</p>
              <span className="text-xl">{item.number}</span>
            </div>
            <p className="cursor-pointer">View On Map</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactLocation;
