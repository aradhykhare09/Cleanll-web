import React from 'react';
import { motion } from 'framer-motion';

const BannerImage = () => {
  return (
    <section className="w-full bg-white">
      
      {/* DESKTOP IMAGE (Hidden on Mobile) */}
      <div className="hidden md:block w-full">
        <motion.img 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          src="/banner2/Footer Banner.webp" 
          alt="Full Width Banner"
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* MOBILE IMAGE (Hidden on Desktop) */}
      <div className="block md:hidden w-full">
        <motion.img 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           src="/banner2/Footer Banner_V.webp" 
           alt="Mobile Banner"
           loading="lazy"
           decoding="async"
           className="w-full h-auto object-cover"
        />
      </div>

    </section>
  );
};

export default BannerImage;