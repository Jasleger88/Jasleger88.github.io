import React from 'react';
import '../styles/Aboutme.css'

const Aboutme = () => {
    const images = [
        {
            url: "https://i.imgur.com/HbRwr2x.jpeg",
            description: "Adventurous Professional with International Experience"
        },
        {
            url: "https://i.imgur.com/Y5pj6bi.jpeg",
            description: "My reason 'Why'"
        },
        {
            url: "https://i.imgur.com/abvFIti.jpeg",
            description: "Culinary Explorer"
        },
        {
            url: "https://i.imgur.com/OUo6NcN.jpeg",
            description: "Worldly Explorer"
        },
        {
            url: "https://i.imgur.com/BsTtqyL.jpeg",
            description: "Project Lead"
        },
        {
            url: "https://i.imgur.com/aDKIhrL.jpeg",
            description: "Volleyball Coach"
        },
  
        {
            url: "https://i.imgur.com/FLR48kZ.jpeg",
            description: "Committed to Physical Well-being"
        }, 
    ];

    return (
        <>
            <div className="image-grid">
                <h2 className="title">About Me</h2>
                <p>
                    <span>I am a software engineer with a background in education, driven by a commitment to growth and innovation. Inspired by my daughter's resilience as a cancer survivor, I embraced software development, even attending 4 AM classes while abroad. With 13+ years as an educator, I’ve developed strong skills in communication, teamwork, and program management, which I bring to every project.</span>
                </p> <br />
                <p>
                    <span>I thrive in collaborative environments and enjoy creating innovative solutions with clean, efficient code. Outside of work, I stay active, explore new cuisines, and travel, maintaining a balanced and positive mindset. I’m eager to join a team that shares my passion for technology and continuous improvement.</span>
                </p> <br />
        
            </div>
            <div className="container">
                <h2 className="title">Interests</h2>
                <div className="card-container">
                    {images.map((image, index) => (
                        <div key={index} className="card">
                            <img src={image.url} alt={`Slide ${index}`} className="card-image" />
                            <p className="card-description">{image.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Aboutme;
