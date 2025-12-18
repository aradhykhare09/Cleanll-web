import React from 'react';
import { Zap, Waves, Armchair, Sparkles } from 'lucide-react'; 
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const Product = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          {/* Animation: Slide In from Left */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background blob gray */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-50 blur-3xl -z-10"></div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img 
                src="/products/AquaSky_w1.png" 
                alt="Advanced Smart Toilet" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          {/* Animation: Slide In from Right */}
          <motion.div 
            className="flex flex-col text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>AquaSky</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              So Advanced, Even <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                Aliens Want One.
              </span>
            </h2>
            
            {/* Sub-headline */}
            <p className="text-xl text-gray-500 font-medium mb-8 italic">
              "Because brilliance doesn't stop at Earth's boundary."
            </p>

            {/* FEATURE ICONS - Staggered Animation */}
            <motion.div 
              className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-100 py-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 } // One by one entry
                }
              }}
            >
              
              <motion.div 
                className="flex flex-col items-center text-center gap-3 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Zap size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Auto Energy<br/>Saver</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center gap-3 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Waves size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Wide Wash<br/>Technology</span>
              </motion.div>
              
              <motion.div 
                className="flex flex-col items-center text-center gap-3 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Armchair size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Soft Closing<br/>Seat</span>
              </motion.div>

            </motion.div>

            {/* EXPANDED DESCRIPTION */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>Step into the future of bathroom technology.</strong> We have reimagined the daily experience by integrating sensor-driven automation with precision mechanics.
              </p>
              <p>
                With features like 
                <span className="text-gray-900 italic"> precision flushing</span>, 
                <span className="text-gray-900 italic"> nano-silver protection</span>, and an 
                ergonomic structure designed for the human form, our intelligent smart toilet delivers a seamless fusion of 
                <span className="text-gray-900 italic uppercase tracking-wide"> Innovation</span> and 
                <span className="text-gray-900 italic uppercase tracking-wide"> Comfort</span>.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Product;