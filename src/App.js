import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import HowToDonate from "./components/HowToDonate";
import DonationForm from "./components/DonatingForm";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    anonymous: false,
    phone: "",
    item: "No preference",
    amount: "",
    receipt: null,
    prayer: "",
  });
  return (
    <div>
      <HeroSection />
      <MissionSection setFormData={setFormData} />
      <HowToDonate />
      <DonationForm formData={formData} setFormData={setFormData} />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
