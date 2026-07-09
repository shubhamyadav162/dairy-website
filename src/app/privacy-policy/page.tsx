"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-cream text-primary py-20 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-3xl mx-auto bg-white border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl">
        <Link href="/" className="inline-flex items-center space-x-2 text-gold hover:text-gold-hover text-sm font-semibold transition-colors duration-200 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gold/10 text-gold rounded-2xl">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
            Privacy Policy
          </h1>
        </div>
        <p className="text-xs text-primary/50 mb-8 uppercase tracking-widest font-bold">
          Last Updated: July 2026
        </p>

        <div className="space-y-6 text-sm text-primary/80 leading-relaxed font-light">
          <p>
            At **United Dairy Farms**, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by United Dairy Farms and how we use it.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            1. Information We Collect
          </h2>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>
          <p>
            When you register for an Account or place an order, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect in various ways, including to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide, operate, and maintain our website and e-commerce services</li>
            <li>Improve, personalize, and expand our website offerings</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, for customer service, updates, and marketing purposes</li>
            <li>Process your payments and arrange for shipping/delivery of milk and ghee</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            3. Log Files
          </h2>
          <p>
            United Dairy Farms follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            4. Consent
          </h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            5. Contact Information
          </h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at **uniteddairyfarms@gmail.com** or visit us at **Shop No. 9, Ibrahim Chawl, Near Diamond Garden, Sion Trombay Road, Chembur, Mumbai - 400071**.
          </p>
        </div>
      </div>
    </main>
  );
}
