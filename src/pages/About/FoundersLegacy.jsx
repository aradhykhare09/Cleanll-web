import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. Import Framer Motion

const FoundersLegacy = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT SIDE: TITLE & BLUE ACCENT --- */}
          {/* Animation: Slide In from Left */}
          <motion.div 
            className="lg:col-span-4 relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Blue Block Accent (Decorative) */}
            <div className="absolute top-0 left-0 w-20 h-full bg-blue-900/5 -z-10 rounded-r-3xl hidden lg:block"></div>
            
            <div className="pt-8">
              <h4 className="text-sm font-bold tracking-[0.3em] text-gray-500 uppercase mb-2">
                Founder’s
              </h4>
              <h2 className="text-6xl md:text-8xl font-serif text-gray-900 tracking-tighter leading-none mb-6">
                LEGACY
              </h2>
              <div className="h-1.5 w-24 bg-[#232323] rounded-full"></div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: CONTENT & TIMELINE --- */}
          {/* Animation: Slide In from Right */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Slight delay for better flow
            viewport={{ once: true, amount: 0.3 }}
          >
            
            {/* Main Paragraph */}
            <div className="prose prose-lg text-gray-600 leading-relaxed mb-16 text-justify">
              <p className="mb-6">
                Cleanll’s leadership carries a <span className="text-gray-900 font-semibold">legacy of firsts</span>—from revolutionizing India’s HVAC landscape with advanced split AC units, cross-flow fans, and micro-channel heat exchangers, to creating the nation’s first fully Made-in-India smart toilet.
              </p>
              <p>
                Their pioneering vision fuels Cleanll’s relentless drive for innovation and unmatched market insight, inspiring a culture of excellence where <span className="italic text-gray-800">engineering precision, sustainable thinking, and customer-centric design</span> come together.
              </p>
              <p>
                This forward-looking legacy not only shapes the brand’s direction but also sets new benchmarks for India’s smart sanitary future.
              </p>
            </div>

            {/* --- TIMELINE SECTION --- */}
            <div className="relative">
              {/* Connecting Line (Desktop: Horizontal, Mobile: Vertical) */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 border-t-2 border-dashed border-blue-200 z-0"></div>
              <div className="md:hidden absolute left-6 top-0 h-full w-0.5 border-l-2 border-dashed border-blue-200 z-0"></div>

              {/* Staggered Animation for Timeline Items */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3 // Ek ke baad ek aayenge (0.3s gap)
                    }
                  }
                }}
              >

                {/* Milestone 1: 1999 */}
                <motion.div 
                  className="flex flex-row md:flex-col items-start gap-6 md:gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 text-white">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">1999</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      First to manufacture split AC indoor units and cross flow fans in India.
                    </p>
                  </div>
                </motion.div>

                {/* Milestone 2: Early 2000s */}
                <motion.div 
                  className="flex flex-row md:flex-col items-start gap-6 md:gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 text-white">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Early 2000s</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      Introduced micro channel heat exchangers and header pipes.
                    </p>
                  </div>
                </motion.div>

                {/* Milestone 3: Present */}
                <motion.div 
                  className="flex flex-row md:flex-col items-start gap-6 md:gap-4 bg-white md:bg-transparent p-4 md:p-0 rounded-xl"
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <div className="shrink-0 w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center shadow-lg shadow-blue-200 text-white">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif text-gray-900 mb-2">Present</h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      First to launch and produce smart toilets in India, integrating intelligent flushing, bidet functions & hygienic automation.
                    </p>
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersLegacy;