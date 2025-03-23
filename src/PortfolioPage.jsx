import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutMeSection from "./AboutMe";
import ProjectsSection from "./ProjectSection";
import ContactSection from "./Contact";
import Footer from "./Footer";

const PortfolioPage = () => {
  const location = useLocation(); // Access the navigation state
  const navigate = useNavigate(); // For redirection if no data is available

  // Retrieve the user data passed from DataEntryPage
  const userData = location.state;

  // Handle case when no data is passed
  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">No data provided. Please go back and enter your information.</p>
        <button
          onClick={() => navigate("/")}
          className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection name={userData.name} bio={userData.bio} />

      {/* About Me Section */}
      <AboutMeSection
        profilePicture={userData.profilePicture ? URL.createObjectURL(userData.profilePicture) : null}
        skills={userData.skills.split(",")}
        interests={userData.interests.split(",")}
        description={userData.description}
      />

      {/* Projects Section */}
      <ProjectsSection projects={userData.projects} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortfolioPage;
