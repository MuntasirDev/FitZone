import React from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/pricingoptions/Pricing";
import Resultchart from "./components/ResultChart/Resultchart";
import Footer from "./components/footer/Footer";

const coverPromise = fetch("/public/cover.json").then(res=> res.json())
const pricingPromise = fetch("/pricingData.json").then(res => res.json());

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Pricing pricingPromise={pricingPromise} coverPromise={coverPromise} />
        <Resultchart></Resultchart>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
