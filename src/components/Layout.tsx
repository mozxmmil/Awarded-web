"use client";
import React from "react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import SideBar from "./Section/SideBar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className=" bg-black relative  ">
      <Provider store={store}>
        <Navbar />
        <SideBar />
        {children}
      </Provider>
    </div>
  );
};

export default Layout;
