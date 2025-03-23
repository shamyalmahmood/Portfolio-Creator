import React from "react";
import { motion } from "framer-motion";

const AboutMeSection = ({ profilePicture, skills, interests, description }) => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const item = { hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.section
      id="about"
      className="bg-gradient-to-br from-purple-100 via-pink-100 to-pink-200 py-12 px-6 text-gray-800"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg"
          variants={item}
        >
          <img
            src={profilePicture || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h2 className="text-3xl font-bold mb-4 text-pink-600" variants={item}>
          About Me
        </motion.h2>
        <motion.p className="text-lg text-gray-700 mb-8" variants={item}>
          {description || "Hi! I'm passionate about creating innovative applications and exploring new technologies."}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold text-purple-500 mb-3">Skills</h3>
            <ul className="space-y-2">
              {skills?.length ? (
                skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    {skill}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No skills added yet.</li>
              )}
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h3 className="text-2xl font-semibold text-purple-500 mb-3">Interests</h3>
            <ul className="space-y-2">
              {interests?.length ? (
                interests.map((interest, index) => (
                  <li
                    key={index}
                    className="bg-white py-2 px-4 rounded-lg shadow-sm hover:shadow-md transition"
                  >
                    {interest}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No interests added yet.</li>
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMeSection;
