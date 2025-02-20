"use client";

import { navdata, NavData } from "@/utils/navbarData";
import { Twclsx } from "@/utils/twclxi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import React from "react";

const Navbar = () => {
  const params = usePathname();
  console.log(params);

  return (
    <nav className="max-w-screen-xl mx-auto py-6  top-0  flex justify-between gap-20 items-center px-3 md:px-0 ">
      <div className="flex justify-start gap-20 items-center">
        <Link href={"/"} className="font-monument font-semibold text-white">
          Refocus
        </Link>
        <div className="hidden sm:hidden md:flex justify-between items-center  gap-14 ">
          {navdata.map((item: NavData) =>
            item.name !== "" ? (
              <Link
                className={Twclsx(
                  "font-gilroy text-white relative  ",
                  params === item.link &&
                    "before:w-2 before:h-2 before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-green-300 before:rounded-full before:-left-3 before:shadow-2xl before:shadow-green-200"
                )}
                href={item.link}
                key={item.id}
              >
                {item.name}
              </Link>
            ) : (
              <div key={item.id} className="w-[2px] h-6 bg-white"></div>
            )
          )}
        </div>
      </div>
      <div className="button sm:block hidden ">
        <button className="bg-white px-3 py-2 rounded-md">click here</button>
      </div>
      <CiMenuFries
        className="block md:hidden"
        size={"1.5rem"}
        style={{ color: "white", fontWeight: "bold" }}
      />
    </nav>
  );
};

export default Navbar;
