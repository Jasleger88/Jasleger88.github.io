import React from "react";
import '../styles/Projects.css';

const Projects = () => {
    return (
      <div className="projects-container">
        {/* <h2 className="title">My Deployed Projects</h2> */}
        <div className="project">
          <img src="https://i.imgur.com/vhlQEdu.png" alt="Code-Dash Quiz App" className="animated-image" />
          <div className="project-info">
            <a href="https://jasleger88.github.io/Code-Dash-Quiz-JavaScript-CSS" className="button is-warning" target="_blank" rel="noopener noreferrer">
              Code-Dash Quiz App
            </a>
            <p>Project Overview: Code-Dash is an interactive quiz game that educates novice coders on JavaScript and CSS fundamentals through engaging, real-time challenges.</p>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/dobCSHM.png" alt="Reader's Nest" className="animated-image" />
          <div className="project-info">
            <a href="https://reader-nest-app.netlify.app" className="button is-warning" target="_blank" rel="noopener noreferrer">
              Reader's Nest
            </a>
            <p>Project Overview: Readers Nest is a dynamic app that connects readers, allowing them to track their reading, share books, and engage with a reading community.</p>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/C33Xgri.jpeg" alt="Shirtify App" className="animated-image" />
          <div className="project-info">
            <a href="https://shirtify-wishlist.netlify.app" className="button is-warning" target="_blank" rel="noopener noreferrer">
              Shirtify App
            </a>
            <p>Project Overview: Shirtify is a dynamic web application allowing users to browse, customize, and share shirt designs with ease.
            </p>
          </div>
        </div>
        <div className="project">
          <img src="https://i.imgur.com/HZLEshQ.jpeg" alt="Active-Tracker App" className="animated-image" />
          <div className="project-info">
            <a href="https://jasmine-ga-project.netlify.app" className="button is-warning" target="_blank" rel="noopener noreferrer">
              Active-Tracker App
            </a>
            <p>Project Overview: Active Tracker is a web application designed to help users efficiently track and manage their fitness activities.</p>
          </div>
        </div>
      </div>
    );
  };
  

export default Projects;

