import React from 'react';
import { Leaf, Wind, Feather, Sparkles } from 'lucide-react'; 

const NatureProduct = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* FIXED: Changed 'items-center' to 'items-start' for top alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative">
            {/* Background blob gray */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-50 blur-3xl -z-10"></div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              <img 
                src="/products/AquaLite_W1.png" 
                alt="Aqualite Nature Edition" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          <div className="flex flex-col text-left">
            
            {/* Top Badge (Same style as AquaSky) */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Aqualite</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
              Coexistence Between <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                Human & Nature
              </span>
            </h2>
            
            {/* Sub-headline */}
            <p className="text-xl text-gray-500 font-medium mb-8 italic">
              "Green and lush imagination."
            </p>

            {/* FEATURE ICONS (Black & White Theme) */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-100 py-8">
              
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Leaf size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Organic<br/>Feel</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Wind size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Fresh<br/>Breeze</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Feather size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Quiet<br/>Comfort</span>
              </div>

            </div>

            {/* DETAILED TEXT */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Amid the <span className="text-gray-900 italic font-semibold">hustle of urban life</span>, we create a quiet, comfortable, and healthy private space for you.
              </p>
              
              <p>
                Aqualite offers <span className="text-gray-900 italic font-semibold">complete relaxation</span> every time you use it. Designed to bring the tranquility of the forest into your home, ensuring a seamless harmony between modern living and the natural world.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NatureProduct;