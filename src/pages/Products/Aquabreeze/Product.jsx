import React from 'react';
import { Rocket, Globe, Sparkles, ScanFace, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const SpaceProduct = () => {

  // 🔑 CATALOG CONFIG (page ke according)
  const catalogFile = 'cleanll_AquaBreeze.pdf';

  const handleDownload = () => {
    window.location.href = `/catalogs/${catalogFile}`;
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-40 blur-3xl -z-10 group-hover:opacity-60 transition-opacity duration-500"></div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img
                src="/products/AquaBreeze_W1.webp"
                alt="AquaBreeze Space Edition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 aspect-square"
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
            <div className="flex flex-row items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold">
                <Rocket size={16} />
                <span>AquaBreeze</span>
              </div>
              <span className="text-gray-900 font-bold text-lg">MRP ₹ 70,000/-</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl lg:text-5xl font-light text-gray-900 leading-tight">
              Designed for Earth. <br />
              <span className="font-medium">Inspired by Space.</span>
            </h2>

            <p className="text-gray-600 font-medium">
              "Where human ingenuity meets cosmic precision."
            </p>

            {/* Features */}
            <motion.div className="grid grid-cols-4 gap-4 border-y border-gray-100 py-6 my-2">
              <div className="flex flex-col items-center gap-2">
                <Globe size={20} />
                <span className="text-xs font-bold">Universal Design</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Sparkles size={20} />
                <span className="text-xs font-bold">Effortless Purity</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ScanFace size={20} />
                <span className="text-xs font-bold">Touchless Tech</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={20} />
                <span className="text-xs font-bold text-center">On Site<br />1 Year Warranty</span>
              </div>
            </motion.div>

            {/* Description */}
            <div className="text-gray-500 leading-relaxed">
              <strong>Innovation Meets Purity.</strong>
              <p>
                AquaBreeze delivers <span className="text-gray-900 font-medium">
                  space-age precision</span> for modern living.
              </p>
            </div>

            {/* 🔥 DOWNLOAD CATALOG – REAL LOGIC */}
            <div className="pt-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 text-lg font-semibold
                           text-[#c99d80] hover:text-[#080aa1]
                           transition-colors group"
              >
                <span>Download Catalog</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpaceProduct;
