import React, { useState } from "react";

const DarkModeToggle = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-300 transition-all duration-300">
        <div className="flex justify-end p-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 focus:outline-none"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DarkModeToggle;
