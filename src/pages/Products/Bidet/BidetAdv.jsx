import React from 'react';
import { motion } from 'framer-motion';

const BidetAdv = () => {
  return (
    <section className="py-16 md:py-24 bg-[#FDFBF7] font-poppins text-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading - Centered and Responsive */}
        <motion.div
          className="mb-10 text-center border-b border-[#D4C5A9] pb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#8C7B5D] uppercase tracking-wide px-2">
            Advantages of Bidet Over Jet Spray/Health Faucet
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          className="border border-[#D4C5A9] rounded-sm overflow-hidden bg-white shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Desktop Header - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-12 bg-[#F3EFE6] border-b border-[#D4C5A9] font-bold text-gray-900 text-lg">
            <div className="col-span-2 p-5 border-r border-[#D4C5A9]">Aspect</div>
            <div className="col-span-5 p-5 border-r border-[#D4C5A9] text-[#8C7B5D]">Bidet (seat attachment or built-in)</div>
            <div className="col-span-5 p-5 text-gray-700">Jet Spray / Health Faucet</div>
          </div>

          {/* Row 1: Comfort */}
          <div className="flex flex-col md:grid md:grid-cols-12 border-b border-[#D4C5A9] bg-[#F9F6F0]">
            <div className="p-4 md:p-5 md:col-span-2 font-semibold border-b md:border-b-0 md:border-r border-[#D4C5A9] bg-[#EAE4D3] md:bg-transparent flex items-center">
              <span className="text-base md:text-lg">Comfort</span>
            </div>
            <div className="p-4 md:p-5 md:col-span-5 border-b md:border-b-0 md:border-r border-[#D4C5A9]">
              <span className="md:hidden font-bold text-[#8C7B5D] block mb-1 text-sm uppercase">Bidet:</span>
              <p className="text-gray-800">Gentle, controlled water stream; adjustable pressure; hands-free.</p>
            </div>
            <div className="p-4 md:p-5 md:col-span-5">
              <span className="md:hidden font-bold text-gray-500 block mb-1 text-sm uppercase">Jet Spray:</span>
              <p className="text-gray-600">Stronger, sometimes harsh water jet; requires manual aiming.</p>
            </div>
          </div>

          {/* Row 2: Hygiene */}
          <div className="flex flex-col md:grid md:grid-cols-12 border-b border-[#D4C5A9] bg-white">
            <div className="p-4 md:p-5 md:col-span-2 font-semibold border-b md:border-b-0 md:border-r border-[#D4C5A9] bg-[#EAE4D3] md:bg-transparent flex items-center">
              <span className="text-base md:text-lg">Hygiene</span>
            </div>
            <div className="p-4 md:p-5 md:col-span-5 border-b md:border-b-0 md:border-r border-[#D4C5A9]">
              <span className="md:hidden font-bold text-[#8C7B5D] block mb-1 text-sm uppercase">Bidet:</span>
              <p className="text-gray-800">Minimal hand contact reduces contamination risk; often includes self-cleaning nozzles.</p>
            </div>
            <div className="p-4 md:p-5 md:col-span-5">
              <span className="md:hidden font-bold text-gray-500 block mb-1 text-sm uppercase">Jet Spray:</span>
              <p className="text-gray-600">Requires you to hold and aim the nozzle, increasing the chance of contact with unclean surfaces.</p>
            </div>
          </div>

          {/* Row 3: Consistency */}
          <div className="flex flex-col md:grid md:grid-cols-12 border-b border-[#D4C5A9] bg-[#F9F6F0]">
            <div className="p-4 md:p-5 md:col-span-2 font-semibold border-b md:border-b-0 md:border-r border-[#D4C5A9] bg-[#EAE4D3] md:bg-transparent flex items-center">
              <span className="text-base md:text-lg">Consistency</span>
            </div>
            <div className="p-4 md:p-5 md:col-span-5 border-b md:border-b-0 md:border-r border-[#D4C5A9]">
              <span className="md:hidden font-bold text-[#8C7B5D] block mb-1 text-sm uppercase">Bidet:</span>
              <p className="text-gray-800">Water flow and spray angle are fixed and consistent every time.</p>
            </div>
            <div className="p-4 md:p-5 md:col-span-5">
              <span className="md:hidden font-bold text-gray-500 block mb-1 text-sm uppercase">Jet Spray:</span>
              <p className="text-gray-600">Angle and pressure vary based on user’s hand control; can be messy.</p>
            </div>
          </div>

          {/* Row 4: Water Efficiency */}
          <div className="flex flex-col md:grid md:grid-cols-12 border-b border-[#D4C5A9] bg-white">
            <div className="p-4 md:p-5 md:col-span-2 font-semibold border-b md:border-b-0 md:border-r border-[#D4C5A9] bg-[#EAE4D3] md:bg-transparent flex items-center">
              <span className="text-base md:text-lg">Water Efficiency</span>
            </div>
            <div className="p-4 md:p-5 md:col-span-5 border-b md:border-b-0 md:border-r border-[#D4C5A9]">
              <span className="md:hidden font-bold text-[#8C7B5D] block mb-1 text-sm uppercase">Bidet:</span>
              <p className="text-gray-800">Often uses less water because the spray is targeted and controlled.</p>
            </div>
            <div className="p-4 md:p-5 md:col-span-5">
              <span className="md:hidden font-bold text-gray-500 block mb-1 text-sm uppercase">Jet Spray:</span>
              <p className="text-gray-600">Can waste more water due to overspray or high-pressure use.</p>
            </div>
          </div>

          {/* Row 5: Accessibility */}
          <div className="flex flex-col md:grid md:grid-cols-12 border-b border-[#D4C5A9] bg-[#F9F6F0]">
            <div className="p-4 md:p-5 md:col-span-2 font-semibold border-b md:border-b-0 md:border-r border-[#D4C5A9] bg-[#EAE4D3] md:bg-transparent flex items-center">
              <span className="text-base md:text-lg">Accessibility</span>
            </div>
            <div className="p-4 md:p-5 md:col-span-5 border-b md:border-b-0 md:border-r border-[#D4C5A9]">
              <span className="md:hidden font-bold text-[#8C7B5D] block mb-1 text-sm uppercase">Bidet:</span>
              <p className="text-gray-800">Easier for elderly, disabled, or those with limited mobility, no need to twist or reach.</p>
            </div>
            <div className="p-4 md:p-5 md:col-span-5">
              <span className="md:hidden font-bold text-gray-500 block mb-1 text-sm uppercase">Jet Spray:</span>
              <p className="text-gray-600">Can be difficult for people with mobility or grip issues to operate.</p>
            </div>
          </div>

          {/* Summary / In Short */}
          <div className="p-6 md:p-8 bg-[#F3EFE6] text-sm md:text-base leading-relaxed text-gray-800">
            <strong>In Short:</strong> A bidet is cleaner, more comfortable, and more consistent, while a jet spray/health faucet is cheaper and easier to install but less hygienic and can be messy. Many people who switch to a bidet say it feels like an “upgrade” in both cleanliness & comfort.
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default BidetAdv;