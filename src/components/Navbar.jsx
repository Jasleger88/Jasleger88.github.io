import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import './Navbar.css'; // Ensure you have corresponding CSS for styling

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + 100; 

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(section.getAttribute("id"));
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); 

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="navbar">
            <Link
                to="/"
                className={`button is-success is-dark ${activeSection === "home" ? "active" : ""}`}
            >
                Welcome to My Portfolio
            </Link>
            <Link
                to="/aboutme"
                className={`button is-success is-dark ${activeSection === "aboutme" ? "active" : ""}`}
            >
                About Me
            </Link>
            <Link
                to="/projects"
                className={`button is-success is-dark ${activeSection === "projects" ? "active" : ""}`}
            >
                Projects
            </Link>
            {/* <Link
                to="/interests"
                className={`button is-success is-dark ${activeSection === "interests" ? "active" : ""}`}
            >
                Interests
            </Link> */}
            {/* <Link
                to="/resume"
                className={`button is-success is-dark ${activeSection === "resume" ? "active" : ""}`}
            >
                Resume
            </Link> */}
        </div>
    );
};

export default Navbar;

