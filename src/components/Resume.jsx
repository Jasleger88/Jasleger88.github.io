import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    const resumeLink = "https://docs.google.com/document/d/19jQwIYEK_gSqGayj6GDH2wcJpyuMFULJEY_LWi7J5ak/edit?usp=sharing";

    return (
        <div className="container2">
            {/* <h2 className="title">Resume</h2>
            <iframe 
                src={resumeLink} 
                title="Resume"
                className="resume-iframe"
            /> */}
            <a 
                href={resumeLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="resume-link"
            >
                View My Resume
            </a>
           
        </div>
           
    );
}

export default Resume;
