import React from 'react';
import { Shield, Droplets, Smile, ShieldCheck } from 'lucide-react'; // Imported new icons for this theme

const PureOneProduct = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Layout: Left Image | Right Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative">
            {/* Background blob (Gray for consistency) */}
            <div className="absolute -inset-4 bg-gray-200 rounded-full opacity-50 blur-3xl -z-10"></div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
              {/* Placeholder Image - Replace with your actual product image */}
              <img 
                src="/products/PureOne_W1.png" 
                alt="Pure One AutoFlush Bidet" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          <div className="flex flex-col text-left">
            
            {/* Top Badge (Updated with new name and icon) */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Shield size={16} />
              <span>Pure One</span>
            </div>

            {/* HEADLINE (From screenshot) */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
              Where Hygiene Meets <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                Heightened Living.
              </span>
            </h2>
            
            {/* Sub-headline (From screenshot) */}
            <p className="text-xl text-gray-500 font-medium mb-8 italic">
              "India's First Non Electric Offseat Auto Flushing Toilet With Bidet."
            </p>

            {/* FEATURE ICONS (Updated for Hygiene/Freshness theme) */}
            <div className="grid grid-cols-3 gap-4 mb-10 border-y border-gray-100 py-8">
              
              <div className="flex flex-col items-center text-center gap-3 group">
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Ultimate<br/>Hygiene</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Droplets size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Refreshing<br/>Clean</span>
              </div>
              
              <div className="flex flex-col items-center text-center gap-3 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Smile size={24} />
                </div>
                <span className="text-sm font-bold text-gray-700">Confidence<br/>Boost</span>
              </div>

            </div>

            {/* EXPANDED DESCRIPTION (From screenshot, with italic highlights) */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                <strong>Engineered to fit seamlessly on any toilet seat.</strong> Our AutoFlush TankLess Bidet Toilet is designed to redefine your bathroom experience.
              </p>
              <p>
                It transforms daily cleansing into a 
                <span className="text-gray-900 italic font-semibold"> healthier</span>, 
                <span className="text-gray-900 italic font-semibold"> fresher</span>, and more 
                <span className="text-gray-900 italic font-semibold"> confident experience</span>, every single day.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PureOneProduct;