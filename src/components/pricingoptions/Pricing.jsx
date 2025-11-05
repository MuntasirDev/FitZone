import React, { useEffect, useState } from "react";
import Pricingcard from "../pricingCard/Pricingcard";
import FitZonecover from "../../assets/Fitzone Cover.jpg"

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
<section
  className="relative w-full h-[500px] flex flex-col items-center justify-center px-6 md:px-16"
  style={{
    backgroundImage: `url(${FitZonecover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Darker overlay for contrast */}
  <div className="absolute inset-0 bg-black/50"></div> {/* 50% black overlay */}

  {/* Content relative to the cover image */}
  <div className="relative z-10 text-center">
    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
      Get Our Membership
    </h2>
    <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto">
      Choose the plan that fits your fitness journey — flexible, powerful, and healing.
    </p>
  </div>
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
