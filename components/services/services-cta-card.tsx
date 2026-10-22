"use client";

import { type FC } from "react";
import { motion } from "motion/react";
import { revealProps } from "@/animations/scroll-animations";

export const ServicesCtaCard: FC = () => (
  <motion.div
    {...revealProps()}
    className="glass gradient-border relative z-10 mt-24 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10"
  >
    <div>
      <p className="text-eyebrow mb-2">Let&apos;s Work Together</p>

      <h3 className="text-2xl font-bold md:text-3xl">
        Have an Idea? Let&apos;s Bring It to Life.
      </h3>

      <p className="mt-2 max-w-xl text-neutral-400">
        Have a website, web application, or business solution in mind? Share your
        project requirements, and let&apos;s discuss the best approach, development
        timeline, and a solution that fits your goals.
      </p>
    </div>

    <a href="#contact" className="btn-primary">
      <span>Start Your Project</span>
      <span aria-hidden="true">→</span>
    </a>
  </motion.div>
);
