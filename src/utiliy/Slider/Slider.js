import React, { useState, useEffect } from 'react';
import './Slider.css';
import ImgUser from './../../assets/1.jpg';

const Slider = () => {
  const testimonials = [
    {
      img: ImgUser,
      text: '"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."',
      author: 'Simab Dave - Web Designer',
    },
    {
      img: ImgUser,
      text: '"Far, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."',
      author: 'John Dave - Web Developer',
    },
    {
      img: ImgUser,
      text: '"behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live."',
      author: 'Tom Dave - Web Designer',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); 
    return () => clearInterval(timer); 
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="slider-container mx-lg-5">
      <div className="slider">
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div className="slide" key={index}>
              <div className={`text-center ${isTransitioning ? 'transitioning' : ''}`}>
                <img src={testimonial.img} alt={`Slide ${index}`} />
                <p>{testimonial.text}</p>
                <span className="author">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bullets mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`bullet ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
