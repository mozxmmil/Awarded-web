"use client";
import CustomButton from "@/components/ui/CustomButton";
import {
  asyncReset,
  decrement,
  increment,
  incrementByAmount,
} from "@/store/reducers/counterSlice";
import { AppDispatch, RootState } from "@/store/store";
import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Page = () => {
  const { value } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="w-full h-screen bg-[#FCE4D8] text-[#F75590] flex justify-center items-center">
      <div className="min-h-60 h-96 flex flex-col justify-between  items-center max-w-screen-lg mx-auto ">
        <h1 className="font-bold text-3xl ">counter: {value}</h1>
        <CustomButton
          onClick={() => dispatch(increment())}
          className="text-inherit font-bold"
        >
          <h1>Increment</h1>
          <FaArrowAltCircleRight />
        </CustomButton>
        <CustomButton
          onClick={() => dispatch(decrement())}
          className="text-inherit font-bold"
        >
          <h1>decrement</h1>
          <FaArrowAltCircleRight />
        </CustomButton>
        <CustomButton
          onClick={() => dispatch(incrementByAmount(5))}
          className="text-inherit font-bold"
        >
          <h1>increment by value </h1>
          <FaArrowAltCircleRight />
        </CustomButton>
        <CustomButton
          onClick={() => dispatch(asyncReset())}
          className="text-inherit font-bold"
        >
          <h1>Reset</h1>
          <FaArrowAltCircleRight />
        </CustomButton>
      </div>
    </div>
  );
};

export default Page;
