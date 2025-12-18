import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- 1. SUPER SMART IMAGE COMPONENT ---
const FeatureImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // Explicit sizing to prevent layout shift
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
        loading="lazy" // Native browser lazy loading
        width="400"    // Helps browser allocate space immediately
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
const ComfortFeaturesSection = () => {
  // Check that your .webp files exist in these paths
  const features = [
    {
      id: 1,
      title: "Cleaning range is adjustable",
      desc: "Increase the cleaning space, no need to clean repeatedly, with softness and strength, temperature, intensity, different gears regulation.",
      image: "/aquabreeze/8.webp" 
    },
    {
      id: 2,
      title: "Built-in water tank",
      desc: "Built-in sunken water tank, equipped with efficient accessories, washes more hygienically, water pressure for stable water flow, strong instant flushing.",
      image:"/aquabreeze/7.webp"
    },
    {
      id: 3,
      title: "Built-in perfume",
      desc: "The hole releases the aromatic fragrance, alleviates the residual odor of many people in the toilet successively and avoids embarrassment.",
      image: "/aquabreeze/6.webp"
    },
    {
      id: 4,
      title: "Built-in foot click flushing",
      desc: "By touching the foot button gently, it enables flushing manually of the intelligent smart toilet.",
      image: "/aquabreeze/5.webp"
    },
    {
      id: 5,
      title: "Sensor Based Automatic opening",
      desc: "Automatic opening of the seat cover, when human body reaches closer to the intelligent smart toilet, No need to bend over and get your hands dirty.",
      image: "/aquabreeze/4.webp" 
    },
    {
      id: 6,
      title: "Seat heating for ultimate comfort", 
      desc: "Built-in temperature control keeps the seat perfectly warm, adapting automatically to your preference.",
      image:"/aquabreeze/3.webp"
    },
    {
      id: 7,
      title: "Hygienic Bubble Shield",
      desc: "A soft cushion of bubbles forms inside the toilet bowl, keeping the surface lubricated and clean. This advanced bubble layer reduces splashes, prevents stains, and helps eliminate odor at the source.",
      image: "/aquabreeze/1.webp"
    },
    {
      id: 8,
      title: "Ambient light",
      desc: "Soft water atmosphere lamp, suitable for various ambience.",
      image:"/aquabreeze/2.webp"
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
            Premium <span className="italic font-serif">Comfort</span>
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
              
              {/* IMAGE PART (Using Super Smart FeatureImage) */}
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

export default ComfortFeaturesSection;