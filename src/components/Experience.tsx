import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { jobs } from "@/data/portfolio";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section id="experience" className="section-container">
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
        Where I've Worked
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row max-w-3xl"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Tab list */}
        <div className="flex md:flex-col overflow-x-auto mb-8 md:mb-0 md:mr-8 md:w-48 border-b md:border-b-0 md:border-l border-tertiary/30">
          {jobs.map((job, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`py-3 px-4 font-mono text-sm whitespace-nowrap md:border-l-2 ${
                activeTab === i 
                  ? "text-primary border-primary" 
                  : "text-tertiary hover:text-secondary border-transparent"
              } transition-all duration-300 focus:outline-none`}
              style={{ 
                transform: activeTab === i ? "translateY(-2px)" : "none",
                marginLeft: "-2px" 
              }}
            >
              {job.company}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="py-2">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl text-secondary">
              <span>{jobs[activeTab].title}</span>
              <span className="text-primary"> @ {jobs[activeTab].company}</span>
            </h3>
            
            <p className="font-mono text-xs text-tertiary">
              {jobs[activeTab].date}
            </p>
            
            <ul className="space-y-2">
              {jobs[activeTab].description.map((item, i) => (
                <li key={i} className="text-tertiary flex">
                  <span className="text-primary mr-2 pt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience; 