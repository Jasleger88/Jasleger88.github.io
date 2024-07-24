import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../..styles/Home.css'

const Home = () => {
    return (
        <>
            <div className="aboutjasmine">
                <h1> Jasmine Leger</h1>
                <h2> Full- Stack Developer</h2>



            </div>
            <div className="image-grid">
                <img src="https://i.imgur.com/RLIEgIl.jpeg" alt="A picture of the author" />
                <h2> About Me</h2>
                <p> I am a passionate software engineer with a strong interest in fitness, reading, and exploring serene, scenic places. I thrive on continuous learning and seek opportunities to collaborate on diverse projects to further enhance my coding skills. My goal is to develop innovative solutions and write clean, efficient code.

                    I am committed to a balanced lifestyle, combining my technical pursuits with staying active and enjoying peaceful environments that foster creativity. My diverse interests and dedication to self-improvement drive me to excel both personally and professionally.

                    I am eager to connect with teams that share my enthusiasm for technology and innovation. Let's collaborate and create impactful software solutions together!</p>
            </div>
        </>
    )
}

export default Home;