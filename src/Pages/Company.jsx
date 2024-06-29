import React from "react";
import AboutHeader from "../Component/AboutUs Component/AboutHeader";
import TrustedIndustry from "../Component/Trusted Industry/TrustedIndustry";
import OurMission from "../Component/AboutUs Component/OurMission";
import AboutFounder from "../Component/AboutUs Component/AboutFounder";
import AboutTarget from "../Component/AboutUs Component/AboutTarget";
import { Helmet } from "react-helmet";

const Company = () => {
  return (
    <>
    <Helmet>
        <title>About Us - TechnoGripper Solutions Private Limited</title>
      </Helmet>
      <AboutHeader />
      <TrustedIndustry />
      <OurMission />
      <AboutFounder />
      <AboutTarget />
    </>
  );
};

export default Company;
