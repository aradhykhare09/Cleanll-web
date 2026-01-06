import React from 'react';
import { Shield, Droplets, Smile, ShieldCheck, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const PureOneProduct = () => {

  // 🔑 ADD: catalog file for PureOne
  const catalogFile = 'Cleanll_PureOne.pdf';

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
                src="/products/PureOne_W1.webp"
                alt="Pure One AutoFlush Bidet"
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
                <Shield size={16} />
                <span>PureOne</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">MRP 3,50,000</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
              Where Hygiene Meets <br />
              <span className="font-medium text-gray-900">
                Heightened Living.
              </span>
            </h2>

            {/* Sub heading */}
            <p className="text-gray-500 text-base md:text-md font-medium">
              "India's First Non Electric Offseat Auto Flushing Toilet With Bidet."
            </p>

            {/* Features */}
            <motion.div
              className="grid grid-cols-4 gap-4 border-y border-gray-100 py-6 my-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">
                  Ultimate<br />Hygiene
                </span>
              </motion.div>

              <motion.div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  <Droplets size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">
                  Refreshing<br />Clean
                </span>
              </motion.div>

              <motion.div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  <Smile size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">
                  Confidence<br />Boost
                </span>
              </motion.div>

              <motion.div className="flex flex-col items-center gap-2 group">
                <div className="p-3 bg-gray-100 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors">
                  <BadgeCheck size={20} />
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">
                  On Site<br />1 Year Warranty
                </span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <div className="text-gray-600 text-base md:text-md leading-relaxed text-justify">
              <p>
                <strong className="font-semibold">
                  Engineered to fit seamlessly on any toilet seat.
                </strong>{' '}
                Our AutoFlush TankLess Bidet Toilet is designed to redefine your bathroom experience.
                It transforms daily cleansing into a{' '}
                <span className="text-gray-900 font-medium">healthier</span>,{' '}
                <span className="text-gray-900 font-medium">fresher</span>, and more{' '}
                <span className="text-gray-900 font-medium">confident experience</span>, every single day.
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

export default PureOneProduct;
