import React from 'react';

const ComfortFeaturesSection = () => {
  // Data updated based on new screenshot
  const features = [
    {
      id: 1,
      title: "Cleaning range is adjustable",
      desc: "Increase the cleaning space, no need to clean repeatedly, with softness and strength, temperature, intensity, different gears regulation.",
      image: "/aquabreeze/8.png" 
    },
    {
      id: 2,
      title: "Built-in water tank",
      desc: "Built-in sunken water tank, equipped with efficient accessories, washes more hygienically, water pressure for stable water flow, strong instant flushing.",
      image:"/aquabreeze/7.png"
    },
    {
      id: 3,
      title: "Built-in perfume",
      desc: "The hole releases the aromatic fragrance, alleviates the residual odor of many people in the toilet successively and avoids embarrassment.",
      image: "/aquabreeze/6.png"
    },
    {
      id: 4,
      title: "Built-in foot click flushing",
      desc: "By touching the foot button gently, it enables flushing manually of the intelligent smart toilet.",
      image: "/aquabreeze/5.png"
    },
    {
      id: 5,
      title: "Sensor Based Automatic opening",
      desc: "Automatic opening of the seat cover, when human body reaches closer to the intelligent smart toilet, No need to bend over and get your hands dirty.",
      image: "/aquabreeze/4.png" 
    },
    {
      id: 6,
      title: "Seat heating for ultimate comfort", 
      desc: "Built-in temperature control keeps the seat perfectly warm, adapting automatically to your preference.",
      image:"/aquabreeze/3.png"
    },
    {
      id: 7,
      title: "Hygienic Bubble Shield",
      desc: "A soft cushion of bubbles forms inside the toilet bowl, keeping the surface lubricated and clean. This advanced bubble layer reduces splashes, prevents stains, and helps eliminate odor at the source.",
      image: "/aquabreeze/1.png"
    },
    {
      id: 8,
      title: "Ambient light",
      desc: "Soft water atmosphere lamp, suitable for various ambience.",
      image:"/aquabreeze/2.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
            Premium <span className="italic font-serif">Comfort</span>
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

export default ComfortFeaturesSection;