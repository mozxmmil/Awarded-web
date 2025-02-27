"use client"
import React from "react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "@/store/store";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-black">
      <Provider store={store}>
        <Navbar />
        {children}
      </Provider>
    </div>
  );
};

export default Layout;
