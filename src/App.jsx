import { Suspense } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/pricingoptions/Pricing";

const pricingPromise = fetch('/public/pricingData.json').then(res => res.json());

function App() {
  return (
    <>
      <header>
      <Navbar></Navbar>
        
      </header>
   
      <main>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Pricing pricingPromise={pricingPromise}></Pricing>
    </Suspense>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
