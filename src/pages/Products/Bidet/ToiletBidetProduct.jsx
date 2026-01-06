import React from 'react';
import { Smile, Droplets, ShieldCheck, Target, Sparkles, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const ToiletBidetProduct = () => {

  // 🔑 ADD: catalog file for Toilet Bidet
  const catalogFile = 'Cleanll_Toilet Bidet.pdf';

  // 🔑 ADD: download handler
  const handleDownload = () => {
    window.location.href = `/catalogs/${catalogFile}`;
  };

  return (
    <section className="py-24 bg-white overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-50 blur-3xl -z-10"></div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/products/Bidet_W1 copy.webp"
                alt="Toilet Bidet Attachment"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 aspect-square"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex flex-col text-left space-y-5"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >

            {/* Badge */}
            <div className="flex flex-row items-center gap-4 mb-2">
              <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold">
                <Sparkles size={16} />
                <span>Toilet Bidet</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">MRP 3,500</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
              Non-Electric <br />
              <span className="font-medium text-gray-900">
                Bidet Attachment
              </span>
            </h2>

            {/* Sub heading */}
            <p className="text-gray-500 text-base md:text-md font-medium">
              "With Dual Nozzle For Ultimate Cleaning."
            </p>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10 border-y border-gray-100 py-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <Smile size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comfort</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Gentle, controlled water stream; adjustable pressure; hands-free.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <Droplets size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Water Efficiency</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Uses less water with targeted spray control.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Hygiene</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Minimal hand contact; self-cleaning nozzles reduce contamination.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Consistency</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Fixed spray angle and consistent water flow every time.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Warranty</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    On Site 1 Year Warranty
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-base md:text-md leading-relaxed text-justify">
              <p>
                Upgrade your bathroom experience with our <span className="text-gray-900 font-medium">Non-Electric Toilet Bidet</span>. Designed for simplicity and hygiene, it requires no electricity and fits seamlessly onto your existing toilet.
              </p>
            </div>

            {/* 🔥 DOWNLOAD CATALOG (REAL LOGIC, UI SAME) */}
            <div className="pt-4">
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-2 text-lg font-semibold 
                           text-[#c99d80] hover:text-[#080aa1] 
                           transition-colors group"
              >
                <span>Download Catalog</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ToiletBidetProduct;
