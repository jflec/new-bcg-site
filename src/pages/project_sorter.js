import React, { useState } from "react";
import Image from "next/image";

const ProjectSorter = ({ projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeButton, setActiveButton] = useState("all");

  const handleSort = (type) => {
    setActiveButton(type);
    console.log(activeButton);
    if (type === "all") {
      setFilteredProjects(projects);
    } else {
      const sortedProjects = projects.filter(
        (project) => project.type === type
      );
      setFilteredProjects(sortedProjects);
    }
  };

  return (
    <div className="projects-page-container">
      <div className="projects-button-container">
        <button
          onClick={() => handleSort("all")}
          className={activeButton === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleSort("modpack")}
          className={activeButton === "modpack" ? "active" : ""}
        >
          Modpacks
        </button>
        <button
          onClick={() => handleSort("mod")}
          className={activeButton === "mod" ? "active" : ""}
        >
          Mods
        </button>
        <button
          onClick={() => handleSort("texture-pack")}
          className={activeButton === "texture-pack" ? "active" : ""}
        >
          Texture Packs
        </button>
      </div>
      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <div className="project" key={index}>
            {project.src && (
              <Image
                src={project.src}
                alt={project.title}
                width={100}
                height={100}
              />
            )}
            <div className="project-info">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h1>{project.title}</h1>
              </a>
              <p>{project.summary}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSorter;
