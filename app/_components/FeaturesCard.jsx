"use client";
import useInterSectionObserver from "@/hooks/use-interface-observer";
import React, { useState } from "react";

const FeaturesCard = ({ icon, title, description, delay = 0 }) => {
  const [ref, isVisible] = useInterSectionObserver();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      ref={ref}
      className={` backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 transition-all 
        duration-700 cursor-pointer${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-10"
        } ${isHovered ? "transform scale-105 rotate-1 shadow-2xl" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 ">{description}</p>
    </div>
  );
};

export default FeaturesCard;
