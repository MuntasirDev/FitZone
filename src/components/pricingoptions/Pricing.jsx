import React, { useEffect, useState } from "react";
import Pricingcard from "../pricingCard/Pricingcard";

const Pricing = ({ pricingPromise, coverPromise }) => {
  const [pricingData, setPricingData] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch pricing and cover concurrently
    Promise.all([pricingPromise, coverPromise])
      .then(([pricing, cover]) => {
        setPricingData(pricing);
        setCoverImage(cover); // cover should return a path like "/images/cover.jpg"
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [pricingPromise, coverPromise]);

  if (loading)
    return <div className="text-center text-white py-20">Loading...</div>;

  return (
    <div className="Sora">
      {/* Hero / Cover Section */}
      <section
        className="relative text-gray-200 py-32 px-6 md:px-16 flex flex-col items-center justify-center"
        style={{
          backgroundImage: coverImage ? `url(${coverImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-4">
            Get Our Membership
          </h2>
          <p className="text-gray-200 text-lg md:text-xl">
            Choose the plan that fits your fitness journey — flexible, powerful,
            and healing.
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
