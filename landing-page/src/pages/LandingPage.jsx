import React from "react";
import "../styles/LandingPage.css";

import Heroes from "../components/Heroes";
import Features from "../components/Features";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div className="landing-container">
      <Heroes />
      <Features />
      <Footer />
    </div>
  );
}

export default LandingPage;
