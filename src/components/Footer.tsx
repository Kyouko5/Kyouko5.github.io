import React from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiCode } from "react-icons/fi";
import { siteConfig } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-background py-8 mt-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="flex items-center justify-center space-x-6 mb-6">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors duration-300"
            aria-label="Twitter"
          >
            <FiTwitter size={20} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors duration-300"
            aria-label="Instagram"
          >
            <FiInstagram size={20} />
          </a>
          <a
            href={siteConfig.social.codepen}
            target="_blank"
            rel="noopener noreferrer"
            className="text-tertiary hover:text-primary transition-colors duration-300"
            aria-label="CodePen"
          >
            <FiCode size={20} />
          </a>
        </div>
        <div className="text-center">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-tertiary hover:text-primary transition-colors duration-300"
          >
            Designed & Built by {siteConfig.name}
          </a>
          <p className="font-mono text-xs text-tertiary mt-2">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 