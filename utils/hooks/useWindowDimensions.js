import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState({
    width: undefined || 0,
    height: undefined || 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}
