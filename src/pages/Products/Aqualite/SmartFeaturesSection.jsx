import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. SMART IMAGE COMPONENT ---
// (Skeleton loader + Smooth Fade-in logic)
const FeatureImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="aspect-4/3 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative bg-gray-100">
      
      {/* SKELETON: Gray pulse until image loads */}
      <div 
        className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-500 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      {/* ACTUAL IMAGE */}
      <img 
        src={src} 
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out
          ${isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'} 
        `} 
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
    </div>
  );
};


// --- 2. MAIN COMPONENT ---
const SmartFeaturesSection = () => {
  // Data updated based on screenshot
  const features = [
    {
      id: 1,
      title: "Cleaning range is adjustable",
      desc: "Increase the cleaning space, no need to clean repeatedly, with softness and strength, temperature, intensity, different gears regulation.",
      image: "/aqualite/8.png" 
    },
    {
      id: 2,
      title: "Built-in water tank",
      desc: "Built-in sunken water tank, equipped with efficient accessories, washes more hygienically, water pressure for stable water flow, strong instant flushing.",
      image: "/aqualite/7.png" 
    },
    {
      id: 3,
      title: "Built-in perfume",
      desc: "The hole releases the aromatic fragrance, alleviates the residual odor of many people in the toilet successively and avoids embarrassment.",
      image: "/aqualite/6.png" 
    },
    {
      id: 4,
      title: "Built-in foot click flushing",
      desc: "By touching the foot button gently, it enables flushing manually of the intelligent smart toilet.",
      image: "/aqualite/5.png" 
    },
    {
      id: 5,
      title: "Sensor Based Automatic opening",
      desc: "Automatic opening of the seat cover, when human body reaches closer to the intelligent smart toilet, No need to bend over and get your hands dirty.",
      image:"/aqualite/4.png" 
    },
    {
      id: 6,
      title: "Mobile air drying",
      desc: "The range of drying is larger, the air outlet is closer to the hip. with accurate flap, hot air remains concentrated.",
      image: "/aqualite/3.png" 
    },
    {
      id: 7,
      title: "Built-in bubble function", 
      desc: "Bubble liquid evenly covers the entire surface of the toilet, Provides better anti splash, odor and lubrication.",
      image:"/aqualite/1.png" 
    },
    {
      id: 8,
      title: "Ambient light",
      desc: "Soft water atmosphere lamp, suitable for various ambience.",
      image: "/aqualite/2.png" 
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Har feature 0.15s ke gap pe aayega
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading - Slide Up */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
            Intelligent <span className="italic font-serif">Functions</span>
          </h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
        </motion.div>

        {/* Features Grid - Staggered Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          
          {features.map((feature) => (
            <motion.div 
              key={feature.id} 
              className="flex flex-col sm:flex-row gap-6 items-start group"
              variants={itemVariants}
            >
              
              {/* IMAGE PART (Using Smart Component) */}
              <div className="w-full sm:w-2/5 shrink-0">
                <FeatureImage src={feature.image} alt={feature.title} />
              </div>

              {/* TEXT PART */}
              <div className="w-full sm:w-3/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:underline decoration-1 underline-offset-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default SmartFeaturesSection;