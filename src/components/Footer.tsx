"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, FileText, ChevronRight } from "lucide-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setEmailInput("");
  };

  const paymentMethods = [
    { name: "PhonePe", color: "bg-purple-600 text-white" },
    { name: "VISA", color: "bg-blue-800 text-white" },
    { name: "MasterCard", color: "bg-red-600 text-white" },
    { name: "Paytm", color: "bg-sky-600 text-white" },
    { name: "GPay", color: "bg-emerald-600 text-white" },
    { name: "UPI", color: "bg-orange-600 text-white" }
  ];

  return (
    <footer
      id="contact"
      className="relative text-cream pt-0 pb-8 overflow-hidden bg-cover bg-center border-t border-gold/10"
      style={{ backgroundImage: "url('/images/footer-farm.jpg')" }}
    >
      {/* Dark Rich Overlay for Maximum Text Contrast & Readability */}
      <div className="absolute inset-0 bg-[#2D1E18]/92 backdrop-blur-[1px] z-0" />

      {/* Top Green Promo Marquee Bar (keeps z-10 for layering) */}
      <div className="relative z-10 bg-[#2F5233] text-cream py-2.5 text-xs uppercase tracking-widest font-semibold overflow-hidden border-b border-gold/10">
        <div className="flex animate-marquee whitespace-nowrap justify-around">
          <span>★ SHOP NOW AND SAVE UP TO 30% ★</span>
          <span className="hidden sm:inline">◆ FREE SHIPPING ABOVE ₹ 500/- ◆</span>
          <span>★ PURE VEDIC BILONA GHEE ★</span>
          <span className="hidden sm:inline">◆ DIRECT FROM UNITED DAIRY FARMS ◆</span>
          <span>★ SHOP NOW AND SAVE UP TO 30% ★</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          
          {/* Left Column: Brand & Payment Methods */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="space-y-4">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-cream/15 rounded-full flex items-center justify-center border border-gold/20 p-1.5 text-secondary">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path
                      d="M20,20 C30,35 30,65 30,80 C30,85 70,85 70,80 C70,65 70,35 80,20 C60,10 40,10 20,20 Z"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M38,40 C45,45 55,45 62,40 C62,55 62,65 50,72 C38,65 38,55 38,40 Z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-heading font-extrabold text-cream leading-none tracking-tight">
                    Ultra Dairy Farms
                  </span>
                  <span className="text-[10px] text-gold font-medium uppercase tracking-widest leading-none mt-1">
                    United Dairy Farms
                  </span>
                </div>
              </a>
              <p className="text-xs text-cream/70 leading-relaxed font-light">
                Supplying traditional bilona ghee and pure whole milk since 2017. Sourced ethically from grass-fed cows.
              </p>
            </div>

            {/* Payment Method Badges */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-gold">Accepted Payment Methods</h4>
              <div className="flex flex-wrap gap-1.5">
                {paymentMethods.map((pm, i) => (
                  <span key={i} className={`text-[9px] font-extrabold px-2.5 py-1 rounded-md shadow-sm border border-white/5 uppercase tracking-wider ${pm.color}`}>
                    {pm.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center Column: Quick Navigation Links & Policy Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">
                Shop Links
              </h4>
              <ul className="space-y-3 text-xs text-cream/80 font-light">
                <li>
                  <a href="#products" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Product Range
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Vedic Method
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Client Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-5">
                Legal Policies
              </h4>
              <ul className="space-y-3 text-xs text-cream/80 font-light">
                <li>
                  <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Refund & Cancellation
                  </Link>
                </li>
                <li>
                  <Link href="/shipping-policy" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gold/40" /> Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Customer Care Hotlines & Address */}
          <div className="lg:col-span-4 space-y-6 text-left border-t lg:border-t-0 pt-8 lg:pt-0 border-cream/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
              Customer Support Center
            </h4>

            <div className="space-y-3.5 text-xs font-light text-cream/90">
              <div className="border-b border-cream/5 pb-2">
                <p className="text-[10px] uppercase font-bold text-gold tracking-wider">For Any Query / Order Help</p>
                <div className="flex items-center gap-1.5 mt-1 font-semibold text-cream">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>+91 8422950000</span>
                </div>
              </div>

              <div className="border-b border-cream/5 pb-2">
                <p className="text-[10px] uppercase font-bold text-gold tracking-wider">For Delivery / Tracking Query</p>
                <div className="flex items-center gap-1.5 mt-1 font-semibold text-cream">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>+91 8422950000</span>
                </div>
              </div>

              <div className="border-b border-cream/5 pb-2">
                <p className="text-[10px] uppercase font-bold text-gold tracking-wider">For Complaint & Escalation</p>
                <div className="flex items-center gap-1.5 mt-1 font-semibold text-cream">
                  <Phone className="w-3.5 h-3.5 text-gold" />
                  <span>+91 8422950000</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase font-bold text-gold tracking-wider">Email Inquiry</p>
                <div className="flex items-center gap-1.5 mt-1 font-semibold text-cream">
                  <Mail className="w-3.5 h-3.5 text-gold" />
                  <span>uniteddairyfarms@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-start space-x-2.5 text-xs text-cream/70 font-light border-t border-cream/10">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                Shop No. 9, Ibrahim Chawl, Near Diamond Garden,<br />
                Sion Trombay Road, Chembur, Mumbai - 400071
              </span>
            </div>
          </div>

        </div>

        {/* Legal & Trust Marks */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-left">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] text-cream/50">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              FSSAI Lic. No: **21523007000560**
            </span>
            <span className="flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-gold" />
              GSTIN: **27AYTPS6177P1Z0**
            </span>
            <span className="text-cream/40">
              Proprietor: Munawwar Rafique Shaikh
            </span>
          </div>

          <div className="text-[10px] text-cream/40 text-center md:text-right">
            © {new Date().getFullYear()} United Dairy Farms. All rights reserved. Brand Designed as Ultra Dairy Farms.
          </div>
        </div>
      </div>
    </footer>
  );
}
