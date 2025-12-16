import React from 'react';
import { Globe, ShieldCheck } from 'lucide-react'; // Icons for visual appeal

const VisionMission = () => {
  return (
    <section className="py-24 bg-[#2e4a85] text-white overflow-hidden relative">
      {/* Background Pattern (Optional subtle texture) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full blur-[150px] mix-blend-overlay"></div>
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-blue-400 rounded-full blur-[100px] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

          {/* --- VISION SECTION --- */}
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <Globe size={24} className="text-blue-200" />
              </div>
              <span className="text-sm font-bold tracking-[0.25em] text-blue-200 uppercase">
                Vision
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight">
              RISE FORWARD
            </h2>

            <p className="text-blue-50 text-lg leading-relaxed opacity-90 text-justify">
              To empower <span className="font-bold text-white">India</span> as a global benchmark for smart, sustainable sanitary solutions by continually innovating, manufacturing <span className="font-bold text-white">locally</span>, and integrating intelligent features that elevate hygiene and comfort for every household, builder, architect, and interior designer.
            </p>
          </div>

          {/* --- MISSION SECTION --- */}
          <div className="flex flex-col items-start space-y-6 md:border-l md:border-blue-400/30 md:pl-16 lg:pl-24">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-400/20 rounded-lg">
                <ShieldCheck size={24} className="text-blue-200" />
              </div>
              <span className="text-sm font-bold tracking-[0.25em] text-blue-200 uppercase">
                Mission
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight leading-tight">
              OUR PLEDGE
            </h2>

            <p className="text-blue-50 text-lg leading-relaxed opacity-90 text-justify">
              <span className="font-bold text-white">Cleanll’s</span> mission is to deliver technologically advanced, reliable, and affordable smart sanitary products that enrich user experience, promote health and hygiene, and contribute to <span className="font-bold text-white">sustainable living</span>. The company is committed to delivering quality with warranty and guarantee, providing exceptional value for end-users and professionals alike.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;