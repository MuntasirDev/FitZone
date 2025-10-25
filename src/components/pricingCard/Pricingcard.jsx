import React from "react";

const Pricingcard = ({ pricing }) => {
  return (
<div className="Sora border border-gray-800 bg-gradient-to-b from-black via-gray-900 to-black rounded-xl shadow-xl p-6 hover:scale-105 transition-transform duration-200 gap-6 flex flex-col">
  {/* Card Header */}
  <div className="mb-4">
    <h1 className="text-4xl md:text-5xl font-extrabold text-green-400">{pricing.planName}</h1>
    <p className="text-2xl md:text-3xl mt-2 font-semibold text-green-300">${pricing.type}/</p>
  </div>

  {/* Description */}
  <div className="mb-4 text-gray-200">
    <p className="text-md md:text-lg">{pricing.description}</p>
  </div>

  {/* Features */}
  <div className="mb-4">
    <h5 className="text-xl font-semibold text-green-400 mb-2">Features:</h5>
    <ul className="list-disc list-inside text-gray-200 space-y-1">
      {pricing.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  </div>

  {/* Duration Options */}
  <div className="mb-4">
    <h5 className="text-xl font-semibold text-green-400 mb-2">Duration Options:</h5>
    <div className="flex flex-wrap gap-2">
      {pricing.durationOptions.map((duration, idx) => (
        <span key={idx} className="bg-green-500 text-black font-bold px-3 py-1 rounded-full text-sm hover:bg-green-400 transition">
          {duration}
        </span>
      ))}
    </div>
  </div>

  {/* Suitable For */}
  <div>
    <h5 className="text-xl font-semibold text-green-400 mb-2">Suitable For:</h5>
    <p className="text-gray-200">{pricing.suitableFor}</p>
  </div>
</div>

  );
};

export default Pricingcard;
