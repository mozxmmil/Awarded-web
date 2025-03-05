"use client";
import { WorkImage, workImage } from "@/utils/workImage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useScroll, motion, AnimatePresence } from "motion/react";
import { getMobileView } from "@/utils/getMobileView";

const Work = () => {
  const [image, setImage] = useState<WorkImage[]>(workImage);
  const { isMobile } = getMobileView();
  const { scrollYProgress } = useScroll();

  const itemData: { [key: number]: number[] } = {
    0: [],
    3: [0],
    6: [0, 1],
    9: [0, 1, 2, 3],
  };
  const itemDataMobile: { [key: number]: number[] } = {
    0: [],
    1: [0],
    2: [0, 1],
    3: [0, 1, 2, 3],
  };
  useEffect(() => {
    const handleScrollChange = (data: number) => {
      const ScrollValue = Math.floor(data * 100);

      if (isMobile) {
        const DistanceValue =
          itemDataMobile[ScrollValue] || image.map((_, inx) => inx);

        setImage((prev) => {
          const needUpdata = prev.some(
            (item, inx) => item.isActive !== DistanceValue.includes(inx)
          );
          if (!needUpdata) return prev;

          return prev.map((item, inx) => ({
            ...item,
            isActive: DistanceValue.includes(inx),
          }));
        });
      } else {
        const DistanceValue =
          itemData[ScrollValue] || image.map((_, inx) => inx);

        setImage((prev) => {
          const needsUpdate = prev.some(
            (item, inx) => item.isActive !== DistanceValue.includes(inx)
          );
          if (!needsUpdate) return prev;

          return prev.map((item, inx) => ({
            ...item,
            isActive: DistanceValue.includes(inx),
          }));
        });
      }
    };

    // Throttle scroll updates to 60fps (~16ms)
    let timeout: NodeJS.Timeout;
    const throttledChange = (data: number) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => handleScrollChange(data), 16);
    };

    scrollYProgress.on("change", throttledChange);
    return () => {
      scrollYProgress.clearListeners();
    }; // Cleanup
  }, [scrollYProgress, image]);

  return (
    <div className="w-full relative md:mt-20 mt-10">
      <h1 className="md:text-[20em] text-9xl text-center font-medium font-gilroy relative">
        Work
      </h1>
      <div className="imageContainer w-full h-full  absolute top-0 left-0 ">
        <AnimatePresence>
          {image.map((item, inx) =>
            item.isActive ? (
              <motion.div
                key={inx} // Unique key for AnimatePresence
                initial={{
                  filter: "blur(10px)",
                  opacity: 0,
                  scale: 0.8,
                  x:"-50%"
                }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  filter: "blur(10px)",
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  duration: 0.5, // Smoother duration
                  ease: [0.4, 0, 0.2, 1], // Custom easing for natural feel
                }}
                className="ImageContainer w-16 h-16 md:w-40 md:h-40 overflow-hidden rounded-md absolute -translate-x-1/2 -translate-y-1/2"
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
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Work;
