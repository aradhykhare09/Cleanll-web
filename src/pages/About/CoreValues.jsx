import React from 'react';

const CoreValues = () => {
  // Data from screenshot
  const values = [
    {
      id: 1,
      title: "First Mover Innovation",
      desc: "Consistently pioneering new technologies and user-focused features for the Indian market.",
      // Yahan apni image ka path daalein
      icon: "/about/A.png" 
    },
    {
      id: 2,
      title: "Sustainability",
      desc: "Integrating eco-friendly practices in every step from design to production.",
      icon: "/about/B.png" 
    },
    {
      id: 3,
      title: "Quality and Assurance",
      desc: "Every Cleanll product comes with robust quality checks, warranty, and guarantee.",
      icon: "/about/C.png" 
    },
    {
      id: 4,
      title: "Smart Pricing",
      desc: "Offering premier technology while ensuring affordability for customers and partners.",
      icon: "/about/D.png"  
    },
    {
      id: 5,
      title: "User-Centric Design",
      desc: "Crafted with real user needs in mind ensuring comfort, convenience, and intuitive functionality in every product.",
      icon: "/about/E.png" 
    },
    {
      id: 6,
      title: "Long-Term Performance",
      desc: "Engineering products that deliver consistent, dependable performance for years, backed by trustworthy components & rigorous testing.",
      icon: "/about/F.png" 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-serif text-[#232323] font-semibold mb-12 uppercase tracking-wide">
          Our Core Values
        </h2>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <div 
              key={value.id} 
              className="bg-[#faf9f6] p-10 md:p-12 flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300 group"
            >
              {/* IMAGE ICON CONTAINER */}
              <div className="mb-6 h-16 w-16 flex items-center justify-center">
                <img 
                  src={value.icon} 
                  alt={value.title} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;