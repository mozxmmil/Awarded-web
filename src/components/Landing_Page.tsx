import React from "react";
import Work from "./Section/Work";
import Sliders from "./ui/Sliders";
import Products from "./ui/Products";

const Landing_Page = () => {
  return (
    <div className="w-full h-[calc(100%_-_3rem)] min-h-screen bg-black text-white">
      <Work />
      <Sliders />
      <Products />
      
    </div>
  );
};

export default Landing_Page;
