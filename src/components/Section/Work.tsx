import { workImage } from "@/utils/workImage";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div className="w-full relative md:mt-20 mt-10">
      <h1 className="md:text-[20em] text-9xl text-center font-medium font-gilroy relative">
        Work
      </h1>
      <div className="imageContainer w-full h-full  absolute top-0 left-0 ">
        {workImage &&
          workImage.map((item) => {
            return (
              <div
                key={item.id}
                className="ImageContainer w-10 h-10 md:w-40 md:h-40 
               overflow-hidden rounded-md absolute -translate-x-1/2 -translate-y-1/2  "
                style={{
                  top: item.top,
                  left: item.left,
                }}
              >
                <Image
                  fill
                  src={item.image}
                  alt="image"
                  className="object-cover"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Work;
