import React from 'react';
import { Rocket, Globe, Sparkles, ScanFace } from 'lucide-react'; // Space theme icons

const SpaceProduct = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Layout: Left Image | Right Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative group">
            {/* Background Blob - Subtle Gray */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-40 blur-3xl -z-10 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 relative">
              {/* Overlay Text on Image (Optional - Jaisa screenshot me tha) */}
              

              {/* IMAGE PLACEHOLDER */}
              <img 
                src="/products/AquaBreeze_W1.png"
                alt="AquaBreeze Space Edition" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          <div className="flex flex-col text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Rocket size={16} />
              <span>AquaBreeze Edition</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Designed for Earth. <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                Inspired by Space.
              </span>
            </h2>
            
            {/* Sub-headline from Image */}
            <p className="text-xl text-gray-600 font-medium mb-8 italic border-l-4 border-black pl-4">
              "Where human ingenuity meets cosmic precision—a symbol of advanced living."
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-200 py-8">
              
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="p-3 bg-white border border-gray-200 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Globe size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Universal<br/>Design</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-white border border-gray-200 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Sparkles size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Effortless<br/>Purity</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-white border border-gray-200 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shadow-sm">
                  <ScanFace size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Touchless<br/>Tech</span>
              </div>

            </div>

            {/* DETAILED TEXT (From Screenshot) */}
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">
                Innovation Meets Purity, & The Future Begins Today.
              </h3>
              
              <p>
                AquaBreeze by Cleanll brings you <span className="text-gray-900 italic font-medium">space-age precision</span> crafted for the modern home where technology, comfort, and design orbit in perfect harmony.
              </p>
              
              <p>
                Every feature is engineered to make your daily routine <span className="text-gray-900 italic font-medium">effortlessly refined</span>. Inspired by the infinite possibilities of space, AquaBreeze redefines hygiene with a touchless, seamless experience that feels almost <span className="text-gray-900 italic font-medium">otherworldly</span>.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SpaceProduct;