import { sliderData } from "@/utils/sliderData";
import React from "react";

const Sliders = () => {
  return (
    <div className="w-full  h-20 flex mt-10 md:mt-28 overflow-x-hidden items-center">
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
    <div className="md:w-1/6 w-1/3 border-zinc-500 border-b-[1px] border-t-[1px] border-r-[1px] px-4 py-3 flex items-center justify-between">
      <span className="font-monument md:text-2xl text-base">{text}</span>
      <span className="font-medium">{num}</span>
    </div>
  );
};
