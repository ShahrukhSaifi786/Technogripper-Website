import React from "react";

const SubFooter = () => {
  return (
    <section>
      <hr className="" />
      <div className="container mx-auto flex justify-between md:flex-row flex-col items-center   my-4 gap-y-3 xl:px-16">
        <p className="text-[15px] sm:text-[16px] px-2">
          ©2023 TechnoGripper Solutions Private Limited. All Rights Reserved.
        </p>
        <div className="flex gap-3">
          <a
            href="#"
            className=" text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-3px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[100%] cursor-pointer "
          >
            Terms Of Services
          </a>{" "}
          |{" "}
          <a
            href="#"
            className=" text-[15px] duration-200 relative before:content-[''] before:transition-all  before:absolute before:bottom-[-3px] before:left-0 before:w-0 before:h-[1px] before:bg-black  hover:before:w-[100%] cursor-pointer "
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
