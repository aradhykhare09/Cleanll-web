import React from 'react';
import { Smile, Droplets, ShieldCheck, Target, Sparkles } from 'lucide-react'; 

const ToiletBidetProduct = () => {
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
                src="/products/Bidet_W1 copy.png" 
                alt="Toilet Bidet Attachment" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: DESCRIPTION --- */}
          <div className="flex flex-col text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 self-start bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
              <Sparkles size={16} />
              <span>Toilet Bidet</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 uppercase tracking-tight">
              Non-Electric <br />
              <span className="text-gray-900 underline decoration-4 decoration-gray-400 underline-offset-4">
                 Bidet Attachment
              </span>
            </h2>
            
            {/* Sub-headline */}
            <p className="text-xl text-gray-500 font-medium mb-8 italic">
              "With Dual Nozzle For Ultimate Cleaning."
            </p>

            {/* FEATURE ICONS */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 mb-10 border-y border-gray-100 py-8">
              
              {/* Feature 1: Comfort */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                  <Smile size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Comfort</h4>
                  <p className="text-sm text-gray-600 leading-snug mt-1">
                    Gentle, controlled water stream; adjustable pressure; hands-free.
                  </p>
                </div>
              </div>
              
              {/* Feature 2: Water Efficiency */}
              <div className="flex items-start gap-4 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                  <Droplets size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Water Efficiency</h4>
                  <p className="text-sm text-gray-600 leading-snug mt-1">
                    Often uses less water because the spray is targeted and controlled.
                  </p>
                </div>
              </div>
              
              {/* Feature 3: Hygiene */}
              <div className="flex items-start gap-4 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                  <ShieldCheck size={24} />
                </div>
                 <div>
                  <h4 className="font-bold text-gray-900">Hygiene</h4>
                  <p className="text-sm text-gray-600 leading-snug mt-1">
                    Minimal hand contact reduces contamination risk; often includes self-cleaning nozzles.
                  </p>
                </div>
              </div>

               {/* Feature 4: Consistency */}
               <div className="flex items-start gap-4 group">
                 <div className="p-3 bg-gray-100 text-gray-900 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                  <Target size={24} />
                </div>
                 <div>
                  <h4 className="font-bold text-gray-900">Consistency</h4>
                  <p className="text-sm text-gray-600 leading-snug mt-1">
                    Water flow and spray angle are fixed and consistent every time.
                  </p>
                </div>
              </div>

            </div>

            {/* DETAILED TEXT */}
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Upgrade your bathroom experience with our 
                <span className="text-gray-900 italic font-semibold"> Non-Electric Toilet Bidet</span>. 
                Designed for simplicity and hygiene, it requires no electricity and fits seamlessly onto your existing toilet.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ToiletBidetProduct;