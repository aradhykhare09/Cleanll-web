import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Droplets, ShieldCheck, Target } from 'lucide-react'; 

// --- FEATURE ICON COMPONENT ---
const FeatureIcon = ({ Icon }) => {
  return (
    <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-gray-100 rounded-2xl text-gray-800 group-hover:bg-black group-hover:text-white transition-colors duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
  );
};

const BidetAdv = () => {
  // Data with Lucide Components
  const advantages = [
    {
      id: 1,
      title: "Comfort",
      desc: "Gentle, controlled water stream; adjustable pressure; hands-free.",
      icon: Smile 
    },
    {
      id: 2,
      title: "Water Efficiency",
      desc: "Often uses less water because the spray is targeted and controlled.",
      icon: Droplets
    },
    {
      id: 3,
      title: "Hygiene",
      desc: "Minimal hand contact reduces contamination risk; often includes self-cleaning nozzles.",
      icon: ShieldCheck
    },
    {
      id: 4,
      title: "Consistency",
      desc: "Water flow and spray angle are fixed and consistent every time.",
      icon: Target
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    // Applied 'font-poppins' and 'py-24'
    <section className="py-24 bg-white overflow-hidden font-poppins">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading - Master Size, No Serif */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-light text-gray-900 uppercase tracking-tight">
            Advantages of <span className="font-medium">Bidet</span>
          </h2>
          {/* Removed divider to match clean look */}
        </motion.div>

        {/* Features Grid - 2 Columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {advantages.map((item) => (
            <motion.div 
              key={item.id} 
              className="flex flex-row gap-6 items-start group"
              variants={itemVariants}
            >
              {/* ICON */}
              <FeatureIcon Icon={item.icon} />

              {/* TEXT CONTENT */}
              <div className="flex flex-col space-y-2">
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-black transition-colors">
                  {item.title}
                </h3>
                {/* Updated to Master Body Size (text-md) */}
                <p className="text-gray-600 text-base md:text-md leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BidetAdv;