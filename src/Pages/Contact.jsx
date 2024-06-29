import React from "react";
import ContactHeader from "../Component/ContactUs component/ContactHeader";
import ContactLocation from "../Component/ContactUs component/ContactLocation";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
    <Helmet>
        <title>Contact - TechnoGripper Solutions Private Limited</title>
      </Helmet>
      <ContactHeader />
      <ContactLocation />
    </>
  );
};

export default Contact;
