import React from "react";
import { featuresData } from "../_data/featues-data";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section className="py-20" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className=" text-5xl font-bold bg-gradient-to-r from-blue-400
           to-purple-500 bg-clip-text text-transparent mb-6"
          >
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to create, edit, and enhance images with
            Professional-grade tools powered by cutting-edge AI technology.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((data, index) => (
            <FeaturesCard key={index} {...data} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
