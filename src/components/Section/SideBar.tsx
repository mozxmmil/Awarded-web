import { RootState } from "@/store/store";
import { NavData } from "@/utils/navbarData";
import {
  IconAddressBook,
  IconCurrencyYen,
  IconHomeFilled,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { useSelector } from "react-redux";
const SideBar = () => {
  const { isOpen } = useSelector((state: RootState) => state.navbar);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            exit={{ x: "100%", opacity: 0 }}
            className="w-full h-fit bg-neutral-900 absolute right-0 top-[4rem] z-50 text-white block md:hidden p-4  "
          >
            {SideBarItem.map((item) => (
              <a key={item.id} href={item.link}>
                <div
                  
                  className="w-[80%] mx-auto p-4 bg-neutral-800 flex  gap-2 justify-center items-center rounded-md mb-2  "
                >
                  {item.icon}
                  <h1>{item.name} </h1>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;

interface SideBarProps extends NavData {
  icon: React.ReactNode;
}

const SideBarItem: SideBarProps[] = [
  { icon: <IconHomeFilled />, id: 0, name: "Home", link: "/home" },
  { icon: <IconAddressBook />, id: 1, name: "Contact", link: "/contact" },
  { icon: <IconCurrencyYen />, id: 2, name: "Culture", link: "/culture" },
];
