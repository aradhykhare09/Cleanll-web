import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- SMART ICON COMPONENT ---
const IconItem = ({ src, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col items-center text-center gap-4 group">
      
      {/* Icon Circle */}
      {/* Changes: Border dark kiya, BG white kiya, aur shadow add ki */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
        
        {/* Skeleton Loader (Gray instead of white) */}
        <div 
          className={`absolute inset-0 bg-gray-200 rounded-full animate-pulse transition-opacity duration-500 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        
        {/* Icon Image */}
        {/* Changes: Size badhaya (w-12/w-14) aur filter change kiya black karne ke liye */}
        <img 
          src={src} 
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-12 h-12 md:w-18 md:h-18 object-contain filter brightness-0 transition-all duration-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`} 
        />
      </div>

      {/* Label */}
      {/* Change: Text color dark kiya */}
      <span className="text-gray-900 text-xs md:text-sm font-bold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity">
        {title}
      </span>
    </div>
  );
};

const IconShowcase = () => {
  // Data based on the blue banner screenshot
  const icons = [
    { id: 1, title: "Hip Wash", src: "/bidet/1.png" },
    { id: 2, title: "Feminine Wash", src: "/bidet/2.png" },
    { id: 3, title: "Universal Fit", src: "/bidet/3.png" },
    { id: 4, title: "Ultra Slim & Durable", src: "/bidet/4.png" },
    { id: 5, title: "Non Electric", src: "/bidet/5.png" },
    { id: 6, title: "(ABS) Solid Build", src: "/bidet/6.png" },
    { id: 7, title: "Easy Installation", src: "/bidet/8.png" }
  ];

  // Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Ek ke baad ek aayenge
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    // Change: Background color updated to #f4f1ea
    <section className="py-16 bg-[#f4f1ea]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Responsive Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {icons.map((icon) => (
            <motion.div key={icon.id} variants={itemVariants}>
              <IconItem src={icon.src} title={icon.title} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IconShowcase;