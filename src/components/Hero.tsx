"use client";

import React from "react";
import { ArrowRight, Leaf, Shield, Award } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-cream">
      {/* Background Ambience / Optional Video Loop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          poster="/images/WhatsApp Image 2026-07-09 at 2.19.16 PM.jpeg"
        >
          <source src="/videos/WhatsApp Video 2026-07-09 at 2.19.17 PM.mp4" type="video/mp4" />
        </video>
        {/* Soft Organic Gradients Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-transparent" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-forest/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-forest/10 text-forest px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase self-start animate-fade-in">
              <Leaf className="w-3.5 h-3.5" />
              <span>100% Natural & Farm Fresh</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight tracking-tight">
              Purity in Every Drop, <br />
              <span className="text-gold italic font-normal">Tradition</span> in Every Spoon.
            </h1>

            <p className="text-base sm:text-lg text-primary/80 max-w-xl font-light leading-relaxed">
              Welcome to **Ultra Dairy Farms** (by United Dairy Farms). We deliver premium, farm-fresh whole milk, A2 cow milk, and traditional Vedic Bilona Ghee churned with ancient recipes to your doorstep in Mumbai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="premium-btn-gold flex items-center justify-center gap-2 group">
                Shop Premium Ghee
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#process" className="premium-btn-outline flex items-center justify-center gap-2">
                Our Vedic Process
              </a>
            </div>

            {/* Badges / Value Props */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary/10">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gold/10 text-gold rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider">FSSAI Certified</h3>
                  <p className="text-[10px] text-primary/60">Strict safety standards</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gold/10 text-gold rounded-lg">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Vedic Bilona</h3>
                  <p className="text-[10px] text-primary/60">Traditional clay pot churning</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gold/10 text-gold rounded-lg">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-primary uppercase tracking-wider">100% Organic</h3>
                  <p className="text-[10px] text-primary/60">No preservatives added</p>
                </div>
              </div>
            </div>

          </div>

          {/* Hero Featured Card / Image */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-96 sm:w-80 sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-cream">
              {/* Main user-uploaded hero illustration */}
              <img
                src="/images/hero-farm.png"
                alt="Ultra Premium Dairy Heritage"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=600&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                  Vedic Tradition
                </span>
                <h3 className="text-xl font-heading font-bold mt-2 text-white">
                  Ultra Pure & Natural
                </h3>
                <p className="text-xs text-white/80 mt-1">
                  Churned using traditional wood methods and sourced from clean, local pastures.
                </p>
              </div>
            </div>

            {/* Float Element */}
            <div className="absolute -bottom-6 -right-2 glass-card p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-gold/30 animate-pulse">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-white font-bold font-heading text-sm">
                4.9★
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-primary">Customer Choice</p>
                <p className="text-[10px] text-primary/70">Based on 1200+ ratings</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
