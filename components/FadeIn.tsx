"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    setMounted(true);
    // Fallback: if IntersectionObserver doesn't fire within 1s, reveal content
    const t = setTimeout(() => setForceVisible(true), 1000);
    return () => clearTimeout(t);
  }, []);

  const xOffset = direction === "left" ? 24 : direction === "right" ? -24 : 0;
  const yOffset = direction === "up" ? 24 : direction === "down" ? -24 : 0;

  // Before mount : div normal, contenu visible (évite opacity:0 côté serveur)
  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={
        isInView || forceVisible
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: yOffset, x: xOffset }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}
