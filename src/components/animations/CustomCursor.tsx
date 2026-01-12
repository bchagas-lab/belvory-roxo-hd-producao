import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let trailId = 0;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
      
      // Add trail dot
      const newDot: TrailDot = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
      };
      
      setTrail((prev) => [...prev.slice(-12), newDot]);
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

  // Clean up old trail dots
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(-8));
    }, 50);
    return () => clearInterval(interval);
  }, []);

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

      {/* Trail dots */}
      {trail.map((dot, index) => (
        <motion.div
          key={dot.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: 4 + index * 0.5,
            height: 4 + index * 0.5,
            x: "-50%",
            y: "-50%",
            background: `radial-gradient(circle, hsl(var(--primary) / ${0.1 + index * 0.05}) 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-primary"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 50 : 32,
          height: isHovering ? 50 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? "hsl(var(--secondary))" : "hsl(var(--primary))",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full bg-primary"
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? "hsl(var(--secondary))" : "hsl(var(--primary))",
          boxShadow: isHovering 
            ? "0 0 20px 4px hsl(var(--secondary) / 0.6)" 
            : "0 0 10px 2px hsl(var(--primary) / 0.4)",
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[9997] rounded-full"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          width: 60,
          height: 60,
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
