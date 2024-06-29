import React from "react";
import ServiceHeader from "../Component/Service Component/ServiceHeader";
import CarouselComponent from "../Component/Home Component/CarouselComponent";
import ServiceIcons from "../Component/Service Component/ServiceIcons";
import { Helmet } from "react-helmet";


const Service = () => {
  return (
    <>
    <Helmet>
        <title>Services - TechnoGripper Solutions Private Limited</title>
      </Helmet>
      <ServiceHeader />
      <CarouselComponent />
      <ServiceIcons />
    </>
  );
};

export default Service;
