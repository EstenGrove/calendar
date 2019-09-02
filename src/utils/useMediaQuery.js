import { useState, useEffect } from "react";

export const useMediaQuery = callback => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      console.log(width, height);
      if (!callback) {
        return;
      }
      callback(); // only run callback is one is passed to "useMediaQuery"
    };
    // add window tracking
    window.addEventListener("resize", handleResize);

    // handle cleanup, remove tracking
    return () => window.removeEventListener("resize", handleResize);
  });
  return { width, height };
};
