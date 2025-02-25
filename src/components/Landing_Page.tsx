"use client"
import React from "react";
import Work from "./Section/Work";
import Sliders from "./ui/Sliders";
import Products from "./ui/Products";
import ProductsCards from "./Section/ProductsCards";
import Footer from "./Section/Footer";
import LocomotiveScroll from "locomotive-scroll";

const Landing_Page = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-[calc(100%_-_3rem)] min-h-screen bg-black text-white pb-10">
      <Work />
      <Sliders />
      <Products />
      <ProductsCards />
      <Footer />
    </div>
  );
};

export default Landing_Page;
