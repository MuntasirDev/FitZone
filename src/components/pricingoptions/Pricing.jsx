import React, { useEffect, useState } from "react";
import Pricingcard from "../pricingCard/Pricingcard";

const Pricing = ({ pricingPromise }) => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    pricingPromise
      .then((data) => setPricingData(data))
      .catch((err) => console.error("Error loading pricing data:", err));
  }, [pricingPromise]);
  return (
    <div>
      <h2 className="text-5xl font-bold mb-6">Get Our Membership</h2>

      <div className="grid md:grid-cols-3 gap-3">
        {pricingData.map((pricing) => (
          <Pricingcard key={pricing.id} pricing={pricing} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
