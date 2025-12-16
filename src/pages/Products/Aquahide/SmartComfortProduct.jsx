import React from 'react';
import { ThermometerSun, Droplets, Wind, ScanFace, Sparkles } from 'lucide-react'; 

const SmartComfortProduct = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Layout: Left Image | Right Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative">
            {/* Background blob gray */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-50 blur-3xl -z-10"></div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              {/* PLACEHOLDER IMAGE - Replace with your product image */}
              <img 
                src="/products/Bidet_W1.png" 
                alt="Smart Comfort Toilet" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          <div className="flex flex-col text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>AquaHide</span>
            </div>

            {/* HEADLINE (Inspired by screenshot features) */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
              Ultimate Comfort <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                & Intelligent Hygiene
              </span>
            </h2>
            
            {/* Sub-headline */}
            <p className="text-xl text-gray-500 font-medium mb-8 italic">
              "Experience a new level of cleanliness and warmth."
            </p>

            {/* FEATURE ICONS (Based on screenshot text) */}
            <div className="grid grid-cols-4 gap-4 mb-10 border-y border-gray-100 py-8">
              
              {/* Seat Heating */}
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ThermometerSun size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Seat<br/>Heating</span>
              </div>
              
              {/* Washing */}
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Droplets size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Multi-func<br/>Washing</span>
              </div>
              
              {/* Drying */}
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Wind size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Warm Air<br/>Drying</span>
              </div>

               {/* Smart Sensor */}
               <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ScanFace size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Smart<br/>Sensor</span>
              </div>

            </div>

            {/* DETAILED TEXT (Combined from screenshots) */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Embrace a touchless and comfortable experience. Our smart toilet features <span className="text-gray-900 italic font-semibold">three levels of seat heating</span> for ultimate comfort, ensuring warmth exactly when you need it.
              </p>
              
              <p>
                Enjoy a multi-functional washing experience followed by a <span className="text-gray-900 italic font-semibold">warm air drying function</span> for a fresh, clean feeling every time.
              </p>

              <p>
                 The advanced <span className="text-gray-900 italic font-semibold">smart sensor</span> technology enables automatic flushing and seat opening, providing a truly hygienic, hands-free environment.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartComfortProduct;