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
            description: "Meet My Hero"
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
            description: "Senior Class Advisor"
        },
        {
            url: "https://i.imgur.com/aDKIhrL.jpeg",
            description: "Volleyball Coach"
        },
        {
            url: "https://i.imgur.com/yHXCDjU.jpeg",
            description: "Driven Instructor"
        },
        {
            url: "https://i.imgur.com/f0BNuoD.jpeg",
            description: "Educator"
        },
        {
            url: "https://i.imgur.com/8iEkbVn.jpeg",
            description: "Passionate Mother"
        },
        {
            url: "https://i.imgur.com/fqSVQIc.jpeg",
            description: "Mom Warrior"
        },
        {
            url: "https://i.imgur.com/1rFYXPq.jpeg",
            description: "My daughter’s resilience drives my ambition"
        },

        {
            url: "https://i.imgur.com/FLR48kZ.jpeg",
            description: "Committed to Physical Well-being"
        },

        {
            url: "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D",
            description: "Passion for Reading"
        },
        {
            url: "https://media.istockphoto.com/id/1987072871/photo/the-city-of-positano-on-the-amalfi-coast-italy.webp?b=1&s=170667a&w=0&k=20&c=XnxhlzbzZ9tvCFvG3W4Xpe-ze0Kqi_8lzvwOZM9HVyo=",
            description: "Enthusiastic Traveler"
        }
    ];

    return (
        <>
            <div className="image-grid">
                <h2 className="title">About Me</h2>
                <p>
                    <span>I am a software engineer with a background in education, driven by a commitment to growth and innovation. Inspired by my daughter's resilience as a cancer survivor, I embraced software development, even attending 4 AM classes while abroad. With 13+ years as an educator, I’ve developed strong skills in communication, teamwork, and program management, which I bring to every project</span>
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
