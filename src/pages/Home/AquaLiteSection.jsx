import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const AquaLiteSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          {/* Added motion.div: Slides in from LEFT (-100px) */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background Shape */}
            <div className="absolute inset-0 bg-linear-to-tr from-gray-200 to-gray-50 rounded-tr-[100px] rounded-bl-[100px] transform rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 -z-10"></div>
            
            {/* Image Container */}
            <div className="relative rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/Charts/Aqua Lite.png" 
                alt="Aqualite Nature Edition" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          {/* Added motion.div: Slides in from RIGHT (100px) */}
          <motion.div 
            className="flex flex-col text-left space-y-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Heading */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-gray-900 uppercase mb-3">
                Nature Series
              </h3>
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-none">
                Aqualite <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-500">Nature</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              Discover the perfect harmony between human innovation and natural tranquility. The 
              <span className="text-gray-900 font-semibold"> Aqualite </span> 
              brings the organic feel of the forest into your modern bathroom.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              With features like quiet comfort, fresh breeze drying, and an organic aesthetic, 
              it creates a private sanctuary that feels less like a utility and more like a retreat.
            </p>

            {/* "Discover More" Button */}
            <div className="pt-4">
              <Link 
                to="/aqualite" 
                className="inline-flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-gray-600 transition-colors group"
              >
                <span>Discover More</span>
                {/* Arrow BG Black on Hover */}
                <span className="p-2 bg-gray-100 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AquaLiteSection;