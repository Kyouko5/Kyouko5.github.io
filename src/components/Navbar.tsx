import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollDirection, ScrollDirection } from "@/hooks/useScrollDirection";
import { navLinks, siteConfig } from "@/data/portfolio";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "bg-transparent py-6"
      } ${
        scrollDirection === ScrollDirection.DOWN && isScrolled && !isMenuOpen
          ? "-translate-y-full"
          : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-primary font-mono text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          &lt;{siteConfig.name.split(" ")[0][0]}{siteConfig.name.split(" ")[1]?.[0] || ""} /&gt;
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <a
                  href={link.url}
                  className="font-mono text-sm text-secondary hover:text-primary transition-colors duration-300"
                >
                  <span className="text-primary">{`0${i + 1}.`}</span> {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <a
                href="/resume.pdf"
                className="font-mono text-sm px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-secondary focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span
              className={`block h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "w-4"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-primary transition-all duration-300 ${
                isMenuOpen ? "w-6 rotate-45 -translate-y-2" : "w-5"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-background z-40 md:hidden transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="h-full flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="font-mono text-lg text-secondary hover:text-primary transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-primary">{`0${i + 1}.`}</span> {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  className="font-mono text-lg mt-4 px-6 py-3 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 