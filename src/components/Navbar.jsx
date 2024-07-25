import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Link to="/" className="button is-link">Home</Link>
            <Link to="/projects" className="button is-link">Projects</Link>
            {/* <Link to="/skills" className="button is-link">Skills</Link> */}
        </div>
    );
};

export default Navbar;