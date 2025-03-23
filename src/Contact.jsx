import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    setSuccessMessage("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });

    // Clear the success message after 3 seconds
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 py-12 px-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">
          Contact Me
        </h2>
        {successMessage && (
          <motion.div
            className="mb-6 text-center text-green-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {successMessage}
          </motion.div>
        )}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4">
            <label className="block font-semibold mb-2">Name</label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your name"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Email</label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Enter your email"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold mb-2">Message</label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your message"
              rows="5"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;
