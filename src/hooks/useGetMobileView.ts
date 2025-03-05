"use client";

import { useEffect, useState } from "react";

const useGetMobileView = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const meadiaQuery = window.matchMedia("(max-width:768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    meadiaQuery.addEventListener("change", handleChange);
    return () => meadiaQuery.removeEventListener("change", handleChange);
  }, []);

  return { isMobile };
};

export default useGetMobileView;
