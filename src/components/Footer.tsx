"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ShieldCheck, FileText } from "lucide-react";

export default function Footer() {
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubscribed(true);
    setEmailInput("");
  };

  return (
    <footer id="contact" className="bg-primary text-cream pt-20 pb-8 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-5 space-y-6 text-left">
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
            
            <p className="text-xs text-cream/75 max-w-sm leading-relaxed font-light">
              Supplying the purest organic dairy and Vedic Bilona Ghee to families across Mumbai since 2017. Sourced ethically, churned traditionally.
            </p>

            {/* Newsletter Subscription */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold">
                Join Our Dairy Club
              </h4>
              {subscribed ? (
                <p className="text-xs text-forest bg-forest/20 px-4 py-2 rounded-xl border border-forest/10 inline-block font-semibold">
                  ✓ Successfully subscribed for farm updates!
                </p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-cream/10 border border-cream/20 rounded-l-xl px-4 py-2.5 text-xs text-cream focus:border-gold focus:outline-none placeholder:text-cream/40"
                  />
                  <button
                    type="submit"
                    className="bg-gold text-white px-5 rounded-r-xl text-xs font-bold hover:bg-gold-hover transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-cream/80 font-light">
              <li>
                <a href="#products" className="hover:text-gold transition-colors">Our Products</a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold transition-colors">Vedic Churning Method</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-gold transition-colors">Customer Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">Contact Details</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
              Store & Office Location
            </h4>
            <ul className="space-y-3.5 text-xs text-cream/80 font-light">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Shop No. 9, Ibrahim Chawl, Near Diamond Garden,<br />
                  Sion Trombay Road, Chembur, Mumbai - 400071
                </span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 8422950000</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>uniteddairyfarms@gmail.com</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-3">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Instagram link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Facebook link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold hover:text-white transition-colors"
                aria-label="Youtube link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><path d="m10 15 5-3-5-3v6z"/></svg>
              </a>
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
            © {new Date().getFullYear()} United Dairy Farms. All rights reserved. Designed as Ultra Dairy Farms.
          </div>
        </div>
      </div>
    </footer>
  );
}
