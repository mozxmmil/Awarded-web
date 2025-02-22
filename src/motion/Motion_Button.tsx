"use client"
import { Twclsx } from "@/utils/twclxi";
import { motion } from "motion/react";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
const Motion_Button = ({ className, children, ...props }: Props) => {
  return (
    <motion.div
      initial="initialValue"
      whileHover="hover"
      className={Twclsx("",className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Motion_Button;
