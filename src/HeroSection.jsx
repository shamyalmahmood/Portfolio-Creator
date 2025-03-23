import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ name, bio, onViewWork }) => {
  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 text-gray-800 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl p-6">
        <motion.div
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <h1 className="text-4xl font-bold mb-4 text-pink-600">{name || "Your Name"}</h1>
        <p className="text-lg text-gray-700 mb-6">{bio || "Welcome to my portfolio! I'm excited to showcase my work and skills."}</p>
        <motion.button
          onClick={onViewWork}
          className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
