import React, { useState } from 'react';

export default function ImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of image URLs
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col justify-start items-start h-full bg-white gap-5 p-20 rounded-lg">
            <span className="text-title-md font-semibold text-primary-400 ">Upcoming Promotions</span>
        <div className='image-carousel'>
            <button onClick={prevImage}>Previous</button>
            <img src={images[currentImageIndex]} alt={`P ${currentImageIndex + 1}`}/>
            <button onClick={nextImage}>Next</button>
        </div>
        </div>
    );
}


