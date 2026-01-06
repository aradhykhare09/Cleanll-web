import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const AquaSkySection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden font-poppins mt-18">
      <div className="w-full max-w-360 mx-auto px-6 md:px-12">
        
        {/* Grid: Standard 2-column layout with equal gap (Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE (Square & Balanced) --- */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
             {/* Image Container - Square Aspect Ratio */}
             <div className="relative w-full aspect-square rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
                
                {/* Background Shape */}
                <div className="absolute inset-0 bg-linear-to-r from-gray-200 to-gray-50 transform rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 -z-10"></div>
                
                {/* Image - No Shadow/Border, Square */}
                <img 
                  src="/homeproduct/Aquasky.webp" 
                  alt="AquaSky Intelligent Toilet"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <motion.div 
            className="flex flex-col text-left space-y-5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#080aa1] to-[#c99d80] font-medium"> 
                  AquaSky
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-md leading-relaxed text-justify">
              Experience a revolutionary innovation in bathroom design. The 
              <span className="text-gray-900 font-semibold"> AquaSky </span> 
              combines adjustable cleaning ranges and sensor-based automation to create a stunning visual effect. Its micro-technology ensures a germ-free experience, reminiscent of crystalline structures found in nature.
            </p>

            {/* "Discover More" Button */}
            <div className="pt-4">
              <Link 
                to="/aquasky" 
                className="inline-flex items-center gap-2 text-lg font-semibold text-[#c99d80] hover:text-[#080aa1] transition-colors group"
              >
                <span>Discover More</span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AquaSkySection;