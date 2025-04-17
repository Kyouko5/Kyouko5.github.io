/*
 * @Author: Kyouko
 * @Date: 2025-04-17 21:59:12
 * @LastEditTime: 2025-04-17 22:27:10
 * @Description: 请输入文件描述
 * @FilePath: /page/src/components/About.tsx
 */
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/portfolio";

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="about" className="section-container">
      <motion.h2
        className="section-title"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div
          className="md:col-span-3"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-tertiary mb-4">
            Hello! I'm Kyouko, a college student from China with a passion for technology and web development.
            My journey into coding began during my first year of university when I first met coding and
            discovered the creative potential of building websites and applications.
          </p>
          <p className="text-tertiary mb-4">
            Currently, I'm pursuing my degree in Computer Science, where I've been able to explore various
            programming languages and frameworks. Outside of classes, I enjoy learning new technologies and exploring
            new things.
          </p>
          <p className="text-tertiary mb-8">
            Here are a few technologies I've been working with recently:
          </p>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="text-tertiary flex items-center font-mono text-sm"
              >
                <span className="text-primary mr-2">▹</span>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="md:col-span-2 flex justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative group w-64 h-64">
            <div className="absolute inset-0 rounded bg-primary/20 translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-5 group-hover:translate-y-5"></div>
            <div className="absolute inset-0 overflow-hidden rounded border-2 border-primary">
              <div className="absolute inset-0 bg-primary/10 transition-opacity duration-300 group-hover:opacity-0 z-10"></div>
              <Image
                src="/images/profile.jpg"
                alt="Profile Image"
                fill
                sizes="256px"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 