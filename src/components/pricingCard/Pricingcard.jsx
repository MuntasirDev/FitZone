import { Check, CircleCheckBig } from "lucide-react";
import React from "react";


const Pricingcard = ({ pricing }) => {
  return (
    <div className="Sora border border-gray-800 bg-gradient-to-b from-black via-gray-900 to-black rounded-xl shadow-xl p-6 transition-transform duration-1000 gap-6 flex flex-col hover:scale-105 relative">

      {/* Card Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-green-400">
            {pricing.planName}
          </h1>
          <p className="text-2xl md:text-xl mt-2 font-semibold text-green-300">
            # {pricing.type}
          </p>
        </div>

        {/* Most Popular Badge */}
        {pricing.mostPopular && (
          <div className="flex items-center gap-1 text-yellow-400 font-bold px-3 py-1 rounded-full text-sm">
            <Check className="w-4 h-4" />
            Most Popular
          </div>
        )}
      </div>

      {/* Image */}
      <div className="mb-4 overflow-hidden rounded-xl border border-gray-700">
        <img
          src={pricing.image}
          className="w-full h-48 md:h-56 object-cover"
        />
      </div>

      {/* Description */}
      <div className="mb-4 text-gray-200">
        <p className="text-md md:text-lg">{pricing.description}</p>
      </div>

      {/* Features */}
      <div className="mb-4">
        <h5 className="text-xl font-semibold text-green-400 mb-2">Features:</h5>
        <ul className="space-y-2">
          {pricing.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-gray-200">
              <CircleCheckBig className="text-green-400 w-6 h-6" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Plans */}
      <div className="mb-4">
        <h5 className="text-xl font-semibold text-green-400 mb-2">
          Plans:
        </h5>
        <div className="flex flex-wrap gap-2">
          {pricing.durationOptions.map((duration) => (
            <span
              key={duration}
              className="bg-green-500 text-black font-bold px-3 py-1 rounded-full text-sm hover:bg-green-400 transition"
            >
              {duration} — ${pricing.pricing[duration]}
            </span>
          ))}
        </div>
      </div>

      {/* Suitable For */}
      <div>
        <h5 className="text-xl font-semibold text-green-400 mb-2">
          Suitable For:
        </h5>
        <p className="text-gray-200">{pricing.suitableFor}</p>
      </div>

      <button className="btn btn-wide max-w-full bg-green-500 text-black font-bold px-3 py-1 rounded-lg text-lg hover:bg-green-400 transition mt-4">
        Subscribe
      </button>
    </div>
  );
};

export default Pricingcard;
