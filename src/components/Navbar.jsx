import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Link to="/" className="button is-success is-dark">Welcome to My Portfolio</Link>
            {/* <Link to="/Aboutme" className= "button is-success is-dark"> About Me</Link>
            <Link to="/projects" className="button is-success is-dark">Projects</Link> */}
            <Link to="/Resume" className="button is-success is-dark">Resume</Link>
            
        </div>
    );
};

export default Navbar;