import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/WhyChoose";
import TechnologyGrid from "./components/TechnologyCategory";
import WhyHireSection from "./components/WhyHire";
import FeatureSection from "./components/FeatureSection";
import "./App.css";
import HiringProcess from "./components/HiringProcess";
import UserGuideHiring from "./components/UserGuide";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhyChoose />
      <TechnologyGrid />
      <WhyHireSection />
      <FeatureSection />
      <HiringProcess />
      <UserGuideHiring />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
