"use client";

import { navdata, NavData } from "@/utils/navbarData";
import { Twclsx } from "@/utils/twclxi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {  CiMenuFries } from "react-icons/ci";
import React from "react";
import CustomButton from "./ui/CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import Motion_Magnet_effect from "@/motion/Motion_Maget_effect";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggle } from "@/store/reducers/navbarSlice";
import { IconX } from "@tabler/icons-react";

const Navbar = () => {
  const { isOpen } = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch<AppDispatch>();
  const params = usePathname();
  

  return (
    <nav className="md:max-w-screen-xl md:mx-auto py-6  top-0  flex justify-between gap-20 items-center px-3 md:px-[1px]  border-b-[1px] border-b-zinc-600  relative ">
      <div className="flex justify-start gap-20 items-center">
        <Link
          href={"/"}
          className="font-monument font-semibold text-white select-none"
        >
          Refocus
        </Link>
        <div className="hidden sm:hidden md:flex justify-between items-center  gap-14 ">
          {navdata.map((item: NavData) =>
            item.name !== "" ? (
              <Motion_Magnet_effect key={item.id}>
                <Link
                  className={Twclsx(
                    "font-gilroy text-white relative  ",
                    params === item.link &&
                      "before:w-2 before:h-2 before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-green-300 before:rounded-full before:-left-3 before:shadow-2xl before:shadow-green-200"
                  )}
                  href={item.link}
                >
                  {item.name}
                </Link>
              </Motion_Magnet_effect>
            ) : (
              <div key={item.id} className="w-[2px] h-6 bg-zinc-600"></div>
            )
          )}
        </div>
      </div>
      <div className="button sm:block hidden  ">
        <CustomButton fontSize="sm">
          <h1>Get Started </h1>
          <FaArrowRight />
        </CustomButton>
      </div>
      <div onClick={() => dispatch(toggle())} className="block md:hidden  ">
        {!isOpen ? (
          <CiMenuFries
            className="block md:hidden "
            size={"1.5rem"}
            style={{ color: "white", fontWeight: "bold" }}
          />
        ) : (
          <IconX
            className="block md:hidden "
            size={"1.5rem"}
            style={{ color: "white", fontWeight: "bold" }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
