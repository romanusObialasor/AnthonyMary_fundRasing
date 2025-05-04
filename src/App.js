import React from "react";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import HowToDonate from "./components/HowToDonate";
import DonationForm from "./components/DonatingForm";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <HowToDonate />
      <DonationForm />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
