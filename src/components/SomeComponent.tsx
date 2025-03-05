import React from "react";
import { navdata } from "@/utils/navbarData";
import { IconHome } from "@tabler/icons-react";

const SomeComponent = () => {
  return (
    <div>
      {navdata.map((item) => (
        <div key={item.id}>
          {item.name}
          {item.iconType === "home" && <IconHome />}
        </div>
      ))}
    </div>
  );
};

export default SomeComponent;
