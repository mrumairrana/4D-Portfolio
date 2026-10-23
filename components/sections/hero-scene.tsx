"use client";

import { useRef, type FC } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import { useSceneActive } from "@/hooks/use-scene-active";

export const HeroScene: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const frame = useRef<HTMLElement>(null);
  const active = useSceneActive({ whenVisible: frame });

  return (
    <figure
      ref={frame}
      className="absolute inset-0 flex items-center justify-center"
      style={{ width: "150vw", height: "100vh" }}
    >
      <motion.img
        src="/assets/1UR.png"
        alt="Umair Rana"
        initial={{ opacity: 0, y: 100, rotate: -10 }}
        animate={active ? { opacity: 1, y: 0, rotate: 0 } : {}}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        className={`object-contain drop-shadow-2xl ${
          isMobile ? "w-64 h-64" : "w-96 h-96"
        }`}
      />
    </figure>
  );
};
