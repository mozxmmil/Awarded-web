"use client";

import { navdata, NavData } from "@/utils/navbarData";
import { Twclsx } from "@/utils/twclxi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const params = usePathname();
  console.log(params);

  return (
    <nav className="max-w-screen-xl mx-auto py-6  top-0  flex justify-between gap-20 items-center ">
      <div className="flex justify-start gap-20 items-center">
        <Link href={"/"} className="font-monument font-semibold text-white">
          Refocus
        </Link>
        <div className="flex justify-between items-center  gap-14 ">
          {navdata.map((item: NavData) =>
            item.name !== "" ? (
              <Link
                className={Twclsx(
                  "font-gilroy text-white relative  ",
                  params === item.link &&
                    "before:w-2 before:h-2 before:absolute before:top-1/2 before:-translate-y-1/2 before:bg-green-500 before:rounded-full before:-left-3 before:shadow-2xl before:shadow-green-400"
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
      <div className="button ">
        <button>click here</button>
      </div>
    </nav>
  );
};

export default Navbar;
