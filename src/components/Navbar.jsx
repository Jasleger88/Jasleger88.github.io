import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();



    return (
        <div className= "navbar">
            <Link to="/" className="button is warning"></Link>
        </div>
    );
};

export default Navbar;