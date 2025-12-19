import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const FoundersLegacy = () => {
  return (
    <section className="py-18 bg-white overflow-hidden font-poppins ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT SIDE: IMAGES --- */}
          {/* Height adjusted for responsiveness: h-[400px] on mobile, h-[500px] on desktop */}
          <motion.div 
            className="relative h-100 md:h-125 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image 1: Background (2B.png) */}
            {/* Mobile: Full Width, Desktop: 85% Width */}
            <div className="absolute top-0 left-0 w-full lg:w-[85%] h-full rounded-3xl overflow-hidden z-0 transition-all duration-500">
               <img 
                 src="/2B.png" 
                 className="w-full h-full object-cover" 
                 alt="Legacy Background" 
               />
            </div>

            {/* Image 2: Overlay (2A.png) */}
            {/* RESPONSIVE LOGIC:
                - Mobile/Tablet: Centered (left-1/2 -translate-x-1/2)
                - Desktop (lg): Right Aligned (right-0 translate-x-0 left-auto)
            */}
            <div className="absolute top-1/2 -translate-y-1/2 
                            left-1/2 -translate-x-1/2 w-[70%] h-[50%] 
                            lg:left-auto lg:right-0 lg:translate-x-0 lg:w-[55%] lg:h-[60%] 
                            rounded-3xl overflow-hidden shadow-2xl z-10 transition-all duration-500 ease-in-out">
               <img 
                 src="/2A.png" 
                 className="w-full h-full object-cover" 
                 alt="Founder Detail" 
               />
            </div>
          </motion.div>


          {/* --- RIGHT SIDE: CONTENT --- */}
          <motion.div 
            className="flex flex-col text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* HEADING SECTION */}
            <div className="mb-10">
              <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
                FOUNDER'S <br />
                LEGACY
              </h2>
            </div>

            {/* DESCRIPTION */}
            <div className="text-gray-600 text-md leading-relaxed mb-12 space-y-6 text-justify lg:text-left">
              <p>
                Cleanll’s leadership carries a <span className="text-gray-900 font-medium">legacy of firsts</span>—from revolutionizing India’s HVAC landscape with advanced split AC units to creating the nation’s first fully Made-in-India smart toilet.
              </p>
              <p>
                Their pioneering vision fuels a culture where <span className="text-gray-900 font-medium">engineering precision, sustainable thinking, and customer-centric design</span> come together.
              </p>
            </div>

            {/* --- TIMELINE SECTION --- */}
            <div className="relative pt-4">
              
              {/* Dotted Connecting Line (Desktop) */}
              <div className="hidden lg:block absolute top-7 left-6 right-6 border-t-2 border-dashed border-blue-200 -z-10"></div>
              
              {/* Dotted Connecting Line (Mobile) */}
              <div className="lg:hidden absolute left-6 top-6 bottom-6 border-l-2 border-dashed border-blue-200 -z-10"></div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Milestone 1 */}
                <div className="relative flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-4">
                  <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg shrink-0 z-10 border-4 border-white">
                      <Play size={20} fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">1999</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">First to manufacture split AC indoor units & cross flow fans in India.</p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="relative flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-4">
                   <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg shrink-0 z-10 border-4 border-white">
                      <Play size={20} fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Early 2000s</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Introduced micro channel heat exchangers and header pipes.</p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-4">
                   <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg shrink-0 z-10 border-4 border-white">
                      <Play size={20} fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Present</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">First to launch Made-in-India smart toilets with intelligent automation.</p>
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FoundersLegacy;