// components/ui/splash-screen.tsx
"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import animatedQuinchLogo from "@/public/images/animated-quinch-logo.gif";

interface SplashScreenProps {
  /** Called after the slide-up animation finishes */
  onSlideEnd: () => void;
}

export default function SplashScreen({ onSlideEnd }: SplashScreenProps) {
  const gifDuration = 4000; // your GIF length in ms
  const slideDuration = 700; // slide+curve duration in ms
  const highlightDelayOffset = 0.05; // seconds delay for highlight layer

  // once GIF + slide have run, tell parent to unmount
  useEffect(() => {
    const timer = setTimeout(onSlideEnd, gifDuration + slideDuration);
    return () => clearTimeout(timer);
  }, [onSlideEnd]);

  return (
    <>
      {/* Highlight layer: slides up slightly delayed with same curve */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          backgroundColor: "var(--color-highlight)",
          overflow: "hidden",
        }}
        initial={{ y: 0, borderRadius: "0px" }}
        animate={{
          y: "-100%",
          borderRadius: "0px 0px 1000px 1000px",
        }}
        transition={{
          delay: gifDuration / 1000 + highlightDelayOffset,
          duration: slideDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
          bounce: 0.75,
        }}
      />

      {/* Main splash layer */}
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--color-background)",
          overflow: "hidden",
        }}
        initial={{ y: 0, borderRadius: "0px" }}
        animate={{
          y: "-100%",
          borderRadius: "0px 0px 1000px 1000px",
        }}
        transition={{
          delay: gifDuration / 1000,
          duration: slideDuration / 1000,
          ease: [0.22, 1, 0.36, 1],
          bounce: 0.75,
        }}
      >
        <Image
          src={animatedQuinchLogo}
          alt="Animated Quinch Logo"
          width={200}
          height={200}
          priority
        />
      </motion.div>
    </>
  );
}
