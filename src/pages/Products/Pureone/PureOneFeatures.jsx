import React from 'react';

const PureOneFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Knob Operation (Dual Mode)",
      desc: "Cleanll PureOne autoflush tankless bidet toilet is equipped with a one button drive function, achieving dual mode functions for feminine wash and hip wash. Rotate the knob forward for hip wash and rotate the knob backward for feminine wash.",
      image: "/pureone/7.png" 
    },
    {
      id: 2,
      title: "Non Electric Washing Platform",
      desc: "Using the water pressure of tap water to push the nozzle spray water. Cleanll PureOne can achieve Hip washing and Feminine washing functions without any electricity. It provides a healthy, comfortable and hygienic way for healthier life.",
      image: "/pureone/6.png" 
    },
    {
      id: 3,
      title: "Offseat Auto Flushing",
      desc: "PureOne introduces the most useful function, the moment user is offseat, it Automatically flushes the toilet in 3 seconds. In case of low battery foot touch manual flushing is also provided in the toilet.",
      image: "/pureone/1.png" 
    },
    {
      id: 4,
      title: "Soft close seat cover/ring",
      desc: "PureOne is equipped with a silent seat cover/ring to safeguard every quiet moment. A Tankless Toilet can achieve soft closing of the seat cover/seat Ring almost no noise.",
      image: "/pureone/2.png" 
    },
    {
      id: 5,
      title: "Foot touch manual flushing",
      desc: "When men urinates or low battery, manual flushing is to be used.",
      image: "/pureone/3.png" 
    },
    
    {
      id: 6,
      title: "Hip & Feminine Wash", 
      desc: "Specialized nozzle design providing dedicated spray angles for both Hip Wash and Feminine Wash, ensuring targeted cleaning and maximum hygiene without electricity.",
      image: "/pureone/4.png" 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
            Advanced <span className="italic font-serif">Capabilities</span>
          </h2>
          <div className="h-1 w-20 bg-black mx-auto mt-4"></div>
        </div>

        {/* Features Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col sm:flex-row gap-6 items-start group">
              
              {/* IMAGE PART */}
              <div className="w-full sm:w-2/5 shrink-0">
                <div className="aspect-4/3 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
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

export default PureOneFeatures;