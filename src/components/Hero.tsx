"use client";

import React from "react";
import { ArrowRight, Leaf, Shield, Award } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-farm.png')" }}
    >
      {/* Light Cream/Gold Overlay to keep illustration visible but make dark text highly readable */}
      <div className="absolute inset-0 bg-[#FAF6EE]/75 backdrop-blur-[0.5px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Centered or left-aligned card box that floats on top of the background */}
        <div className="max-w-2xl bg-white/40 backdrop-blur-md border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl text-left space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-forest/15 text-forest px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase self-start">
            <Leaf className="w-3.5 h-3.5" />
            <span>100% Natural & Farm Fresh</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight tracking-tight">
            Purity in Every Drop, <br />
            <span className="text-gold italic font-normal">Tradition</span> in Every Spoon.
          </h1>

          <p className="text-base sm:text-lg text-primary/90 font-light leading-relaxed">
            Welcome to **United Dairy Farms** (UDF). We deliver premium, farm-fresh whole milk, A2 cow milk, and traditional Vedic Bilona Ghee churned with ancient recipes to your doorstep in Mumbai.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href="#products" className="premium-btn-gold flex items-center justify-center gap-2 group">
              Shop Premium Ghee
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#process" className="premium-btn-outline flex items-center justify-center gap-2">
              Our Vedic Process
            </a>
          </div>

          {/* Badges / Value Props */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-primary/10">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gold/10 text-gold rounded-lg">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider leading-none">FSSAI</h3>
                <p className="text-[9px] text-primary/70 mt-1">Lic. 21523007000560</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gold/10 text-gold rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider leading-none">Bilona</h3>
                <p className="text-[9px] text-primary/70 mt-1">Clay pot method</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gold/10 text-gold rounded-lg">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-wider leading-none">Organic</h3>
                <p className="text-[9px] text-primary/70 mt-1">Zero chemicals</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
