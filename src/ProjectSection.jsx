import React from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Draggable Project Card Component
const DraggableCard = ({ project, index, moveCard }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "PROJECT",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: "PROJECT",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveCard(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-pink-500 mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-pink-500 hover:underline"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

const ProjectsSection = ({ projects }) => {
  const moveCard = (fromIndex, toIndex) => {
    const updatedProjects = [...projects];
    const [movedCard] = updatedProjects.splice(fromIndex, 1);
    updatedProjects.splice(toIndex, 0, movedCard);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <section
        id="projects"
        className="bg-gradient-to-br from-pink-100 via-purple-100 to-pink-200 py-12 px-6 text-gray-800"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-pink-600">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <DraggableCard
                key={index}
                project={project}
                index={index}
                moveCard={moveCard}
              />
            ))}
          </div>
        </div>
      </section>
    </DndProvider>
  );
};

export default ProjectsSection;
