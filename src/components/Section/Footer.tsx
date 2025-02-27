import { footerData1, footerData2 } from "@/utils/footer";
import React from "react";
import CustomButton from "../ui/CustomButton";
import { IoShareSocial } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full    mt-16">
      <FooterContainer />
    </div>
  );
};

export default Footer;

//****************************************************************************************** */

const FooterContainer = () => {
  return (
    <div className="max-w-screen-xl min-h-60 mx-auto flex gap-5  justify-between overflow-hidden">
      <div className="leftBox basis-1/2    ">
        <h1 className="text-[8rem] font-monument">refocus.</h1>
      </div>
      <div className="rightBox basis-1/2  flex  gap-10">
        <div className="basis-1/3 ">
          <h1 className="mb-7">social</h1>
          {footerData1.map((item, inx) => (
            <span className="block mt-1 text-zinc-500 hover:text-violet-800 hover:cursor-pointer" key={inx}>{item}</span>
          ))}
        </div>
        <div className="basis-1/3 " >
          <h1 className="mb-7">social</h1>
          {footerData2.map((item, inx) => (
            <span className="block mt-1 text-zinc-500 hover:text-violet-800 hover:cursor-pointer" key={inx}>{item}</span>
          ))}
        </div>
        <div className=" basis-1/2 flex  flex-col items-end">
          <h1 className="mb-7 text-right">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda vitae nemo unde quia debitis consequuntur eius,</h1>
          
          <CustomButton variant={"OnlyOutline"} fontSize={"sm"}>
                    <h1>Follow for more</h1>
                    <IoShareSocial/>
          </CustomButton>

        </div>
        
      </div>
    </div>
  );
};
