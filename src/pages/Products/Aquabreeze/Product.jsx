import React from 'react';
import { Rocket, Globe, Sparkles, ScanFace } from 'lucide-react';
import { motion } from 'framer-motion';

const SpaceProduct = () => {
  return (
    // Applied 'font-poppins'
    <section className="py-24 bg-gray-50 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Grid: Standard 2-column layout with equal gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* --- LEFT SIDE: IMAGE (Square/Rounded) --- */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Background Blob */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-40 blur-3xl -z-10 group-hover:opacity-60 transition-opacity duration-500"></div>

            {/* Image Container - Square/Rounded */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative">
              <img
                src="/products/AquaBreeze_W1.webp"
                alt="AquaBreeze Space Edition"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 aspect-square"
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

            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-2">
              <Rocket size={16} />
              <span>AquaBreeze</span>
            </div>

            {/* HEADLINE - Master Size, No Underline */}
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
              Designed for Earth. <br />
              {/* Removed underline, kept font-medium */}
              <span className="font-medium text-gray-900">
                Inspired by Space.
              </span>
            </h2>

            {/* Sub-headline - No Italic, Master Body Size */}
            <p className="text-gray-600 text-base md:text-md font-medium">
              "Where human ingenuity meets cosmic precision—a symbol of advanced living."
            </p>

            {/* FEATURES GRID */}
            <motion.div
              className="grid grid-cols-3 gap-4 border-y border-gray-200 py-6 my-2"
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
                <div className="p-3 bg-white border border-gray-200 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Globe size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Universal<br />Design</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center gap-2 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-white border border-gray-200 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Sparkles size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Effortless<br />Purity</span>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center gap-2 group"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <div className="p-3 bg-white border border-gray-200 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                  <ScanFace size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700">Touchless<br />Tech</span>
              </motion.div>
            </motion.div>

            {/* DETAILED TEXT - No Italics, Semibold Highlights */}
            <div className="text-gray-500 text-base md:text-md leading-relaxed text-justify">
              <h3 className="">
                <strong> Innovation Meets Purity, & The Future Begins Today.</strong>
              </h3>

              <p>
                AquaBreeze by Cleanll brings you <span className="text-gray-900 font-medium">space-age precision</span> crafted for the modern home where technology, comfort, and design orbit in perfect harmony.
              </p>

              <p>
                Every feature is engineered to make your daily routine <span className="text-gray-900 font-medium">effortlessly refined</span>. Inspired by the infinite possibilities of space, AquaBreeze redefines hygiene with a touchless, seamless experience that feels almost <span className="text-gray-900 font-medium">otherworldly</span>.
              </p>
            </div>

          </motion.div>

        </div>
      </div >
    </section >
  );
};

export default SpaceProduct;