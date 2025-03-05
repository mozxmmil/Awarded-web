import { sliderData } from "@/utils/sliderData";
import React from "react";

const Sliders = () => {
  return (
    <div className=" sliderbar w-full  h-20 flex mt-10 md:mt-28 overflow-x-auto items-center ">
      {sliderData.map((item, inx) => (
        <Slider key={inx} {...item} />
      ))}
    </div>
  );
};

export default Sliders;

export interface SliderProps {
  text: string;
  num: number;
}
const Slider = ({ text, num }: SliderProps) => {
  return (
    <div className="md:w-1/6 w-1/2 border-zinc-500 border-b-[1px] border-t-[1px] border-r-[1px] md:px-4 py-3 px-2 flex items-center md:justify-between gap-5">
      <span className="font-monument md:text-2xl text-sm">{text}</span>
      <span className="font-semibold">{num}</span>
    </div>
  );
};
