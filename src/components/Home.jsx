import React from 'react';
import Footer from './Footer';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <div id="about-jasmine">
                <h1 id="title-main">Jasmine Leger</h1>
                <h2 id="title-sub">Software Engineer</h2>
            </div>
            <div id="image-grid">
                <img
                    id="rotating-image"
                    src="https://i.imgur.com/RLIEgIl.jpeg"
                    alt="A picture of the developer"
                />
            </div>
            <Footer />
        </>
    );
};

export default Home;

