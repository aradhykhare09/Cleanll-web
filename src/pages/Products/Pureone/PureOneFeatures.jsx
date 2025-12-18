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
const PureOneFeatures = () => {
  // Check that your .webp or .png files exist in these paths
  const features = [
    {
      id: 1,
      title: "Knob Operation (Dual Mode)",
      desc: "Cleanll PureOne autoflush tankless bidet toilet is equipped with a one button drive function, achieving dual mode functions for feminine wash and hip wash. Rotate the knob forward for hip wash and rotate the knob backward for feminine wash.",
      image: "/pureone/7.png" 
    },
    {
      id: 2,
      title: "Non Electric Washing Platform",
      desc: "Using the water pressure of tap water to push the nozzle spray water. Cleanll PureOne can achieve Hip washing and Feminine washing functions without any electricity. It provides a healthy, comfortable and hygienic way for healthier life.",
      image: "/pureone/6.png" 
    },
    {
      id: 3,
      title: "Offseat Auto Flushing",
      desc: "PureOne introduces the most useful function, the moment user is offseat, it Automatically flushes the toilet in 3 seconds. In case of low battery foot touch manual flushing is also provided in the toilet.",
      image: "/pureone/1.png" 
    },
    {
      id: 4,
      title: "Soft close seat cover/ring",
      desc: "PureOne is equipped with a silent seat cover/ring to safeguard every quiet moment. A Tankless Toilet can achieve soft closing of the seat cover/seat Ring almost no noise.",
      image: "/pureone/2.png" 
    },
    {
      id: 5,
      title: "Foot touch manual flushing",
      desc: "When men urinates or low battery, manual flushing is to be used.",
      image: "/pureone/3.png" 
    },
    
    {
      id: 6,
      title: "Hip & Feminine Wash", 
      desc: "Specialized nozzle design providing dedicated spray angles for both Hip Wash and Feminine Wash, ensuring targeted cleaning and maximum hygiene without electricity.",
      image: "/pureone/4.png" 
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
            Advanced <span className="italic font-serif">Capabilities</span>
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
              
              {/* IMAGE PART (Using Super Smart Component) */}
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

export default PureOneFeatures;