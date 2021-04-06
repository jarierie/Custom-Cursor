import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { useState, useEffect } from "react";
import giphy from "./assets/giphy.gif";

const CursorMain = styled(motion.div)`
  position: absolute;

  width: 5em;
  height: 5em;
  border-radius: 50%;

  border-color: white;
  z-index: 20;
`;

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 100, y: 100 });
  useEffect(() => {
    const handlePosition = (e) => {
      setMousePosition({
        x: e.pageX,
        y: e.pageY,
      });
    };
    window.addEventListener("mousemove", handlePosition);
  }, []);

  return (
    <>
      <CursorMain
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
          scale: 0.5,
          opacity: 1,
        }}
        transition={{
          ease: "linear",
          duration: 0.1,
        }}
      >
        <img src={giphy} alt='customCursor'></img>{" "}
      </CursorMain>
    </>
  );
};

export default Cursor;
