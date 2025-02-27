"use client";
import React, { useEffect, useRef } from "react";
import Work from "./Section/Work";
import Sliders from "./ui/Sliders";
import Products from "./ui/Products";
import ProductsCards from "./Section/ProductsCards";
import Footer from "./Section/Footer";
import LocomotiveScroll from "locomotive-scroll";

const Landing_Page = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => locomotiveScroll.destroy();
    }
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full h-[calc(100%_-_3rem)] min-h-screen bg-black text-white pb-10 relative"
    >
      <Work />
      <Sliders />
      <Products />
      <ProductsCards />
      <Footer />
    </div>
  );
};

export default Landing_Page;
