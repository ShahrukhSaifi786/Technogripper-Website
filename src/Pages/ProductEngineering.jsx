import React from "react";
import ContactUs from "../Component/Home Component/ContactUs";
import EnterpriseSolutionHeader from "../Component/EnterpriseSolutionComponent/EnterpriseSolutionHeader";
import EnterpriseSolutionServices from "../Component/EnterpriseSolutionComponent/EnterpriseSolutionServices";
import EnterpriseSolutionAbout from "../Component/EnterpriseSolutionComponent/EnterpriseSolutionAbout";
import EnterpriseSolutionFAQ from "../Component/EnterpriseSolutionComponent/EnterpriseSolutionFAQ";
import {
  PiChartBarThin,
  PiChartLineDownThin,
  PiChartPolarThin,
  PiGenderTransgenderThin,
  PiHandCoinsThin,
} from "react-icons/pi";
import { GiCoinflip, GiCoins } from "react-icons/gi";
import { Helmet } from "react-helmet";
import Mobile_Apps from "./images/product-engineering.jpg";

const headerData = {
  mainHeading: "Accelerate Innovation with Expert Product Engineering Solutions",
  mainHeading2: `We provide comprehensive product engineering services to transform your ideas into
  exceptional, market-ready products.`,
  mainHeadingParagraph1: `We offer a wide range of services for product engineering, providing end-to-end solutions
  that help businesses bring their innovative ideas to life. Our experienced engineers, designers,
  and technologists collaborate closely with clients to understand their unique requirements and
  develop customized solutions that align with their vision and goals.`,
  mainHeadingParagraph2: `From concept ideation to design, development, testing, and production, we follow a
  systematic approach to ensure the successful realization of your product. We leverage cutting-
  edge technologies, tools, and methodologies to deliver high-quality, scalable, and market-
  ready products.`,
  mainSubHeading: `Our Product Engineering Services`,
  subHeading: `We can be your technology partner for all your Education Solutions`,
  subHeadingParagraph1: `
  Welcome to TechnoGripper Solutions, where your vision meets our expertise to redefine the future of your enterprise.`,
  subHeadingParagraph2: `Our services encompass various aspects of product engineering, including prototyping,
  industrial design, embedded systems development, mechanical engineering, firmware
  development, software development, quality assurance, and manufacturing support. Whether
  you need assistance with hardware-software integration, Internet of Things (IoT) solutions, or
  user experience optimization, our team has the expertise to meet your requirements.`,
  subHeadingParagraph3: `Through agile project management practices, we ensure timely delivery without
  compromising quality. Our focus on collaboration, innovation, and continuous improvement
  ensures that your product is developed efficiently and stays ahead of the competition.`,
  ctaHeading: "Ready to transform your Business with Product Engineering Solutions",
};
const serviceData = [
  {
    icon: <PiHandCoinsThin />,
    heading: "Bookkeeping & Accounting",
    description:
      "Tailored guidance for individuals and businesses, managing debt, budgeting, and future financial plans.",
  },
  {
    icon: <GiCoinflip />,
    heading: "Manufacturing & Production",
    description:
      "Optimizing investment portfolios, digital analysis, and smart investment strategies.",
  },
  {
    icon: <GiCoins />,
    heading: "Cloud-based Crossplatform POS",
    description:
      "Ensuring stable post-retirement finances through savings and wise investments.",
  },
  {
    icon: <PiGenderTransgenderThin />,
    heading: "Supply Chain & Logistics",
    description:
      "Protecting assets with tailored insurance solutions against unexpected events.",
  },
];
const AboutData = [
  {
    icon: <PiChartPolarThin />,
    heading: "Expertise and Experience",
    description:
      "Benefit from a team with deep-rooted expertise and years of experience in enterprise solution development.",
  },
  {
    icon: <PiChartBarThin />,
    heading: "Comprehensive Support and Maintenance",
    description:
      "We guarantee that our solutions stay current, safe, and function at their peak all the time, giving you peace of mind and ongoing success.",
  },
  {
    icon: <PiChartLineDownThin />,
    heading: "Client-Centric Approach",
    description:
      "We collaborate extensively with you, ensuring a deep understanding of your needs, objectives, and aspirations fostering a partnership that goes beyond mere project delivery.",
  },
];
const aboutDescriptions = {
  Heading: "Product Engineering",
  paragraph1:
    "Embark on a journey of innovation with TechnoGripper, where our seasoned team’s extensive expertise and years of experience elevate your enterprise solution development experience. Specializing in tailoring solutions to your unique needs, we adopt a customized approach that ensures our services align seamlessly with your business objectives.",
  paragraph2: `Here's why we should be your partner in developing your next education solution:`,
  paragraphShowOrNot: false,
  btn: "Book Free Consultation",
};
const faqArray = [
  {
    question: `What industries do you cater to for product engineering?`,
    answer: `We cater to a wide range of industries, including but not limited to consumer electronics,
    healthcare, automotive, robotics, IoT, and industrial automation.`,
    value: true,
  },
  {
    question: `Can you help with product concept and ideation?`,
    answer: `Yes, we offer product concept and ideation services, working closely with you to refine
    and develop your ideas into viable and innovative product concepts.`,
    value: false,
  },
  {
    question: `Do you provide prototyping services?`,
    answer: `Absolutely! We offer prototyping services, utilizing advanced technologies such as 3D
    printing and rapid prototyping techniques to create functional prototypes for testing and
    validation.`,
    value: false,
  },
  {
    question: `Can you assist with the design for manufacturing (DFM)?`,
    answer: `Yes, we have expertise in design for manufacturing, ensuring that your product is
    optimized for efficient and cost-effective production without compromising functionality or
    quality.`,
    value: false,
  },
  {
    question: `Do you handle regulatory compliance for products?`,
    answer: `Yes, we can assist with regulatory compliance, guiding you through the necessary
    certifications and ensuring your product meets the required industry standards and
    regulations.`,
    value: false,
  },
  {
    question: `Can you help with software development for embedded systems?`,
    answer: `Absolutely! We have a dedicated team of software engineers who specialize in developing
    firmware and software for embedded systems, ensuring seamless integration and
    functionality.`,
    value: false,
  },
  {
    question: `What testing services do you provide?`,
    answer: `We offer comprehensive testing services, including functional testing, usability testing,
    performance testing, and compatibility testing, to ensure the reliability and quality of your
    product.`,
    value: false,
  },
  {
    question: `Can you support the manufacturing process?`,
    answer: `Yes, we provide manufacturing support services, collaborating with reliable partners to
    ensure smooth production, quality control, and timely delivery of your products.`,
    value: false,
  },
  {
    question: `How do you ensure intellectual property protection?`,
    answer: `We prioritize intellectual property protection and follow strict protocols to ensure the
    confidentiality and security of your ideas, designs, and any sensitive information throughout
    the product engineering process.`,
    value: false,
  },
  {
    question: `What post-production support do you offer?`,
    answer: `We provide post-production support services, including product updates, maintenance, and
    enhancements, to ensure your product remains optimized and continues to meet evolving
    market needs.`,
    value: false,
  },
];
const contactData = {
  heading: `Tech Headache? Get a Free IT Aspirin: Schedule Your Consultation Today!`,

  btn: "CONTACT US",
  paragraph: `Feeling overwhelmed by IT issues? Drowning in a sea of tech jargon? We get it. Technology can be a powerful tool, but it can also be a frustrating maze. That's why we offer free IT consultations, giving you the chance to connect with our expert team and diagnose your tech woes without any strings attached.`,
};

const ProductEngineering = () => {
  return (
    <>
      <Helmet>
        <title>
          Product Engineering Services - TechnoGripper Solutions Private
          Limited
        </title>
      </Helmet>
      <EnterpriseSolutionHeader
        headerData={headerData}
        imgSource={Mobile_Apps}
      />
      <EnterpriseSolutionServices
        serviceData={serviceData}
        heading={`Solutions, we've already worked on`}
      />
      <EnterpriseSolutionAbout
        AboutData={AboutData}
        aboutDescriptions={aboutDescriptions}
      />
      <EnterpriseSolutionFAQ faqArray={faqArray} orderedModify={true} />
      <ContactUs contactData={contactData} />
    </>
  );
};

export default ProductEngineering;
