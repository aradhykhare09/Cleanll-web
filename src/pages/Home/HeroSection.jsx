import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

// Preload critical images for better performance
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    link.type = 'image/webp';
    document.head.appendChild(link);
  });
};

const HeroSection = () => {
  
  const slides = [
    { 
      id: 1, 
      desktopImage: "/banner2/Footer Banner.webp", 
      mobileImage: "/banner2/Footer Banner_V.webp", 
      title: "", 
      subtitle: "" 
    },
    { 
      id: 2, 
      desktopImage: "/banner2/Aquasky.webp", 
      mobileImage: "/banner2/Aquasky2.webp", 
      title: "", 
      subtitle: "" 
    },
    { 
      id: 3, 
      desktopImage: "/banner2/AquaBreeze.webp", 
      mobileImage: "/banner2/AquaBreeze2.webp", 
      title: "", 
      subtitle: "" 
    },
    { 
      id: 4, 
      desktopImage: "/banner2/AquaLite.webp", 
      mobileImage: "/banner2/AquaLite2.webp",
      title: "", 
      subtitle: "" 
    },
    { 
      id: 5, 
      desktopImage: "/banner2/PureOne.webp", 
      mobileImage: "/banner2/PureOne_V.webp", 
      title: "", 
      subtitle: "" 
    },
   
  ];

  const extendedSlides = [...slides, slides[0]];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true); 
  const transitionRef = useRef(null);

  // Preload first banner images on mount for instant display
  useEffect(() => {
    // Preload first slide images for immediate display
    preloadImages([
      slides[0].desktopImage,
      slides[0].mobileImage,
    ]);
    
    // Preload remaining slides after a delay
    const timer = setTimeout(() => {
      const remainingImages = slides.slice(1).flatMap(s => [s.desktopImage, s.mobileImage]);
      remainingImages.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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
              alt={slide.title || "Banner Image"}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
              className="hidden md:block w-full h-full object-cover"
            />

            {/* --- MOBILE IMAGE --- */}
            {/* block on mobile, hidden on medium screens and up */}
            <img 
              src={slide.mobileImage} 
              alt={slide.title || "Banner Image"}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              decoding="async"
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