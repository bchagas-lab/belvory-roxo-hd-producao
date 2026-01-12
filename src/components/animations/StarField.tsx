import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  duration: number;
  delay: number;
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));
};

const generateShootingStars = (count: number): ShootingStar[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    startX: Math.random() * 100,
    startY: Math.random() * 50,
    duration: Math.random() * 1 + 0.5,
    delay: Math.random() * 8 + i * 3,
  }));
};

interface StarFieldProps {
  starCount?: number;
  shootingStarCount?: number;
  className?: string;
}

export const StarField = ({
  starCount = 100,
  shootingStarCount = 3,
  className = "",
}: StarFieldProps) => {
  const starsRef = useRef<Star[]>(generateStars(starCount));
  const shootingStarsRef = useRef<ShootingStar[]>(
    generateShootingStars(shootingStarCount)
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Static twinkling stars */}
      {starsRef.current.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStarsRef.current.map((shootingStar) => (
        <motion.div
          key={`shooting-${shootingStar.id}`}
          className="absolute w-1 h-1"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            x: [0, 150, 300],
            y: [0, 75, 150],
          }}
          transition={{
            duration: shootingStar.duration,
            repeat: Infinity,
            delay: shootingStar.delay,
            repeatDelay: 8,
            ease: "easeOut",
          }}
        >
          {/* Shooting star head */}
          <div className="absolute w-2 h-2 rounded-full bg-foreground shadow-[0_0_10px_2px_hsl(var(--primary))]" />
          {/* Shooting star tail */}
          <div 
            className="absolute h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent"
            style={{
              width: "60px",
              transform: "rotate(-27deg) translateX(-60px)",
              transformOrigin: "right center",
            }}
          />
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
