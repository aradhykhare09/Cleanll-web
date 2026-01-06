import React from "react";
import { motion } from "framer-motion";

const ExcellenceSection = () => {
  const items = [
    {
      title: "Trusted by Professionals",
      img: "/excellence/Trusted by Professionals.png",
    },
    {
      title: "Sustainable Smart Living",
      img: "/excellence/Sustainable Smart Living.png",
    },
    {
      title: "Proudly Made in India",
      img: "/excellence/Proudly Made In INDIA.png",
    },
    {
      title: "Innovations That Matter",
      img: "/excellence/Innovations That Matters.png",
    },
    {
      title: "India’s Smart Sanitary Pioneer",
      img: "/excellence/India's Smart Sanitary Pioneer.png",
    },
    {
      title: "Assured Quality Promise",
      img: "/excellence/Assured Quality Promise.png",
    },
  ];

  return (
    <section className="w-full bg-[#fafafa] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-16"
        >
          Cleanll Excellence
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-100 p-10 
                         flex flex-col items-center text-center
                         hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="h-20 w-auto object-contain mb-6 
                           group-hover:scale-105 transition-transform duration-300"
              />

              {/* Title */}
              <h3 className="text-sm md:text-base font-medium tracking-wide text-gray-700">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExcellenceSection;
