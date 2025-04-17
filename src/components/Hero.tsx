
import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-8 md:px-12 lg:px-24 pt-24"
    >
      <div className="max-w-5xl">
        <motion.p
          className="font-mono text-primary mb-5 text-sm md:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          你好！I'm
        </motion.p>
        
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {siteConfig.name}.
        </motion.h1>
        
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-tertiary mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          I create digital experiences while learning coding.
        </motion.h2>
        
        <motion.p
          className="text-tertiary max-w-xl mb-12 text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          {siteConfig.description}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <a
            href="#work"
            className="font-mono px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300 inline-block"
          >
            Check out my projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 