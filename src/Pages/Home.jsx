import Navbar from "../Component/Navbar";
import EnterpriseSolution from "../Component/Home Component/EnterpriseSolution";
import CountUpComponent from "../Component/Home Component/CountUpComponent";
import MedalMoneyBill from "../Component/Home Component/MedalMoneyBill";
import ScalableSolution from "../Component/Home Component/ScalableSolutionComponent/ScalableSolution";
import ViewTechnology from "../Component/Home Component/View Technology/ViewTechnology";
import TrustedIndustry from "../Component/Trusted Industry/TrustedIndustry";
import ContactUs from "../Component/Home Component/ContactUs";
import Carousel from "../Component/Home Component/CarouselComponent";
import { Helmet } from "react-helmet";

const contactData = {
  heading:
    "Tech Headache? Get a Free IT Aspirin: Schedule Your Consultation Today!",

  btn: "CONTACT US",
  paragraph: `Feeling overwhelmed by IT issues? Drowning in a sea of tech jargon? We get it. Technology can be a powerful tool, but it can also be a frustrating maze. That's why we offer free IT consultations, giving you the chance to connect with our expert team and diagnose your tech woes without any strings attached.`,
};
const Home = () => {
  return (
    <>
    <Helmet>
        <title>TechnoGripper Solutions Private Limited</title>
      </Helmet>
      <EnterpriseSolution />
      <CountUpComponent />
      <MedalMoneyBill />
      <ScalableSolution />
      <ViewTechnology />
      <Carousel />
      <TrustedIndustry />
      <ContactUs contactData={contactData} />
    </>
  );
};

export default Home;
