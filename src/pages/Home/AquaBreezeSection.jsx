import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const AquaBreezeSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: CONTENT (Text) --- */}
          {/* Added motion.div: Slides in from LEFT (-100px) */}
          <motion.div 
            className="flex flex-col text-left space-y-8 order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Heading */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.2em] text-gray-900 uppercase mb-3">
                Premium Comfort
              </h3>
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-none">
                AquaBreeze <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-800 to-gray-500">Edition</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              Redefine your daily routine with the <span className="text-gray-900 font-semibold">AquaBreeze</span>. 
              Designed for those who prioritize freshness and airflow, this model integrates advanced 
              air-drying technology with precision washing.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              The seamless design hides a powerful engine that delivers instant warmth and 
              unmatched hygiene, ensuring a breezy, comfortable experience every time you step in.
            </p>

            {/* "Discover More" Button */}
            <div className="pt-4">
              <Link 
                to="/aquabreeze" 
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

          {/* --- RIGHT SIDE: IMAGE --- */}
          {/* Added motion.div: Slides in from RIGHT (100px) */}
          <motion.div 
            className="relative group order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Background Shape */}
            <div className="absolute inset-0 bg-linear-to-l from-gray-200 to-gray-50 rounded-tl-[100px] rounded-br-[100px] transform -rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700 -z-10"></div>
            
            {/* Image Container */}
            <div className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/Charts/Aqua Breeze.png" 
                alt="AquaBreeze Smart Toilet" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AquaBreezeSection;