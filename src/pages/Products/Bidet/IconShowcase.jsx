import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- SIMPLE ICON COMPONENT (No breathing effect) ---
const IconItem = ({ src, title }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col items-center text-center gap-4 group">
      
      {/* Icon Circle */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
        
        {/* Skeleton - Only render when NOT loaded */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 rounded-full" />
        )}
        
        {/* Icon Image - Black Filter applied */}
        <img 
          src={src} 
          alt={title}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-12 h-12 md:w-14 md:h-14 object-contain filter brightness-0 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>

      {/* Label - Using Poppins */}
      <span className="text-gray-900 text-xs md:text-sm font-bold tracking-wider uppercase opacity-80 group-hover:opacity-100 transition-opacity font-poppins">
        {title}
      </span>
    </div>
  );
};

const IconShowcase = () => {
  // Data based on the blue banner screenshot
  const icons = [
    { id: 1, title: "Hip Wash", src: "/bidet/1.webp" },
    { id: 2, title: "Feminine Wash", src: "/bidet/2.webp" },
    { id: 3, title: "Universal Fit", src: "/bidet/3.webp" },
    { id: 4, title: "Ultra Slim & Durable", src: "/bidet/4.webp" },
    { id: 5, title: "Non Electric", src: "/bidet/5.webp" },
    { id: 6, title: "(ABS) Solid Build", src: "/bidet/6.webp" },
    { id: 7, title: "Easy Installation", src: "/bidet/8.webp" }
  ];

  // Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    // Applied 'font-poppins' and consistent padding
    <section className="py-20 bg-[#f4f1ea] font-poppins overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
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