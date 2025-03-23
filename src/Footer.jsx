import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-300 to-purple-300 py-6 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} MyPortfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
