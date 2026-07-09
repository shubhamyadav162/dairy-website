"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function RefundPolicy() {
  return (
    <main className="min-h-screen bg-cream text-primary py-20 px-4 sm:px-6 lg:px-8 text-left">
      <div className="max-w-3xl mx-auto bg-white border border-primary/5 rounded-3xl p-8 sm:p-12 shadow-xl">
        <Link href="/" className="inline-flex items-center space-x-2 text-gold hover:text-gold-hover text-sm font-semibold transition-colors duration-200 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-gold/10 text-gold rounded-2xl">
            <RefreshCw className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary">
            Refund & Cancellation
          </h1>
        </div>
        <p className="text-xs text-primary/50 mb-8 uppercase tracking-widest font-bold">
          Last Updated: July 2026
        </p>

        <div className="space-y-6 text-sm text-primary/80 leading-relaxed font-light">
          <p>
            At **United Dairy Farms**, we are committed to providing you with the freshest and highest quality milk, ghee, and dairy products. Since we deal in perishable food goods, our refund and cancellation policies are framed to ensure hygiene and customer satisfaction.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            1. Perishable Goods (Milk, Butter, Paneer)
          </h2>
          <p>
            Due to the fresh, preservative-free nature of our milk, curd, paneer, and butter, these products are **non-returnable and non-refundable** once delivered successfully. 
          </p>
          <p>
            However, if you receive a damaged pouch, leaked milk bottle, or the product has spoiled prior to delivery, please contact our support team within **2 hours** of delivery with details/images. We will arrange a free replacement in your next delivery slot or initiate a refund.
          </p>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            2. Ghee & Honey (Non-Perishable Packaged Goods)
          </h2>
          <p>
            For items with longer shelf life like A2 Gir Cow Ghee, Buffalo Ghee, and Wild Honey, returns are accepted within **7 days** of delivery, provided:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>The safety seal is completely unbroken.</li>
            <li>The packaging jar is unopened and undamaged.</li>
            <li>The original purchase receipt/invoice is attached.</li>
          </ul>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            3. Subscription Cancellations & Pauses
          </h2>
          <p>
            For daily milk subscriptions, you can pause or cancel deliveries at any time:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Deliveries paused before **8:00 PM** will take effect from the next day's morning delivery.</li>
            <li>If you decide to cancel your subscription entirely, any prepaid balance remaining in your account wallet will be fully refunded to your original payment mode within **5-7 business days**.</li>
          </ul>

          <h2 className="text-lg font-heading font-bold text-primary pt-4 border-t border-primary/5">
            4. Refund Execution
          </h2>
          <p>
            Approved refunds will be processed and credited back to your original payment gateway (UPI, Netbanking, Credit/Debit card) or bank account. It typically takes **5 to 7 working days** to reflect in your account.
          </p>
        </div>
      </div>
    </main>
  );
}
