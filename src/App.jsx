import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Service from "./Pages/Service";
import Company from "./Pages/Company";
import Contact from "./Pages/Contact";
import EnterpriseSolution from "./Pages/EnterpriseSolution";
import EducationAndTraining from "./Pages/EducationAndTraining";
import HealthCareAndPharmaceuticals from "./Pages/HealthCareAndPharmaceuticals";
import BankingAndFinance from "./Pages/BankingAndFinance";
import TransportationAndLogistics from "./Pages/TransportationAndLogistics";
import RealStateAndConstruction from "./Pages/RealStateAndConstruction";
import EntertainmentAndMedia from "./Pages/EntertainmentAndMedia";
import RetailAndFMCG from "./Pages/RetailAndFMCG";
import Telecommunications from "./Pages/Telecommunications";
import EcommerceAndMcommerce from "./Pages/TravelsAndHospitality";
import MediaAndEntertainment from "./Pages/MediaAndEntertainment";
import CrmAndErps from "./Pages/CrmAndErps";
import MobileApps from "./Pages/MobileApps";
import AIandAutomation from "./Pages/AIandAutomation";
import ItConsulting from "./Pages/ItConsulting";
import ProductEngineering from "./Pages/ProductEngineering";
import BlockChain from "./Pages/BlockChain";
import MachineLearning from "./Pages/MachineLearning";
import InternetOfThings from "./Pages/InternetOfThings";
import ExtendReality from "./Pages/ExtendReality";
import DataAnalytics from "./Pages/DataAnalytics";
import TravelsAndHospitality from "./Pages/TravelsAndHospitality";
import ApplicationMaintainence from "./Pages/ApplicationMaintainence";
import SoftwareDevelopment from "./Pages/SoftwareDevelopment";
import SoftwareTesting from "./Pages/SoftwareTesting";
import UIUX from "./Pages/UIUX";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Service />} />
          <Route path="about-us" element={<Company />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="enterprise-solutions" element={<EnterpriseSolution />} />
          <Route
            path="education-and-training"
            element={<EducationAndTraining />}
          />
          <Route
            path="healthcare-and-pharmaceutical"
            element={<HealthCareAndPharmaceuticals />}
          />
          <Route path="banking-and-finance" element={<BankingAndFinance />} />
          <Route
            path="transportation-and-logistics"
            element={<TransportationAndLogistics />}
          />
          <Route
            path="real-state-and-construction"
            element={<RealStateAndConstruction />}
          />
          <Route
            path="entertainment-and-media"
            element={<EntertainmentAndMedia />}
          />
          <Route path="retail-and-fmcg" element={<RetailAndFMCG />} />
          <Route path="telecommunications" element={<Telecommunications />} />
          <Route
            path="travel-and-hospitality"
            element={<TravelsAndHospitality />}
          />
          <Route
            path="media-and-entertainment"
            element={<MediaAndEntertainment />}
          />
          <Route path="crms-and-erps" element={<CrmAndErps />} />
          <Route path="mobile-apps" element={<MobileApps />} />
          <Route path="ai-and-automation" element={<AIandAutomation />} />
          <Route path="it-consulting" element={<ItConsulting />} />
          <Route path="application-maintenance" element={<ApplicationMaintainence />} />
          <Route path="product-engineering" element={<ProductEngineering />} />
          <Route path="software-development" element={<SoftwareDevelopment />} />
          <Route path="software-testing" element={<SoftwareTesting />} />
          <Route path="ui-ux" element={<UIUX />} />
          <Route path="ai-and-automation" element={<AIandAutomation />} />
          <Route path="blockchain" element={<BlockChain />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="internet-of-things" element={<InternetOfThings />} />
          <Route path="extend-reality" element={<ExtendReality />} />
          <Route path="data-analysis" element={<DataAnalytics />} />

          {/* <Route path="/*" element={<Navigate to={"/"} />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
