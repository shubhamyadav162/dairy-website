"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Shield, Award, Leaf, Truck } from "lucide-react";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const steps = [
    {
      chapter: "Chapter 1",
      title: "Our Grasslands & Cattle",
      description: "It all starts with our happy, grass-fed cows. Sourced from organic pastures, we care for native Indian cattle breeds like Gir, Sahiwal, and Rathi in bio-secure, stress-free barns. Our cows are fed premium organic fodder to ensure nutritional quality.",
      images: [
        "/images/WhatsApp Image 2026-07-09 at 2.19.16 PM.jpeg",
        "/images/WhatsApp Image 2026-07-09 at 2.19.16 PM (1).jpeg"
      ]
    },
    {
      chapter: "Chapter 2",
      title: "Hygienic Milking & Storage",
      description: "Every morning, milking is performed under strict supervision. The raw milk is immediately cooled in chilled stainless steel silos to 4°C to lock in freshness, prevent bacterial growth, and preserve the natural sweet flavor without boiling.",
      images: [
        "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM.jpeg",
        "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM (3).jpeg"
      ]
    },
    {
      chapter: "Chapter 3",
      title: "Pasteurization & Quality Control",
      description: "Our milk goes through gentle pasteurization in state-of-the-art machinery and is tested for over 40 lab parameters (including fat, SNF, water dilution, hormones, and antibiotics). We guarantee milk that is 100% pure and untouched by human hands.",
      images: [
        "/images/WhatsApp Image 2026-07-09 at 2.19.22 PM (1).jpeg",
        "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM (2).jpeg"
      ]
    },
    {
      chapter: "Chapter 4",
      title: "Traditional Bilona Churning",
      description: "To make our signature Vedic Ghee, whole milk is turned into curd, which is then churned back and forth using wooden bilona devices. The extracted white butter (makhan) is simmered slowly in copper pots over wood fires to achieve a rich, granular structure.",
      images: [
        "/images/WhatsApp Image 2026-07-09 at 2.19.21 PM (1).jpeg",
        "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM (1).jpeg"
      ]
    },
    {
      chapter: "Chapter 5",
      title: "Sustainable Packing & Delivery",
      description: "Our milk is packed in sterilized, eco-friendly glass bottles and our ghee in thick glass jars. Loaded into cold-chain trucks, our delivery executives deliver them straight to your doorstep across Mumbai before 8:00 AM.",
      images: [
        "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM (2).jpeg",
        "/images/WhatsApp Image 2026-07-09 at 2.19.20 PM (3).jpeg"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-cream/35 pt-32 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-gold hover:text-gold-hover text-sm font-semibold transition-colors duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header Hero Title */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-gold text-xs font-bold uppercase tracking-widest flex items-center gap-1.5">
            <Heart className="w-4 h-4 fill-current text-gold" />
            <span>Connecting Hearts with Purity</span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-primary leading-tight">
            Our Story: From Pasture <br />
            to your Doorstep
          </h1>
          <p className="text-base sm:text-lg text-primary/80 font-light leading-relaxed">
            At **United Dairy Farms**, we believe you deserve to know exactly where your food comes from. Here is the visual chronicle of our daily operations—the real people, the real cows, and the real machines behind Mumbai's pure milk and ghee.
          </p>
        </div>

        {/* Storyboard Layout */}
        <div className="space-y-24 relative">
          
          {/* Vertical timeline connector line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gold/25 transform -translate-x-1/2 z-0" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10`}
              >
                
                {/* Visual Media Block */}
                <div
                  className={`lg:col-span-6 grid grid-cols-2 gap-4 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {step.images.map((img, imgIdx) => (
                    <div
                      key={imgIdx}
                      className="relative pt-[100%] rounded-2xl overflow-hidden border border-primary/5 bg-white shadow-sm group"
                    >
                      <img
                        src={img}
                        alt={`${step.title} detail ${imgIdx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=400&auto=format&fit=crop";
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Content Block */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2 lg:col-start-8" : "lg:order-1 lg:col-start-2"
                  } space-y-4`}
                >
                  <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-3.5 py-1 rounded-full text-xs font-extrabold tracking-widest uppercase">
                    {step.chapter}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Company Certificates & Values Card */}
        <div className="mt-32 bg-white border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-lg text-center space-y-8 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl font-heading font-extrabold text-primary">Certified Sourcing & Quality</h3>
            <p className="text-xs text-primary/60 leading-relaxed font-light">
              United Dairy Farms operates with clean certifications. Our facilities undergo daily sanitization, and our operations comply fully with FSSAI hygiene guidelines.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-primary/5">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">FSSAI Certified</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Vedic Bilona Churn</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Organic Grass-Fed</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Cold-Chain Delivery</span>
            </div>
          </div>
        </div>

      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
