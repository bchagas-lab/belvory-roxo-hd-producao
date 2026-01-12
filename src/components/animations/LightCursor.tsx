import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const LightCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor globally */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer glow */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 50 : 35,
          height: isHovering ? 50 : 35,
          opacity: isVisible ? 0.4 : 0,
          boxShadow: isHovering 
            ? "0 0 30px 10px hsla(270, 80%, 60%, 0.6)" 
            : "0 0 25px 8px hsla(270, 70%, 55%, 0.5)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 14 : 10,
          height: isHovering ? 14 : 10,
          opacity: isVisible ? 1 : 0,
          background: isHovering 
            ? "hsla(270, 100%, 75%, 1)"
            : "hsla(270, 80%, 65%, 1)",
          boxShadow: isHovering 
            ? "0 0 15px 4px hsla(270, 80%, 60%, 0.9), 0 0 30px 8px hsla(270, 80%, 50%, 0.5)" 
            : "0 0 12px 3px hsla(270, 70%, 55%, 0.8), 0 0 25px 6px hsla(270, 60%, 45%, 0.4)",
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default LightCursor;
