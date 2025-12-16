import React from 'react';

const FeaturesSection = () => {
  // Data from your screenshot
  const features = [
    {
      id: 1,
      title: "Cleaning range is adjustable",
      desc: "Increase the cleaning space, no need to clean repeatedly. With adjustable softness, strength, temperature, and intensity gears.",
      image: "/aquasky/Aquasky_A.png" 
    },
    {
      id: 2,
      title: "Built-in water tank",
      desc: "Built-in sunken water tank equipped with efficient accessories. Washes more hygienically with strong instant flushing pressure.",
      image: "/aquasky/Aquasky_F.png" 
    },
    {
      id: 3,
      title: "Built-in perfume",
      desc: "The hole releases aromatic fragrance, alleviates residual odors, and avoids embarrassment for successive users.",
      image: "/aquasky/Aquasky_B.png" 
    },
    {
      id: 4,
      title: "Built-in foot click flushing",
      desc: "By touching the foot button gently, it enables manual flushing of the intelligent smart toilet without using hands.",
      image: "/aquasky/Aquasky_G.png" 
    },
    {
      id: 5,
      title: "Sensor Based Automatic opening",
      desc: "Automatic opening of the seat cover when the human body reaches closer. No need to bend over or get your hands dirty.",
      image: "/aquasky/Aquasky_C.png" 
    },
    {
      id: 6,
      title: "Mobile air drying",
      desc: "The range of drying is larger, and the air outlet is closer to the hip with an accurate flap, ensuring hot air remains concentrated.",
      image: "/aquasky/Aquasky_H.png" 
    },
    {
      id: 7,
      title: "Hygienic Bubble Shield",
      desc: "A soft cushion of bubbles forms inside the toilet bowl, preventing splashes, stains, and eliminating odor at the source.",
      image: "/aquasky/Aquasky_D.png" 
    },
    {
      id: 8,
      title: "Ambient light", 
      desc: "Soft water atmosphere lamp, suitable for various ambience.",
      image: "/aquasky/Aquasky_I.png"  
    },
    {
      id: 9,
      title: "UV Sterilization",
      desc: "After using the toilet, the system automatically closes and opens the sterilization function for ultimate hygiene.",
      image: "/aquasky/Aquasky_E.png" 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
            Advanced <span className="italic font-serif">Features</span>
          </h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
        </div>

        {/* Features Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col sm:flex-row gap-6 items-start group">
              
              {/* IMAGE PART */}
              <div className="w-full sm:w-2/5 shrink-0">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
                  {/* Image Placeholder */}
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>

              {/* TEXT PART */}
              <div className="w-full sm:w-3/5">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:underline decoration-1 underline-offset-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;