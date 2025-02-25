"use client";
import { workImage } from "@/utils/workImage";
import Image from "next/image";
import React, { useState } from "react";
import { useScroll, motion, AnimatePresence } from "motion/react";

const Work = () => {

  const [image, setImage] = useState(workImage);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {

    //todo: i have to optimize this code 
    const HandleChangeData = (arr: Array<number>) => {
      
      setImage((prev) =>
        prev.map((item, inx) => {
          if (arr.indexOf(inx) === -1) {
            return { ...item, isActive: false };
          } else {
            return { ...item, isActive: true };
          }
        })
      );
    };

    switch (Math.floor(data * 100)) {
      case 0:
        HandleChangeData([]);
        break;
      case 3:
        HandleChangeData([0]);
        break;
      case 6:
        HandleChangeData([0, 1, 2]);
        break;
      case 9:
        HandleChangeData([0, 1, 2, 3]);
        break;
    }
  });

  return (
    <div className="w-full relative md:mt-20 mt-10">
      <h1 className="md:text-[20em] text-9xl text-center font-medium font-gilroy relative">
        Work
      </h1>
      <div className="imageContainer w-full h-full  absolute top-0 left-0 ">
        <AnimatePresence>
          {image &&
            image.map((item) => {
              return (
                item.isActive && (
                  <motion.div
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                    }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      type: "spring",
                      duration: 1,
                      bounce: 0.5,
                      stiffness: 100,
                    }}
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
                  </motion.div>
                )
              );
            })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Work;
