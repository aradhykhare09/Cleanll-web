import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const HeroSection = () => {
  
  const slides = [
    { 
      id: 1, 
      desktopImage: "/banner/Aqua Breeze.png", 
      mobileImage: "/Vertical/AquaBreze.png", 
      title: "", 
      subtitle: "" 
    },
    { 
      id: 2, 
      desktopImage: "/banner/Cistern.png", 
      mobileImage: "/Vertical/Cistern.png",
      title: "", 
      subtitle: "" 
    },
    { 
      id: 3, 
      desktopImage: "/banner/Lite.png", 
      mobileImage: "/Vertical/AquaLite.png",
      title: "", 
      subtitle: "" 
    },
    { 
      id: 4, 
      desktopImage: "/banner/Pureone.png", 
      mobileImage: "/Vertical/PureOne.png", 
      title: "", 
      subtitle: "" 
    },
    { 
      id: 5, 
      desktopImage: "/banner/Sky.png", 
      mobileImage: "/Vertical/Aqua Sky.png", 
      title: "", 
      subtitle: "" 
    },
    { 
      id: 6, 
      desktopImage: "/banner/Toilet Bidet.png", 
      mobileImage: "/Vertical/Bidet.png",
      title: "", 
      subtitle: "" 
    },
  ];

  const extendedSlides = [...slides, slides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); 
  const transitionRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]); 

  useEffect(() => {
    if (currentSlide === extendedSlides.length - 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); 
        setCurrentSlide(0); 
      }, 700); 

      return () => clearTimeout(timeout);
    }
  }, [currentSlide, extendedSlides.length]);

  useEffect(() => {
    if (currentSlide === 0 && !isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); 
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, isTransitioning]);

  const handleNext = () => {
    if (currentSlide < extendedSlides.length - 1) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide === 0) {
        setCurrentSlide(slides.length - 1);
    } else {
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-gray-900 group">
      
      <div 
        className="flex h-full"
        style={{ 
          transition: isTransitioning ? 'transform 700ms ease-in-out' : 'none',
          transform: `translateX(-${currentSlide * 100}%)` 
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div key={`${slide.id}-${index}`} className="w-full shrink-0 relative h-full">
            
            {/* --- DESKTOP IMAGE --- */}
            {/* hidden on mobile, block on medium screens and up */}
            <img 
              src={slide.desktopImage} 
              alt={slide.title} 
              className="hidden md:block w-full h-full object-cover"
            />

            {/* --- MOBILE IMAGE --- */}
            {/* block on mobile, hidden on medium screens and up */}
            <img 
              src={slide.mobileImage} 
              alt={slide.title} 
              className="block md:hidden w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ArrowLeft size={24} />
      </button>

      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        <ArrowRight size={24} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              (currentSlide === index || (currentSlide === extendedSlides.length - 1 && index === 0)) 
              ? "bg-white scale-125" 
              : "bg-white/50 hover:bg-white"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default HeroSection;