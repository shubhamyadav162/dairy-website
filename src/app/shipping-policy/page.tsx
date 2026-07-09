"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Truck } from "lucide-react";

export default function ShippingPolicy() {
  return (
    <main className="min-h-screen bg-cream text-primary py-20 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-3xl mx-auto bg-white border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl">
        <Link href="/" className="inline-flex items-center space-x-2 text-gold hover:text-gold-hover text-sm font-semibold transition-colors duration-200 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gold/10 text-gold rounded-2xl">
            <Truck className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
            Shipping & Delivery Policy
          </h1>
        </div>
        <p className="text-xs text-primary/50 mb-8 uppercase tracking-widest font-bold">
          Last Updated: July 2026
        </p>

        <div className="space-y-6 text-sm text-primary/80 leading-relaxed font-light">
          <p>
            Welcome to **United Dairy Farms**. Below are the shipping and delivery terms and conditions that govern our supply operations in Mumbai.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            1. Delivery Locations
          </h2>
          <p>
            Currently, our daily fresh milk delivery service is operating in selected regions of **Mumbai, Maharashtra**, including but not limited to:
            <br />
            **Chembur, Sion, Trombay, Bandra, Kurla, Juhu, and Ghatkopar.**
          </p>
          <p>
            Non-perishable packaged products like our A2 Desi Cow Bilona Ghee, Buffalo Ghee, and Wild Raw Honey can be shipped **all over India** through third-party courier partners.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            2. Delivery Timing & Slots
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>**Fresh Milk and Butter:** Delivered every morning between **5:00 AM and 8:00 AM** to ensure you receive fresh stock before breakfast.</li>
            <li>**Ghee & Honey orders (Mumbai):** Processed and delivered within **24 hours**.</li>
            <li>**National Ghee deliveries:** Dispatched within 24-48 hours, and delivered in **3 to 5 business days** depending on location.</li>
          </ul>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            3. Shipping & Delivery Charges
          </h2>
          <p>
            - **Subscription Milk Deliveries:** Zero delivery fees. Delivery is completely free as part of your active monthly subscription pack.
            <br />
            - **One-time E-commerce orders:** Free shipping on orders above **₹500** nationwide. A nominal shipping charge of ₹50 applies to orders below ₹500.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            4. Delivery Issues
          </h2>
          <p>
            In case of heavy rains, roadblocks, or unavoidable circumstances, deliveries may be slightly delayed. Our delivery agents will keep you updated via WhatsApp/phone. If you miss your morning delivery due to a locked door or restricted security gate, please coordinate with our support line at **+91 8422950000** for a redelivery slot.
          </p>
        </div>
      </div>
    </main>
  );
}
