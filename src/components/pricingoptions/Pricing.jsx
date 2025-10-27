import React, { useEffect, useState } from "react";
import Pricingcard from "../pricingCard/Pricingcard";

const Pricing = ({ pricingPromise }) => {
  const [pricingData, setPricingData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pricingPromise
      .then((data) => setPricingData(data))
      .catch((err) => console.error("Failed to load pricing:", err))
      .finally(() => setLoading(false));
  }, [pricingPromise]);

  if (loading) return <div className="text-center text-white py-20">Loading...</div>;

  return (
    <div className="Sora">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black relative text-gray-200 py-32 px-6 md:px-16 flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-4">
          Get Our Membership
        </h2>
        <p className="text-gray-200 text-lg md:text-xl text-center max-w-3xl">
          Choose the plan that fits your fitness journey — flexible, powerful, and healing.
        </p>
      </section>

      {/* Pricing Cards Section */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 py-12 px-6 md:px-16">
        <div className="grid md:grid-cols-3 gap-8">
          {pricingData.map((pricing) => (
            <Pricingcard key={pricing.id} pricing={pricing} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
