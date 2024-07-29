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
                    <span>I am a passionate software engineer with a robust background in education and a strong commitment to personal and professional growth. My journey into software engineering was deeply inspired by my daughter, a cancer survivor. Witnessing her strength and resilience, I resolved to tackle any challenge head-on, leading me to pursue a rigorous education in software development, including attending General Assembly classes at 4 AM while in another country.</span>
                </p> <br />
                <p>
                    <span>With over 13 years of experience as an educator, I have honed my skills in teaching, teamwork, communication, public speaking, and program management. I thrive on collaboration, ensuring that everyone is aligned and working towards common goals. My technical pursuits are complemented by my dedication to maintaining a balanced lifestyle. I love to travel the world, spend quality time with my daughter, explore new cuisines, and stay active through regular workouts to ensure my mental well-being and relaxation.</span>
                </p> <br />
                <p>
                    <span>As a motivator and team player, I have also coached volleyball, further showcasing my ability to lead and inspire. My passion for helping others and fostering a cohesive team environment drives my commitment to developing innovative solutions and writing clean, efficient code. I excel under pressure and enjoy bringing humor and a positive attitude to the workplace.</span>
                </p> <br />
                <p>
                    <span>I am eager to connect with teams that share my enthusiasm for technology and innovation. Let's collaborate and create impactful software solutions together, leveraging my unique blend of technical expertise, educational background, and passion for continuous improvement.</span>
                </p>

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
