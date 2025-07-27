import { PricingTable } from "@clerk/nextjs";
import React from "react";
import { pricingDetails } from "../_data/pricing-data";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="py-20" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className=" text-5xl font-bold text-white mb-6">
            Simple{" "}
            <span
              className=" bg-gradient-to-r from-blue-400
           to-purple-500 bg-clip-text text-transparent"
            >
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start editing for free and upgrade when you need advance features.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingDetails.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
