import React from "react";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  useEffect(() => {
    const handlePosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };
    window.addEventListener("mousemove", handlePosition);
    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);

  return { position };
};

export default useMousePosition;
