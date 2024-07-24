import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className= "navbar">
            <Link to="/" className="button is-warning"> Home</Link>
            <Link to="/projects" className="button is-warning"> Projects</Link>
            <Link to="/skills" className="button is-warning"> Skills</Link>

        </div>
    );
};

export default Navbar;