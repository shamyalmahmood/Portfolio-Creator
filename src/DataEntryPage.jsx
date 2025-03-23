import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DataEntryPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: "",
    skills: "",
    interests: "",
    description: "",
    projects: [{ title: "", description: "", image: "", github: "" }],
    socialMedia: [{ name: "", url: "" }],
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProject = () => {
    setFormData({
      ...formData,
      projects: [...formData.projects, { title: "", description: "", image: "", github: "" }],
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleAddSocialMedia = () => {
    setFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, { name: "", url: "" }],
    });
  };

  const handleSocialMediaChange = (index, field, value) => {
    const updatedSocialMedia = [...formData.socialMedia];
    updatedSocialMedia[index][field] = value;
    setFormData({ ...formData, socialMedia: updatedSocialMedia });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    navigate("/portfolio", { state: formData });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 p-8">
      <div className="container mx-auto p-8 bg-white rounded-xl shadow-lg max-w-3xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Welcome to the Portfolio Generator</h2>
          <p className="text-gray-700">
            On this page, you'll enter all the necessary details, including your personal information,
            projects, and social media links. Once submitted, we’ll generate a stunning, professional portfolio for you to showcase your work and skills. Let’s get started!
          </p>
        </div>

      <form onSubmit={handleSubmit}>
        {
        /* Student Details */}
        <div className="row mb-8">
          <h4 className="text-xl font-semibold text-pink-400 mb-4">Student Details</h4>
          <div className="input-group input-group-icon mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <div className="input-icon">
              <i className="fa fa-user"></i>
            </div>
          </div>
          <div className="input-group input-group-icon mb-4">
            <textarea
              name="bio"
              placeholder="Bio"
              value={formData.bio}
              onChange={handleInputChange}
              className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
            <div className="input-icon">
              <i className="fa fa-pencil"></i>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="row mb-8">
          <h4 className="text-xl font-semibold text-pink-400 mb-4">About Me</h4>
          <div className="input-group input-group-icon mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFormData({ ...formData, profilePicture: e.target.files[0] })}
              className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="input-icon">
              <i className="fa fa-upload"></i>
            </div>
          </div>
          <div className="input-group input-group-icon mb-4">
            <textarea
              name="skills"
              placeholder="Skills"
              value={formData.skills}
              onChange={handleInputChange}
              className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <div className="input-icon">
              <i className="fa fa-cogs"></i>
            </div>
          </div>
          <div className="input-group input-group-icon mb-4">
            <textarea
              name="interests"
              placeholder="Interests"
              value={formData.interests}
              onChange={handleInputChange}
              className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <div className="input-icon">
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="input-group input-group-icon mb-4">
            <textarea
              name="description"
              placeholder="Detailed Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
            <div className="input-icon">
              <i className="fa fa-book"></i>
            </div>
          </div>
        </div>
        
        {/* Projects Section */}
        <div className="row mb-8">
          <h4 className="text-xl font-semibold text-pink-400 mb-4">Projects</h4>
          {formData.projects.map((project, index) => (
            <div key={index} className="input-group mb-4">
              <input
                type="text"
                placeholder="Project Title"
                value={project.title}
                onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-2"
                required
              />
              <textarea
                placeholder="Project Description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, "description", e.target.value)}
                className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-2"
                required
              ></textarea>
              <input
                type="text"
                placeholder="Project Image URL"
                value={project.image}
                onChange={(e) => handleProjectChange(index, "image", e.target.value)}
                className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-2"
              />
              <input
                type="text"
                placeholder="GitHub Link"
                value={project.github}
                onChange={(e) => handleProjectChange(index, "github", e.target.value)}
                className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddProject}
            className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Add Project
          </button>
        </div>

        {/* Social Media Section */}
        <div className="row mb-8">
          <h4 className="text-xl font-semibold text-pink-400 mb-4">Social Media</h4>
          {formData.socialMedia.map((link, index) => (
            <div key={index} className="input-group mb-4">
              <input
                type="text"
                placeholder="Platform Name"
                value={link.name}
                onChange={(e) => handleSocialMediaChange(index, "name", e.target.value)}
                className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 mb-2"
                required
              />
              <input
                type="text"
                placeholder="Profile URL"
                value={link.url}
                onChange={(e) => handleSocialMediaChange(index, "url", e.target.value)}
                className="w-full p-4 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSocialMedia}
            className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Add Social Media
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
        >
          Submit / Generate Portfolio
        </button>
      </form>
    </div>
    </div>
  );
};
export default DataEntryPage;
