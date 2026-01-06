import React from 'react';
import { Leaf, Wind, Feather, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const NatureProduct = () => {
  return (
    // Applied 'font-poppins'
    <section className="py-24 bg-white overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Grid: Standard 2-column layout with equal gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* --- LEFT SIDE: IMAGE (Square/Rounded) --- */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background blob */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-50 blur-3xl -z-10"></div>

            {/* Image Container - Square/Rounded */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/products/AquaLite_W1.webp"
                alt="Aqualite Nature Edition"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 aspect-square"
              />
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          <motion.div
            className="flex flex-col text-left space-y-5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-2">
              <Sparkles size={16} />
              <span>Aqualite</span>
            </div>

            {/* HEADLINE - Master Size, No Underline */}
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
              Coexistence Between <br />
              {/* Removed underline, kept font-medium */}
              <span className="font-medium text-gray-900">
                Human & Nature
              </span>
            </h2>

            {/* Sub-headline - No Italic, Master Body Size */}
            <p className="text-gray-500 text-base md:text-md font-medium">
              "Green and lush imagination."
            </p>

            {/* FEATURE ICONS */}
            <motion.div
              className="grid grid-cols-3 gap-4 border-y border-gray-100 py-6 my-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
            >
              <motion.div
                className="flex flex-col items-center text-center gap-2 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Leaf size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Organic<br />Feel</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center gap-2 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Wind size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Fresh<br />Breeze</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center gap-2 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Feather size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Quiet<br />Comfort</span>
              </motion.div>
            </motion.div>

            {/* DETAILED TEXT - No Italics, Semibold Highlights */}
            <div className="text-gray-600 text-base md:text-md leading-relaxed text-justify [text-justify:inter-word] [hyphens:auto]">
  <p>
    Amid the <span className="text-gray-900 font-medium">hustle of urban life</span>, 
    we create a quiet, comfortable, and healthy private space for you. 
    Aqualite offers <span className="text-gray-900 font-medium">complete relaxation</span> 
    <br/>every time you use it. Designed to bring the tranquility of the forest into your home, 
    ensuring a seamless harmony between modern <br />
    living and the natural world.
  </p>
</div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default NatureProduct;