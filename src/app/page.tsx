import Landing_Page from "@/components/Landing_Page";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "home",
  description: "home page ",
};
const page = () => {
  return (
    <>
      <Landing_Page />
    </>
  );
};

export default page;
