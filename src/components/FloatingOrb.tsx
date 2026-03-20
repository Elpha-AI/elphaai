import { motion } from "framer-motion";

interface FloatingOrbProps {
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  delay?: number;
}

const FloatingOrb = ({ size = 300, top, left, right, delay = 0 }: FloatingOrbProps) => {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        background: "radial-gradient(circle, hsl(348 75% 58% / 0.08) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      animate={{
        y: [0, -15, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingOrb;
