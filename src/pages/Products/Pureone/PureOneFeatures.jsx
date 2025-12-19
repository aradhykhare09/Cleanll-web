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
        className={`absolute inset-0 bg-gray-100 z-10 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* ACTUAL IMAGE */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        width="400"
        height="300"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700 ease-in-out will-change-transform
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
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
      image: "/pureone/7.jpg"
    },
    {
      id: 2,
      title: "Non Electric Washing Platform",
      desc: "Using the water pressure of tap water to push the nozzle spray water. Cleanll PureOne can achieve Hip washing and Feminine washing functions without any electricity. It provides a healthy, comfortable and hygienic way for healthier life.",
      image: "/pureone/6.jpg"
    },
    {
      id: 3,
      title: "Offseat Auto Flushing",
      desc: "PureOne introduces the most useful function, the moment user is offseat, it Automatically flushes the toilet in 3 seconds. In case of low battery foot touch manual flushing is also provided in the toilet.",
      image: "/pureone/1.jpg"
    },
    {
      id: 4,
      title: "Soft close seat cover/ring",
      desc: "PureOne is equipped with a silent seat cover/ring to safeguard every quiet moment. A Tankless Toilet can achieve soft closing of the seat cover/seat Ring almost no noise.",
      image: "/pureone/2.jpg"
    },
    {
      id: 5,
      title: "Foot touch manual flushing",
      desc: "When men urinates or low battery, manual flushing is to be used.",
      image: "/pureone/3.jpg"
    },

    {
      id: 6,
      title: "Hip & Feminine Wash",
      desc: "Specialized nozzle design providing dedicated spray angles for both Hip Wash and Feminine Wash, ensuring targeted cleaning and maximum hygiene without electricity.",
      image: "/pureone/4.jpg"
    }
  ];

  // Animation Variants
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
            Advanced <span className="font-medium">Capabilities</span>
          </h2>
          {/* Removed underline/divider */}
        </motion.div>

        {/* Features Grid - Staggered Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
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

export default PureOneFeatures;