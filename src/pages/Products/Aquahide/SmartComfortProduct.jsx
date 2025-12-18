import React from 'react';
import { ThermometerSun, Droplets, Wind, ScanFace, Sparkles } from 'lucide-react'; 
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const SmartComfortProduct = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* FIXED: Changed 'items-center' to 'items-start' for top alignment */}
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
              {/* PLACEHOLDER IMAGE - Replace with your product image */}
              <img 
                src="/products/Bidet_W1.png" 
                alt="Smart Comfort Toilet" 
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
              <span>AquaHide</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
              Ultimate Comfort <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                & Intelligent Hygiene
              </span>
            </h2>
            
            {/* Sub-headline */}
            <p className="text-xl text-gray-500 font-medium mb-8 italic">
              "Experience a new level of cleanliness and warmth."
            </p>

            {/* FEATURE ICONS - Staggered Animation */}
            <motion.div 
              className="grid grid-cols-4 gap-4 mb-10 border-y border-gray-100 py-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 } // slightly faster stagger for 4 items
                }
              }}
            >
              
              {/* Seat Heating */}
              <motion.div 
                className="flex flex-col items-center text-center gap-3 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ThermometerSun size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Seat<br/>Heating</span>
              </motion.div>
              
              {/* Washing */}
              <motion.div 
                className="flex flex-col items-center text-center gap-3 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Droplets size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Multi-func<br/>Washing</span>
              </motion.div>
              
              {/* Drying */}
              <motion.div 
                className="flex flex-col items-center text-center gap-3 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Wind size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Warm Air<br/>Drying</span>
              </motion.div>

               {/* Smart Sensor */}
               <motion.div 
                 className="flex flex-col items-center text-center gap-3 group"
                 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
               >
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ScanFace size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Smart<br/>Sensor</span>
              </motion.div>

            </motion.div>

            {/* DETAILED TEXT */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Embrace a touchless and comfortable experience. Our smart toilet features <span className="text-gray-900 italic font-semibold">three levels of seat heating</span> for ultimate comfort, ensuring warmth exactly when you need it.
              </p>
              
              <p>
                Enjoy a multi-functional washing experience followed by a <span className="text-gray-900 italic font-semibold">warm air drying function</span> for a fresh, clean feeling every time.
              </p>

              <p>
                 The advanced <span className="text-gray-900 italic font-semibold">smart sensor</span> technology enables automatic flushing and seat opening, providing a truly hygienic, hands-free environment.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SmartComfortProduct;