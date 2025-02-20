
import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full bg-zinc-600">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
