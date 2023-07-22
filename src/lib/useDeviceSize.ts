"use client";

import React, { useEffect, useState } from "react";

const useDeviceSize = () => {
  const isSSR = typeof window === "undefined";
  const [deviceSize, setDeviceSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceSize;
};

export default useDeviceSize;
