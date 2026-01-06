import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 

const PureOneSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden font-poppins">
      <div className="w-full max-w-360 mx-auto px-6 md:px-12">
        
        {/* Grid: Standard 2-column layout with equal gap (Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: CONTENT --- */}
          <motion.div 
            className="flex flex-col text-left space-y-5 pr-4 lg:pr-0 order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#080aa1] to-[#c99d80] font-medium"> 
                  PureOne 
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base md:text-md leading-relaxed text-justify">
              Simplify your hygiene with the <span className="text-gray-900 font-semibold">PureOne</span>. 
              This innovative tankless toilet features a unique <span className="italic">Knob Operation</span> system, allowing for precise control over hip and feminine wash without the need for complex electronics. Equipped with a non-electric washing platform that uses tap water pressure, PureOne delivers a powerful, eco-friendly clean. Combined with off-seat auto flushing and a soft-close seat, it defines the new standard for manual bidet toilets.
            </p>

            {/* "Discover More" Button */}
            <div className="pt-4">
              <Link 
                to="/pureone" 
                className="inline-flex items-center gap-2 text-lg font-semibold text-[#c99d80] hover:text-[#080aa1] transition-colors group"
              >
                <span>Discover More</span>
              </Link>
            </div>

          </motion.div>

          {/* --- RIGHT SIDE: IMAGE (Square & Balanced) --- */}
          <motion.div 
            className="relative group order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
             {/* Image Container - Square Aspect Ratio */}
             <div className="relative w-full aspect-square rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
                
                {/* Background Shape */}
                <div className="absolute inset-0 bg-linear-to-l from-gray-200 to-gray-50 transform -rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 -z-10"></div>
                
                {/* Image - No Shadow/Border, Square */}
                <img 
                  src="/homeproduct/PureOne.webp" 
                  alt="PureOne Tankless Toilet"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PureOneSection;