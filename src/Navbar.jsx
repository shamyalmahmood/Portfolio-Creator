import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animation variants for links
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className="bg-gradient-to-br from-pink-200 to-purple-200 shadow-md fixed top-0 w-full z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold text-pink-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          MyPortfolio
        </motion.a>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-6">
          {["Home", "About", "Projects", "Contact"].map((link, index) => {
            const icons = [faHome, faUser, faBriefcase, faEnvelope];
            const hrefs = ["#home", "#about", "#projects", "#contact"];
            return (
              <motion.a
                key={link}
                href={hrefs[index]}
                className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <FontAwesomeIcon icon={icons[index]} />
                {link}
              </motion.a>
            );
          })}
        </nav>

        {/* Hamburger Menu for Mobile */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
          whileHover={{ scale: 1.1 }}
        >
          <svg
            className="w-6 h-6 text-pink-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </motion.button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-gradient-to-br from-pink-200 to-purple-200 shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 p-6">
              {["Home", "About", "Projects", "Contact"].map((link, index) => {
                const icons = [faHome, faUser, faBriefcase, faEnvelope];
                const hrefs = ["#home", "#about", "#projects", "#contact"];
                return (
                  <motion.a
                    key={link}
                    href={hrefs[index]}
                    className="flex items-center gap-2 text-gray-700 hover:text-pink-500 transition"
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <FontAwesomeIcon icon={icons[index]} />
                    {link}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;
