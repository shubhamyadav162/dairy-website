"use client";

import React from "react";
import { Coffee, RotateCw, Flame, HelpCircle, Heart } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      icon: <Coffee className="w-6 h-6 text-gold" />,
      title: "1. Fresh A2 Milk Sourcing",
      desc: "We collect fresh A2 cow milk from pasture-fed, grass-eating desi cows. The milk is boiled to ensure absolute hygiene."
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-gold" />,
      title: "2. Setting the Curd",
      desc: "Instead of separating cream directly from milk (the industrial way), we convert the whole milk into thick, curd overnight."
    },
    {
      icon: <RotateCw className="w-6 h-6 text-gold" />,
      title: "3. Vedic Clay Pot Churning",
      desc: "Curds are hand-churned using a wooden churner (Bilona) in earthen pots back-and-forth, yielding highly nutritive white butter (makhan)."
    },
    {
      icon: <Flame className="w-6 h-6 text-gold" />,
      title: "4. Slow Fire Heating",
      desc: "The white butter is separated and slow-boiled in copper vessels over low heat from firewood, evaporating water content to leave pure ghee."
    },
    {
      icon: <Heart className="w-6 h-6 text-gold" />,
      title: "5. Granular Ghee Filtration",
      desc: "The liquid golden ghee is filtered and allowed to cool slowly, developing the famous granular (danedar) texture and therapeutic aroma."
    }
  ];

  return (
    <section id="process" className="py-24 bg-cream/10 border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Vedic Tradition
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary mt-2">
            The Traditional Vedic Bilona Process
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-primary/70 text-sm mt-4">
            Industrial brands make ghee by separating cream and heating it quickly. We use the slow, 5-step Vedic method that preserves vitamins, butyric acids, and natural aroma.
          </p>
        </div>

        {/* Process Flow Steps */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-1/12 right-1/12 h-0.5 bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                {/* Icon circle */}
                <div className="w-20 h-20 bg-white border border-primary/5 shadow-md rounded-full flex items-center justify-center group-hover:border-gold group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 relative bg-cream">
                  {step.icon}
                  {/* Step counter */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-forest text-cream text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {idx + 1}
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="text-sm sm:text-base font-heading font-extrabold text-primary group-hover:text-gold transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="text-xs text-primary/70 leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional banner comparison */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-cream border border-gold/10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="shrink-0 relative w-32 h-32 rounded-2xl overflow-hidden shadow-md">
            {/* Displaying one of UDF's production images from WhatsApp */}
            <img
              src="/images/WhatsApp Image 2026-07-09 at 2.19.20 PM (3).jpeg"
              alt="Traditional Churner"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1546483875-ad9014c88ede?q=80&w=400&auto=format&fit=crop";
              }}
            />
          </div>
          
          <div className="text-left space-y-3">
            <h4 className="text-lg font-heading font-extrabold text-primary">
              Why Vedic Ghee is Liquid Gold
            </h4>
            <p className="text-xs text-primary/80 leading-relaxed">
              We process **30 Litres of pure milk** to create just **1 Litre of A2 Bilona Ghee**. The slow heating over woodfire caramelizes the milk solids, locking in the natural granules (danedar structure) and producing a butterscotch-like aroma. 
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="text-[10px] font-semibold text-forest flex items-center gap-1">
                ✓ No Preservatives
              </span>
              <span className="text-[10px] font-semibold text-forest flex items-center gap-1">
                ✓ Curd-Churned (Not Cream)
              </span>
              <span className="text-[10px] font-semibold text-forest flex items-center gap-1">
                ✓ Glass Jar Packaging
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
