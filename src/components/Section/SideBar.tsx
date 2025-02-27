import { RootState } from "@/store/store";
import { NavData, navdata } from "@/utils/navbarData";
import {
  IconAddressBook,
  IconCurrencyYen,
  IconCurrencyZloty,
  IconHome,
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
            className="w-full h-screen bg-neutral-900 absolute right-0 top-0 z-50 text-white block md:hidden p-4  "
          >
            {SideBarItem.map((item) => (
              <div
                key={item.id}
                className="w-[80%] mx-auto p-4 bg-neutral-800 flex  gap-2 justify-center items-center rounded-md mb-2 "
              >
                {item.icon}
                <h1>{item.name} </h1>
              </div>
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
  { icon: <IconHomeFilled />, id: 0, name: "Home", link: "/" },
  { icon: <IconAddressBook />, id: 0, name: "Contact", link: "/contact" },
  { icon: <IconCurrencyYen />, id: 0, name: "Culture", link: "/culture" },
];
