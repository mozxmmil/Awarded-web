"use client";
import React, { HtmlHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Twclsx } from "@/utils/twclxi";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../ui/CustomButton";
const ProductsCards = () => {
  return (
    <div className="max-w-screen-xl  h-96 mx-auto flex items-center gap-[1.5px] flex-col md:flex-row ">
      <Card
        topHeading="Up Next:Culture"
        secondHeading="who we are"
        showParagraph={true}
        showMaindHeading={false}
      />
      <Card
        variant="big"
        effects="hover"
        topHeading="Get in touch"
        secondHeading="let's get to it together"
        thirdHeading="Start a project"
        showParagraph={false}
        showMaindHeading={true}
      />
    </div>
  );
};

export default ProductsCards;

//***************************************************************************************/

const cardVariant = cva(
  "w-[40%] h-full bg-zinc-700 rounded-lg text-white px-5 py-5 flex justify-between flex-col transition-all duration-150 ease-in-out cursor-pointer group",
  {
    variants: {
      variant: {
        default: "w-[40%] h-full ",
        big: "w-[60%] h-full ",
      },
      effects: {
        hover: "hover:bg-violet-700",
      },
    },
  }
);

interface CardProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariant> {
  topHeading: string;
  secondHeading: string;
  thirdHeading?: string;
  showParagraph: boolean;
  showMaindHeading: boolean;
}

export const Card: React.FC<CardProps> = ({
  effects,
  className,
  variant,
  topHeading,
  secondHeading,
  thirdHeading,
  showParagraph,
  showMaindHeading,
}) => {
  return (
    <div className={Twclsx(cardVariant({ variant, className, effects }))}>
      <div className="topSection group-hover:px-2 duration-300 transition-all">
        <div className="upper flex justify-between items-center ">
          <h1>{topHeading}</h1>
          <FaArrowRightLong />
        </div>
        <h1 className="font-medium text-3xl mt-10">{secondHeading} </h1>
      </div>
      <div>
        {showMaindHeading && (
          <>
            <h1 className="font-bold text-6xl mt-5">{thirdHeading} </h1>
            <div className="w-fit mt-4">
              <CustomButton variant={"transparent"}>
                <h1>Contact us</h1>
                <FaArrowRightLong />
              </CustomButton>
            </div>
          </>
        )}
        {showParagraph && (
          <p className="text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At atque
            dignissimos, sequi odit corrupti amet! Laudantium temporibus
            recusandae officia aspernatur.
          </p>
        )}
      </div>
    </div>
  );
};
