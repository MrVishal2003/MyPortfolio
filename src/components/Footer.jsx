import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-14 pb-14">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="container mx-auto text-center"
      >
        <p className="text-white text-xl mb-4">
          Developed with{" "}
          <motion.span
            className="text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ❤
          </motion.span>{" "}
          by Vishal Hadiyal
        </p>

        <div className="flex justify-center space-x-6 text-white mb-6">
          <a
            href="https://www.linkedin.com/in/vishal-hadiyal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
              size={24}
            />
          </a>
          <a
            href="https://www.instagram.com/hadiyal_.1211"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
              size={24}
            />
          </a>
          <a
            href="https://github.com/MrVishal2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-white transition ease-in-out delay-100 hover:-translate-y-1"
              size={24}
            />
          </a>
          <a
            href="https://x.com/Hadiyalvishal11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX
              className="text-white transition ease-in-out delay-100 hover:-translate-y-2"
              size={24}
            />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="text-sm text-blue-500 underline mb-4"
        >
          Back to Top
        </button>

        <p className="text-white text-sm">
          © {currentYear} Vishal Hadiyal. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
