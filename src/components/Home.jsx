import React, { useState } from 'react';
import '../styles/Home.css'

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://images.unsplash.com/photo-1547919307-1ecb10702e6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D",
        "https://media.istockphoto.com/id/1987072871/photo/the-city-of-positano-on-the-amalfi-coast-italy.webp?b=1&s=170667a&w=0&k=20&c=XnxhlzbzZ9tvCFvG3W4Xpe-ze0Kqi_8lzvwOZM9HVyo=",
        "https://images.unsplash.com/photo-1508205065970-cad01cebebb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF1Z2h0ZXJ8ZW58MHx8MHx8fDA%3D"
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <>

            <div className="aboutjasmine">

                <h1> Jasmine Leger</h1>
                <h2> Full- Stack Developer</h2>
            </div>
            <div className="image-grid">
                <img src="https://i.imgur.com/RLIEgIl.jpeg" alt="A picture of the author" className="round-image" />
                <h2> About Me</h2>
                <p><p>
                    <span>I am a passionate software engineer with a strong interest in fitness, reading, and exploring serene, scenic places. My journey into software engineering was profoundly inspired by my daughter, a cancer patient. Witnessing her strength and resilience, I said to myself, "If she can do it, I can do anything I put my mind to." To achieve my goal, I attended General Assembly, even taking classes at 4 AM while in another country, driven by my unwavering determination to succeed.</span>

                    <span>With over 13 years of experience as an educator, I have a genuine passion for helping others, teaching, and collaboration. My soft skills include strong teamwork, communication, public speaking, and program management, ensuring everyone is aligned and working towards common goals. I thrive on continuous learning and seek opportunities to collaborate on diverse projects to enhance my coding skills. My goal is to develop innovative solutions and write clean, efficient code. My commitment to a balanced lifestyle combines my technical pursuits with staying active and enjoying peaceful environments that foster creativity.</span>

                    <span>My dedication to self-improvement drives me to excel both personally and professionally. I am eager to connect with teams that share my enthusiasm for technology and innovation. Let's collaborate and create impactful software solutions together!</span>
                </p>
                </p>
            </div>
            <div className="container">
                <h2 className="title">Interests</h2>
                <div className="slider">
                    <div
                        className="slider-wrapper"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((src, index) => (
                            <img key={index} src={src} alt={`Slide ${index}`} className="interest" />
                        ))}
                    </div>
                </div>
                <button className="button is-warning" onClick={prevSlide}>Previous</button>
                <button className="button is-warning" onClick={nextSlide}>Next</button>
            </div>

        </>
    )
}

export default Home;