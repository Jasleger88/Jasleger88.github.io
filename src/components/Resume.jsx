import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
    // Direct PDF URL for the resume
    const resumeLink = "https://drive.google.com/file/d/1xFaX-5V4zIYpsYtHwk1cEy-IfKb7l3C8/view?usp=sharing"; // Replace with your actual PDF URL

    return (
        <div className="container2">
            <h2 className="title">Resume</h2>
            {/* Use a link to open the PDF in a new tab */}
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
