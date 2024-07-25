import React from "react";
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="title">My Deployed Projects</h2>
      <div className="project">
        <img src="https://i.imgur.com/vhlQEdu.png" alt="Code-Dash Quiz App" className="animated-image" />
        <a href="https://jasleger88.github.io/Code-Dash-Quiz-JavaScript-CSS" className="button is-warning" target="_blank" rel="noopener noreferrer">
          Code-Dash Quiz App
        </a>
      </div>
      <div className="project">
        <img src="https://i.imgur.com/dobCSHM.png" alt="Reader's Nest" className="animated-image" />
        <a href="https://reader-nest-app.netlify.app" className="button is-warning" target="_blank" rel="noopener noreferrer">
          Reader's Nest
        </a>
      </div>
      <div className="project">
        <img src="https://i.imgur.com/C33Xgri.jpeg" alt="Shirtify App" className="animated-image" />
        <a href="https://shirtify-wishlist.netlify.app" className="button is-warning" target="_blank" rel="noopener noreferrer">
          Shirtify App
        </a>
      </div>
      <div className="project">
        <img src="https://i.imgur.com/HZLEshQ.jpeg" alt="Active-Tracker App" className="animated-image" />
        <a href="https://jasmine-ga-project.netlify.app" className="button is-warning" target="_blank" rel="noopener noreferrer">
          Active-Tracker App
        </a>
      </div>
    </div>
  );
};

export default Projects;

