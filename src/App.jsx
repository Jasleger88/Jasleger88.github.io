import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
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
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
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
    </Router>
  );
}

export default App;
