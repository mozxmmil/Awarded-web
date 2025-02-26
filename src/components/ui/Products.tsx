"use client";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { productData, ProductItemType } from "@/utils/productItem";
import { motion } from "motion/react";
import Image from "next/image";

const Products = () => {
  const [position, setPosition] = useState(0);

  const handleHover = (id: number) => {
    setPosition(id * 11);
  };
  
  return (
    <div className="w-full h-[35rem]   relative ">
      {productData.map((item, inx) => (
        <ProductItem key={inx} {...item} HandleHover={handleHover} id={inx} />
      ))}
      <div className="w-full h-full absolute  inset-0  pointer-events-none text-black">
        <motion.div
          animate={{ y: position + "rem" }}
          transition={{ duration: 0.3, ease:"easeInOut" }}
          className="windows h-44 w-60  absolute left-[33%] overflow-hidden  "
        >
          <motion.div
            animate={{ y: -position + "rem" }}
            className="windows h-full w-full  bg-violet-600  -translate-y-[0rem]"
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1516900557549-41557d405adf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNtYXJ0JTIwY2l0eSUyMGdpZnxlbnwwfHwwfHx8MA%3D%3D"
              }
              width={100}
              height={100}
              alt="not found"
              className="h-full w-full"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + "rem" }}
            className="windows h-full w-full  bg-pink-600 -translate-y-[0rem] "
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0JTIwY2l0eSUyMGdpZnxlbnwwfHwwfHx8MA%3D%3D"
              }
              width={100}
              height={100}
              alt="not found"
              className="h-full w-full"
            />
          </motion.div>
          <motion.div
            animate={{ y: -position + "rem" }}
            className="windows h-full w-full  bg-green-600 -translate-y-[0rem] "
          >
            <Image
              src={
                "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnQlMjBjaXR5JTIwZ2lmfGVufDB8fDB8fHww"
              }
              width={100}
              height={100}
              alt="not found"
              className="h-full w-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Products;

// *****************************************************************************************************

interface ProductItemProps extends ProductItemType {
  HandleHover: (data: number) => void;
  id: number;
}
export const ProductItem = ({
  text,
  active,
  getStarted,
  paragraph,
  HandleHover,
  id,
}: ProductItemProps) => {
  return (
    <div className="hover:bg-zinc-700  hover:cursor-pointer h-44 ">
      <motion.div
        onMouseEnter={() => HandleHover(id)}
        className="max-w-screen-xl  mx-auto  h-full flex items-center justify-between "
      >
        <h1 className="text-6xl font-bold capitalize w-1/2 ">{text}</h1>
        <div className="textAndButtonContainer  w-1/3 h-full flex flex-col justify-center ">
          <p className=" py-5  text-base text-gray-300">{paragraph}</p>

          <div className=" w-fit flex items-center gap-5">
            {getStarted && (
              <CustomButton
                className={`${getStarted && "bg-red-200"}`}
                fontSize="sm"
              >
                <h1>Get Activate</h1>
                <FaArrowRight />
              </CustomButton>
            )}
            {active && (
              <CustomButton
                fontSize={"sm"}
                className={`${active && "bg-green-200"}`}
              >
                <h1>Activated</h1>
                <FaArrowRight />
              </CustomButton>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
