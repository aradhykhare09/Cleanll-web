import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. SUPER SMART IMAGE COMPONENT ---
const FeatureImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // Explicit sizing wrapper to prevent layout shift
    <div className="aspect-4/3 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative bg-gray-100 w-full h-full">
      
      {/* SKELETON LOADER (Visible until loaded) */}
      <div 
        className={`absolute inset-0 bg-gray-200 animate-pulse z-10 transition-opacity duration-700 ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`} 
      />

      {/* ACTUAL IMAGE */}
      <img 
        src={src} 
        alt={alt}
        loading="lazy" 
        width="400"    
        height="300"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out will-change-transform
          ${isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-lg scale-95'} 
        `} 
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
    </div>
  );
};


// --- 2. MAIN COMPONENT ---
const FeaturesSection = () => {
  // Data (PNGs retained as requested)
  const features = [
    {
      id: 1,
      title: "Cleaning range is adjustable",
      desc: "Increase the cleaning space, no need to clean repeatedly. With adjustable softness, strength, temperature, and intensity gears.",
      image: "/aquasky/Aquasky_A.png" 
    },
    {
      id: 2,
      title: "Built-in water tank",
      desc: "Built-in sunken water tank equipped with efficient accessories. Washes more hygienically with strong instant flushing pressure.",
      image: "/aquasky/Aquasky_F.png" 
    },
    {
      id: 3,
      title: "Built-in perfume",
      desc: "The hole releases aromatic fragrance, alleviates residual odors, and avoids embarrassment for successive users.",
      image: "/aquasky/Aquasky_B.png" 
    },
    {
      id: 4,
      title: "Built-in foot click flushing",
      desc: "By touching the foot button gently, it enables manual flushing of the intelligent smart toilet without using hands.",
      image: "/aquasky/Aquasky_G.png" 
    },
    {
      id: 5,
      title: "Sensor Based Automatic opening",
      desc: "Automatic opening of the seat cover when the human body reaches closer. No need to bend over or get your hands dirty.",
      image: "/aquasky/Aquasky_C.png" 
    },
    {
      id: 6,
      title: "Mobile air drying",
      desc: "The range of drying is larger, and the air outlet is closer to the hip with an accurate flap, ensuring hot air remains concentrated.",
      image: "/aquasky/Aquasky_H.png" 
    },
    {
      id: 7,
      title: "Hygienic Bubble Shield",
      desc: "A soft cushion of bubbles forms inside the toilet bowl, preventing splashes, stains, and eliminating odor at the source.",
      image: "/aquasky/Aquasky_D.png" 
    },
    {
      id: 8,
      title: "Ambient light", 
      desc: "Soft water atmosphere lamp, suitable for various ambience.",
      image: "/aquasky/Aquasky_I.png"  
    },
    {
      id: 9,
      title: "UV Sterilization",
      desc: "After using the toilet, the system automatically closes and opens the sterilization function for ultimate hygiene.",
      image: "/aquasky/Aquasky_E.png" 
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    // Applied 'font-poppins' and 'py-24'
    <section className="py-24 bg-white font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading - Master Size, No Serif */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 uppercase tracking-tight">
            Advanced <span className="font-medium">Features</span>
          </h2>
          {/* Removed underline/divider */}
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
              
              {/* IMAGE PART (Using Super Smart Component) */}
              <div className="w-full sm:w-2/5 shrink-0">
                <FeatureImage src={feature.image} alt={feature.title} />
              </div>

              {/* TEXT PART */}
              <div className="w-full sm:w-3/5">
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                {/* Desc - Updated to Master Body Size (text-md) */}
                <p className="text-gray-600 text-base md:text-md leading-relaxed">
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

export default FeaturesSection;