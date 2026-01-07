import React, { useState } from 'react';
import { motion } from 'framer-motion';

// --- SMART ICON COMPONENT ---
const FeatureIcon = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-16 h-16 shrink-0 relative">
      {/* Skeleton Loader */}
      <div
        className={`absolute inset-0 bg-gray-100 rounded-lg transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* Actual Icon Image */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-contain transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
      />
    </div>
  );
};

const CisternAdv = () => {
  const advantages = [
    {
      id: 1,
      title: "Space-Saving Design",
      desc: "A concealed cistern frees up visual and physical space, making even compact bathrooms look larger and more elegant.",
      icon: "/cistern/1.webp"
    },
    {
      id: 2,
      title: "Clean & Hygienic",
      desc: "With fewer exposed parts and smooth surfaces, cleaning becomes effortless. Less clutter, more hygiene.",
      icon: "/cistern/2.webp"
    },
    {
      id: 3,
      title: "Built for Durability",
      desc: "Engineered with robust, long-lasting materials to ensure leak-free performance and years of reliability.",
      icon: "/cistern/3.webp"
    },
    {
      id: 4,
      title: "Universal Compatibility",
      desc: "Perfectly fits most wall-hung toilet systems, making installation simple and versatile.",
      icon: "/cistern/4.webp"
    },
    {
      id: 5,
      title: "Ultra-Quiet Performance",
      desc: "Hidden inside the wall, the cistern reduces flushing noise offering a calm, premium bathroom experience.",
      icon: "/cistern/5.webp"
    },
    {
      id: 6,
      title: "Invisible, Yet Elegant",
      desc: "Only the flush plate is visible. Giving your bathroom a minimalist, modern and luxurious appeal.",
      icon: "/cistern/6.webp"
    },
    {
      id: 7,
      title: "Dual Flush Efficiency",
      desc: "Smart water-saving technology designed to reduce consumption without compromising power.",
      icon: "/cistern/7.webp"
    },
    {
      id: 8,
      title: "Easy Maintenance",
      desc: "Front-access servicing via the flush plate ensures quick, hassle-free maintenance without opening walls.",
      icon: "/cistern/8.webp"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    // Applied 'font-poppins' and 'py-24'
    <section className="py-24 bg-[#f4f1ea] overflow-hidden font-poppins">
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
            Advantages of a <br className="md:hidden" /> <span className="font-medium">Concealed Cistern</span>
          </h2>
          {/* Removed underline/divider */}
        </motion.div>

        {/* Features Grid - 2 Columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "200px" }}
        >
          {advantages.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-row gap-6 items-start group "
              variants={itemVariants}
            >
              {/* ICON */}
              <FeatureIcon src={item.icon} alt={item.title} />

              {/* TEXT CONTENT */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-[#4a3b32] group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                {/* Updated to Master Body Size (text-md) */}
                <p className="text-gray-600 text-base md:text-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CisternAdv;