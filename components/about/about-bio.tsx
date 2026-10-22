"use client";

import { useRef, type FC } from "react";
import { motion, useInView } from "motion/react";
import { fadeInUp } from "@/animations/scroll-animations";
import { HERO_LOCATION, HERO_NAME } from "@/constants/hero-constants";

export const AboutBio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
      className="glass gradient-border p-8 md:p-10 lg:col-span-7"
    >
      <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-400">
        Who I Am
      </p>

      <h3 className="mb-4 text-2xl font-bold md:text-3xl">
        {HERO_NAME} · {HERO_LOCATION}
      </h3>

      <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
        I’m a <span className="font-semibold text-white">Full-Stack Developer</span>{" "}
        specializing in modern web application development with React.js, Node.js,
        JavaScript, and REST APIs. I enjoy building responsive, scalable, and
        user-friendly applications with a strong focus on clean code, performance,
        and reliable solutions.
      </p>

      <p className="mt-4 leading-relaxed text-neutral-400">
        I have hands-on experience with{" "}
        <span className="text-white">
          React.js, Node.js, Express.js, PostgreSQL, MongoDB, Redux, Docker, Nginx,
          Vite, Git, and GitHub
        </span>
        , along with frontend and backend development, API integration,
        authentication, debugging, database management, and deployment.
      </p>

      <p className="mt-4 leading-relaxed text-neutral-400">
        My experience allows me to work across the{" "}
        <span className="font-medium text-white">full development lifecycle</span>,
        from designing responsive user interfaces and developing reusable frontend
        components to building backend services, integrating APIs, managing databases,
        and deploying applications.
      </p>

      <p className="mt-4 leading-relaxed text-neutral-400">
        I’m continuously learning new technologies, improving my problem-solving
        skills, and building real-world applications. I’m always interested in
        creating practical, scalable solutions and collaborating{" "}
        <span className="font-medium text-white">with you!</span>
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href="#contact" className="btn-primary">
          <span>Start a project</span>
          <span aria-hidden>→</span>
        </a>
        <a href="#work" className="btn-ghost">
          <span>See past work</span>
        </a>
      </div>
    </motion.div>
  );
};
