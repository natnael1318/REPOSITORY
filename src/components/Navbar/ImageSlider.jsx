import React, { useState, useEffect } from 'react';
import image4 from "../../assets/blog/blog3.png";
import image2 from "../../assets/website/team.jpeg"; 
import image3 from "../../assets/website/head.jpg";
import image1 from "../../assets/website/vector1.png";
import image5 from "../../assets/blog/MRI.jpeg";
import image6 from "../../assets/blog/490.jpeg";
import image10 from "../../assets/website/Adobe.jpg"
// src/components/Navbar/ImageSlider.jsx

const images = [image1, image2, image3, image10,];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000); // Change slide every 4 seconds
    return () => clearInterval(intervalId);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto"> {/* Adjusted max width */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-80 object-cover rounded-lg transition-all duration-700 ease-in-out transform hover:scale-105" // Increased height
      />
      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
            } transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;