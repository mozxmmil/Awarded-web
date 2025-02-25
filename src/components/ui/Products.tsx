"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { productData, ProductItemType } from "@/utils/productItem";


const Products = () => {
  return (
    <div className="w-full  mb-5 ">
      {productData.map((item, inx) => (
        <ProductItem key={inx} {...item} />
      ))}
    </div>
  );
};
export default Products;

// *****************************************************************************************************

type ProductItemProps = ProductItemType;
export const ProductItem = ({
  text,
  active,
  getStarted,
  paragraph,
}: ProductItemProps) => {
  return (
    <div className="hover:bg-zinc-700">
      <div className="max-w-screen-xl  mx-auto py-7  flex items-center justify-between">
        <h1 className="text-6xl font-bold capitalize w-1/2 ">{text}</h1>
        <div className="textAndButtonContainer  w-1/3">
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
      </div>
    </div>
  );
};
