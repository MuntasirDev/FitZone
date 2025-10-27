import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/pricingoptions/Pricing";
import Resultchart from "./components/ResultChart/Resultchart";
import Footer from "./components/footer/Footer";

// Import JSON directly for static deploy
import pricingData from "../public/pricingData.json";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* Pass pricing data as a resolved Promise */}
        <Pricing pricingPromise={Promise.resolve(pricingData)} />
        <Resultchart />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
