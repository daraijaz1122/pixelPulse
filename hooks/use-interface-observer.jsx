"use client";
import { useEffect, useRef, useState } from "react";

const useInterSectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState();
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
};

export default useInterSectionObserver;
